// assets/js/page/author_dashboard.js

import createAuthorSurveyCard from '../components/author_survey_card.js';
import { fetchProfileData } from '../apis/auth/auth_utility.js';
import { fetchAuthorSurveys } from '../apis/survey.js';

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

const testSurveyData1 = [

];

const testProfileData = {
    fullname: "John Doe",
    org: "XY International University",
    email: "fip@jukmuh.al",
    coin: "100",
    plan: "Free",

};

function __loadPublicSurveys() {
    const surveyContainer = document.getElementById('public_survey_container');
    if (!surveyContainer) {
        console.warn("No survey container found");
        return;
    }

    fetchAuthorSurveys(0, 10, "public").then(data => {
        const surveyData = data.content;

        surveyData.forEach(survey => {
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

        if (surveyData.length === 0) {
            const noSurveyCard = document.createElement('div');
            noSurveyCard.classList.add('card-body', 'text-center', 'p-3');
            noSurveyCard.innerHTML = `<h5 class="card-title">No Surveys Found</h5>`;
            surveyContainer.appendChild(noSurveyCard);
        }
    });
}

function __setProfileData(){
    fetchProfileData().then(data => {
        // check if data is json type
        try {            
            // check if data is json type
            if (typeof data === 'string') {
                data = JSON.parse(data);
            } else {
                data = data;
            }
        } catch (e) {
            console.error("Invalid data received from server!", e);
            return;
        }

        // fullname
        document.querySelector("h5.author_fullname").textContent = data.name;
        document.querySelector("input.author_fullname").value = data.username;
        // org
        document.querySelector("h5.author_org").textContent = data.author.company || "N/A";
        document.querySelector("input.author_org").value = data.author.company || "";
        // email
        document.querySelector("h5.author_email").textContent = data.email;
        // coin
        document.querySelector("span.author_coin").textContent = data.author.coin;
        // plan
        document.querySelector("span.author_plan").textContent = data.author.plan || "Free";
    });
}

function loadAuthorDashboardData() {
    __loadPublicSurveys();
    __setProfileData();
}

export { loadAuthorDashboardData };