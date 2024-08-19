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
    __load_surveys();
}

export { loadAuthorSurveyArchiveData };