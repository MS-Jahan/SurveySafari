// assets/js/page/author_dashboard.js

import createAuthorSurveyCard from '../components/author_survey_card.js';
import { fetchProfileData } from '../apis/auth/auth_utility.js';

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

    testSurveyData1.forEach(surveyData => {
        const surveyCard = createAuthorSurveyCard(surveyData);
        surveyContainer.appendChild(surveyCard);
    });

    if (testSurveyData1.length === 0) {
        const noSurveyCard = document.createElement('div');
        noSurveyCard.classList.add('card-body', 'text-center', 'p-3');
        noSurveyCard.innerHTML = `<h5 class="card-title">No Surveys Found</h5>`;
        surveyContainer.appendChild(noSurveyCard);
    }
}

function __setProfileData(){
    fetchProfileData().then(data => {
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