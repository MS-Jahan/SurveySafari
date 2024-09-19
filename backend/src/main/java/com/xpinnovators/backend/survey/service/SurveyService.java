package com.xpinnovators.backend.survey.service;

import com.xpinnovators.backend.exception.ForbiddenException;
import com.xpinnovators.backend.exception.ResourceNotFoundException;
import com.xpinnovators.backend.survey.dto.AttendanceDTO;
import com.xpinnovators.backend.survey.dto.ResponseDTO;
import com.xpinnovators.backend.survey.dto.SurveyDTO;
import com.xpinnovators.backend.survey.entity.Survey;
import com.xpinnovators.backend.survey.entity.SurveyStatus;
import com.xpinnovators.backend.survey.repository.SurveyRepository;
import com.xpinnovators.backend.user.entity.User;
import com.xpinnovators.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import com.xpinnovators.backend.survey.entity.Attendance;
import com.xpinnovators.backend.survey.entity.Response;
import com.xpinnovators.backend.user.entity.Explorer;
import com.xpinnovators.backend.survey.repository.AttendanceRepository;
import com.xpinnovators.backend.survey.repository.ResponseRepository;
import com.xpinnovators.backend.user.repository.ExplorerRepository;

import javax.validation.Valid;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class SurveyService {

    private final SurveyRepository surveyRepository;
    private final UserRepository userRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private ResponseRepository responseRepository;

    @Autowired
    private ExplorerRepository explorerRepository;

    public SurveyService(SurveyRepository surveyRepository, UserRepository userRepository) {
        this.surveyRepository = surveyRepository;
        this.userRepository = userRepository;
    }

    // Create a new survey (Author only)
    public SurveyDTO createSurvey(SurveyDTO surveyDTO, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName());

        if (user.getAuthor() == null) {
            throw new ForbiddenException("Only authors can create surveys");
        }

        boolean isValidStatus = Arrays.stream(SurveyStatus.values())
                .anyMatch(status -> status.toString().equalsIgnoreCase(surveyDTO.getStatus()));

        if (!isValidStatus) {
            throw new IllegalArgumentException("Invalid survey status. Status must be either 'public' or 'private'.");
        }

        Survey survey = surveyDTO.toEntity(); // Ensure this method correctly maps fields
        survey.setAuthor(user.getAuthor());
        survey.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        survey.setStatus(String.valueOf(SurveyStatus.PRIVATE)); // Default status
        survey.setShareLink(generateUniqueShareLink());
        Survey savedSurvey = surveyRepository.save(survey);
        return new SurveyDTO(savedSurvey);
    }

    // Generate a unique share link for the survey
    private String generateUniqueShareLink() {
        return UUID.randomUUID().toString(); // Ensure this meets your requirements
    }

    // Get all surveys with pagination
    public Page<SurveyDTO> getAllSurveys(Pageable pageable) {
        return surveyRepository.findAll(pageable)
                .map(SurveyDTO::new);
    }

    // Get surveys by author with pagination
    public Page<SurveyDTO> getSurveysByAuthor(Long authorId, Pageable pageable, Authentication authentication) {
        // get authenticated username
        String username = authentication.getName();

        // check if the user is an author
        User user = userRepository.findByUsername(username);
        boolean isAuthor;
        // User is the author
        // User is an author, but not the author of the survey
        if (user.getAuthor() == null) { // User is not an author
            isAuthor = false;
        } else isAuthor = Objects.equals(user.getAuthor().getId(), authorId);

        if (isAuthor) {
            return surveyRepository.findByAuthorId(authorId, pageable)
                .map(survey -> {
                    survey.setResponseCount(responseRepository.countBySurveyId(survey.getId())); // Calculate and set response count
                    return new SurveyDTO(survey);
                });
        } else {
            return surveyRepository.findByStatusAndAuthorUserUsername("published", username, pageable)
                .map(survey -> {
                    survey.setResponseCount(responseRepository.countBySurveyId(survey.getId())); // Calculate and set response count
                    return new SurveyDTO(survey);
                });
        }
    }

    // Get surveys by author, or public surveys if not the author
    public Page<SurveyDTO> getSurveysForAuthor(Pageable pageable, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName());

        if (user.getAuthor() != null) { // User is an author
            return surveyRepository.findByAuthorId(user.getAuthor().getId(), pageable)
                    .map(survey -> {
                        survey.setResponseCount(responseRepository.countBySurveyId(survey.getId())); // Calculate and set response count
                        return new SurveyDTO(survey);
                    });
        } else { // User is not an author, show only public surveys by that author
            return surveyRepository.findByStatusAndAuthorUserUsername("published", user.getUsername(), pageable)
                    .map(survey -> {
                        survey.setResponseCount(responseRepository.countBySurveyId(survey.getId())); // Calculate and set response count
                        return new SurveyDTO(survey);
                    });
        }
    }

    // Get survey by ID
    public SurveyDTO getSurveyById(Long id) {
        Survey survey = surveyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Survey", "id", id));
        return new SurveyDTO(survey);
    }

    // Update survey (Author only, check ownership)
    public SurveyDTO updateSurvey(Long id, SurveyDTO surveyDTO, Authentication authentication) {
        Survey survey = surveyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Survey", "id", id));

        if (!survey.getAuthor().getUser().getUsername().equals(authentication.getName())) {
            throw new ForbiddenException("You are not authorized to update this survey.");
        }

        // Update the survey fields based on the fields in the request
        // update the title if exists in the request
        if (surveyDTO.getTitle() != null) {
            survey.setTitle(surveyDTO.getTitle());
        }
        // update the description if exists in the request
        if (surveyDTO.getDescription() != null) {
            survey.setDescription(surveyDTO.getDescription());
        }
        // update the content if exists in the request
        if (surveyDTO.getContent() != null) {
            survey.setContent(surveyDTO.getContent());
        }
        // update the status if exists in the request
        if (surveyDTO.getStatus() != null) {
            // Validate the status
            // survey.setStatus(SurveyStatus.fromValue(surveyDTO.getStatus().toString()));
            boolean isValidStatus = Arrays.stream(SurveyStatus.values())
                    .anyMatch(status -> status.toString().equalsIgnoreCase(surveyDTO.getStatus()));

            if (!isValidStatus) {
                throw new IllegalArgumentException("Invalid survey status. Status must be either 'public' or 'private'.");
            }
            survey.setStatus(surveyDTO.getStatus());
        }

        Survey updatedSurvey = surveyRepository.save(survey);
        return new SurveyDTO(updatedSurvey);
    }

    // Delete survey (Author only, check ownership)
    public void deleteSurvey(Long id, Authentication authentication) {
        Survey survey = surveyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Survey", "id", id));

        if (!survey.getAuthor().getUser().getUsername().equals(authentication.getName())) {
            throw new ForbiddenException("You are not authorized to delete this survey.");
        }
        surveyRepository.delete(survey);
    }

    // Get public surveys with pagination
    public Page<SurveyDTO> getPublicSurveys(Pageable pageable) {
        return surveyRepository.findByStatus("published", pageable)
                .map(SurveyDTO::new);
    }

    // Record survey attendance
    public AttendanceDTO attendSurvey(Long surveyId, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName());
        Explorer explorer = user.getExplorer();
        if (explorer == null) {
            throw new ForbiddenException("Only explorers can attend surveys.");
        }

        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new ResourceNotFoundException("Survey", "id", surveyId));

        // Check if the explorer has already attended this survey
        if (attendanceRepository.findByExplorerIdAndSurveyId(explorer.getId(), surveyId).isPresent()) {
            throw new ForbiddenException("You have already attended this survey.");
        }

        Attendance attendance = new Attendance();
        attendance.setExplorer(explorer);
        attendance.setSurvey(survey);
        attendance.setAttendedAt(new Timestamp(System.currentTimeMillis()));
        return new AttendanceDTO(attendanceRepository.save(attendance));
    }

    // Submit survey responses
    public void submitResponses(Long surveyId, @Valid List<ResponseDTO> responseDTOs, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName());
        Explorer explorer = user.getExplorer();
        if (explorer == null) {
            throw new ForbiddenException("Only explorers can submit responses.");
        }

        Survey survey = surveyRepository.findById(surveyId)
                .orElseThrow(() -> new ResourceNotFoundException("Survey", "id", surveyId));

        // Check if the explorer has attended the survey
        Attendance attendance = attendanceRepository.findByExplorerIdAndSurveyId(explorer.getId(), surveyId)
                .orElseThrow(() -> new ResourceNotFoundException("Attendance", "surveyId and explorerId", surveyId + " and " + explorer.getId()));

        // Save responses
        for (ResponseDTO responseDTO : responseDTOs) {
            Response response = new Response();
            response.setAttendance(attendance);
            response.setSurvey(survey);
            response.setResponseData(responseDTO.getResponseData()); // Ensure this field is correctly mapped
            responseRepository.save(response);
        }

        // Award coins/points (update this logic based on your rules)
        int coinsEarned = 10; // Example
        int pointsEarned = 5; // Example
        explorer.setCoin(explorer.getCoin() + coinsEarned);
        explorer.setPoint(explorer.getPoint() + pointsEarned);
        explorerRepository.save(explorer);
    }

    // Filter surveys by tags (example implementation)
//    public Page<SurveyDTO> getSurveysByTags(List<String> tags, Pageable pageable, Authentication authentication) {
//        // Implement your filtering logic here (e.g., using Spring Data JPA Specifications
//        // or a custom SQL query if needed)
//
//        // Example: using a simple string search
//        String tagString = String.join(",", tags); // Convert list to comma-separated string
//        return surveyRepository.findAll(pageable) // Adjust this query as needed for your filtering logic
//                .map(survey -> {
//                    survey.setResponseCount(responseRepository.getSurveysByTags(tagString)); // Calculate and set response count
//                    return new SurveyDTO(survey);
//                });
//    }
}
