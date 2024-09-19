// assets/js/page/author_survey_archive.js

import createAuthorSurveyCard from '../components/author_survey_card.js';

const testSurveyData = [
    {
        title: "Test Survey",
        responses: 0,
        tags: ["Test", "Survey"],
        desc: "This is a test survey",
        postedTime: "5 minutes",
        link: "author_survey.html",
        privateLink: "#",
        deleteLink: "#"
    },
    {
        title: "Test Survey",
        responses: 0,
        tags: ["Test", "Survey"],
        desc: "This is a test survey",
        postedTime: "5 minutes",
        link: "author_survey.html",
        privateLink: "#",
        deleteLink: "#"
    }
];

async function fetchAuthorSurveys(page = 0, size = 10) { // Adjust default page size as needed
    try {
        // 1. Fetch survey data from backend 
        const response = await fetch(`${API_HOST}/api/surveys/author?page=${page}&size=${size}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + jwt  // Add JWT from localStorage or cookies 
            },
            credentials: 'include', // If using cookies for authentication
        });

        // 2. Error Handling
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // 3. Parse the response
        const surveyData = await response.json();
        return surveyData;

    } catch (error) {
        console.error('Error fetching surveys:', error);
        return []; // Return an empty array or handle the error appropriately
    }
}

async function displaySurveys(page = 0, size = 10) {
    const surveyContainer = document.getElementById('survey_container');
    const paginationContainer = document.getElementById('pagination-container'); // Assuming you'll add a pagination container in your HTML
    if (!surveyContainer || !paginationContainer) {
        console.error("Survey container or pagination container not found!");
        return;
    }

    surveyContainer.innerHTML = ''; // Clear existing surveys
    paginationContainer.innerHTML = ''; // Clear existing pagination


    // 1. Fetch the surveys
    const surveys = await fetchAuthorSurveys(page, size);

    // 2. Check if we got any surveys
    if (surveys.content.length === 0) {
        // Handle case where no surveys found (display a message)
        const noSurveyMessage = document.createElement('div');
        noSurveyMessage.className = 'alert alert-info';
        noSurveyMessage.textContent = "You haven't created any surveys yet.";
        surveyContainer.appendChild(noSurveyMessage);
        return;
    }

    // 3. Create and append survey cards
    surveys.content.forEach(survey => {
        const surveyCard = createAuthorSurveyCard({
            id: survey.id, // Assuming survey ID is available
            title: survey.title,
            responses: survey.responseCount, // Replace with actual response count from API
            tags: survey.tags, // Assuming tags is a list of strings
            desc: survey.description,
            status: survey.status, // Assuming status is a string (e.g., "private", "public")
            postedTime: survey.postedAt, // Calculate time elapsed since survey.createdAt
            link: `author_survey_responses.html?id=${survey.id}`, // Assuming query parameter to pass survey ID
            privateLink: `#`, // Replace with the link to change survey visibility
            deleteLink: '#'  // Replace with the link to delete the survey
        });
        surveyContainer.appendChild(surveyCard); 
    });

    // 4. Implement Pagination Logic (if needed)
    // - Use surveys.totalPages, surveys.number (current page), etc. 
    // - Create pagination buttons and attach event listeners 
    // - Update displaySurveys() with the new page number on button clicks
    const paginationNav = document.createElement('nav');
    paginationNav.setAttribute('aria-label', 'Page navigation example');

    const paginationUl = document.createElement('ul');
    paginationUl.className = 'pagination justify-content-center';

    const prevPageItem = document.createElement('li');
    prevPageItem.className = 'page-item';
    const prevPageLink = document.createElement('a');
    prevPageLink.className = 'page-link';
    prevPageLink.href = '#';
    prevPageLink.id = 'prev-page';
    prevPageLink.style.backgroundColor = '#79AC78';
    prevPageLink.textContent = '<<';
    prevPageLink.addEventListener('click', () => {
        if (surveys.number > 0) {
            displaySurveys(surveys.number - 1, size);
        }
    });
    prevPageItem.appendChild(prevPageLink);
    paginationUl.appendChild(prevPageItem);

    for (let i = 0; i < surveys.totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = 'page-item';

        const pageLink = document.createElement('a');
        pageLink.className = 'page-link';
        pageLink.href = '#';
        pageLink.textContent = i + 1;
        pageLink.style.backgroundColor = '#79AC78';
        pageLink.addEventListener('click', () => {
            displaySurveys(i, size);
        });

        if (i === surveys.number) {
            pageItem.classList.add('active');
            pageLink.style.backgroundColor = '#79AC78';
        }

        pageItem.appendChild(pageLink);
        paginationUl.appendChild(pageItem);
    }

    const nextPageItem = document.createElement('li');
    nextPageItem.className = 'page-item';
    const nextPageLink = document.createElement('a');
    nextPageLink.className = 'page-link';
    nextPageLink.href = '#';
    nextPageLink.id = 'next-page';
    nextPageLink.style.backgroundColor = '#79AC78';
    nextPageLink.textContent = '>>';
    nextPageLink.addEventListener('click', () => {
        if (surveys.number < surveys.totalPages - 1) {
            displaySurveys(surveys.number + 1, size);
        }
    });
    nextPageItem.appendChild(nextPageLink);
    paginationUl.appendChild(nextPageItem);

    paginationNav.appendChild(paginationUl);
    paginationContainer.appendChild(paginationNav);
}

function __load_surveys() {
    var trandingSurveys = testSurveyData;
    var trendingSurveyContainer = document.getElementById('survey_container');

    if (!trendingSurveyContainer) {
        console.error("Trending Survey Container is not found");
        return;
    }

    trandingSurveys.forEach(surveyData => {
        const card = createAuthorSurveyCard(surveyData);
        if (card) {
            trendingSurveyContainer.appendChild(card);
        }
    });
}

function loadAuthorSurveyArchiveData() {
    // __load_surveys();
    displaySurveys();
}

export { loadAuthorSurveyArchiveData, displaySurveys };