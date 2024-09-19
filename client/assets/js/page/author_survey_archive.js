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

async function fetchAuthorSurveys(page = 0, size = 10, status=null) { // Adjust default page size as needed
    try {
        let request_url = `${API_HOST}/api/surveys/author?page=${page}&size=${size}`;
        
        if (status) {
            request_url += `&status=${status}`;
        }

        // 1. Fetch survey data from backend 
        const response = await fetch(request_url, {
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

async function displaySurveys(page = 0, size = 10, status="private,public") {
    const surveyContainer = document.getElementById('survey_container');
    const paginationContainer = document.getElementById('pagination-container'); // Assuming you'll add a pagination container in your HTML
    if (!surveyContainer || !paginationContainer) {
        console.error("Survey container or pagination container not found!");
        return;
    }

    surveyContainer.innerHTML = ''; // Clear existing surveys
    paginationContainer.innerHTML = ''; // Clear existing pagination


    // 1. Fetch the surveys
    const surveys = await fetchAuthorSurveys(page, size, status);

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

function toggleSurveyStatusFilter(e) {
    console.log("inside toggleSurveyStatusFilter", e.target.id);
    const public_filter = document.getElementById('filter-public');
    const private_filter = document.getElementById('filter-private');

    // Toggle the clicked filter
    if (e.target.id === 'filter-public') {
        public_filter.setAttribute("data-include", public_filter.getAttribute("data-include") === "1" ? "0" : "1");
    } else if (e.target.id === 'filter-private') {
        private_filter.setAttribute("data-include", private_filter.getAttribute("data-include") === "1" ? "0" : "1");
    }

    // Update button classes based on their state
    public_filter.classList.toggle("btn-success", public_filter.getAttribute("data-include") === "1");
    public_filter.classList.toggle("btn-secondary", public_filter.getAttribute("data-include") === "0");

    private_filter.classList.toggle("btn-success", private_filter.getAttribute("data-include") === "1");
    private_filter.classList.toggle("btn-secondary", private_filter.getAttribute("data-include") === "0");

    // Determine the status to display based on the filter states
    let status = [];
    if (public_filter.getAttribute("data-include") === "1") {
        status.push('public');
    }
    if (private_filter.getAttribute("data-include") === "1") {
        status.push('private');
    }

    // If both are off, turn on the other filter
    if (status.length === 0) {
        if (e.target.id === 'filter-public') {
            private_filter.setAttribute("data-include", "1");
            private_filter.classList.replace("btn-secondary", "btn-success");
            status.push('private');
        } else if (e.target.id === 'filter-private') {
            public_filter.setAttribute("data-include", "1");
            public_filter.classList.replace("btn-secondary", "btn-success");
            status.push('public');
        }
    }

    // Display surveys based on the determined status
    displaySurveys(0, 10, status.join(','));
}

function initToggleSurveyStatusFilter(){
    // document.addEventListener('DOMContentLoaded', (event) => {
        console.log("inside initToggleSurveyStatusFilter");
        const filterPublic = document.getElementById('filter-public');
        const filterPrivate = document.getElementById('filter-private');
    
        if (filterPublic) {
            filterPublic.addEventListener('click', function(e) {
                console.log("inside filterPublic");
                toggleSurveyStatusFilter(e);
            });
        }
    
        if (filterPrivate) {
            filterPrivate.addEventListener('click', function(e) {
                console.log("inside filterPrivate");
                toggleSurveyStatusFilter(e);
            });
        }
    // });
}

function loadAuthorSurveyArchiveData() {
    // __load_surveys();
    displaySurveys();
    initToggleSurveyStatusFilter();
}

export { loadAuthorSurveyArchiveData, displaySurveys };