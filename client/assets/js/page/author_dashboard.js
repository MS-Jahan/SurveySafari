// assets/js/page/author_dashboard.js

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

function __loadPublicSurveys() {
    const surveyContainer = document.getElementById('public_survey_container');
    if (!surveyContainer) {
        console.warn("No survey container found");
        return;
    }

    testSurveyData.forEach(surveyData => {
        const surveyCard = createAuthorSurveyCard(surveyData);
        surveyContainer.appendChild(surveyCard);
    });
}

function loadAuthorDashboardData() {
    __loadPublicSurveys();
}

export { loadAuthorDashboardData };