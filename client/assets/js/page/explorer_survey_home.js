// assets/js/page/explorer_survey_home.js

import createSurveyToken from "../components/survey_token.js";
import createExplorerSurveyCard from "../components/explorer_survey_card.js";

const testPopularSurveyData = [
    {
        title: "Global Health and Wellness Survey",
        desc: "This survey collects data on global health behaviors, attitudes towards wellness, and access to healthcare services across different demographics.",
        tags: ["Health", "Research"],
        coin: 20,
        point: 100,
        link: "#"
    },
    {
        title: "Consumer Buying Behavior Survey",
        desc: "This survey explores consumer purchasing habits, brand loyalty, and factors influencing buying decisions.",
        tags: ["Marketing", "Behavior Analysis", "Research"],
        coin: 5,
        point: 60,
        link: "#"
    },
    {
        title: "Online Education Effectiveness Survey",
        desc: "This survey examines patterns of social media usage, including frequency, platforms used, and impacts on daily life.",
        tags: ["Technology", "Society", "User Experience", "Social Apps"],
        coin: 30,
        point: 120,
        link: "#"
    },
];

const testSurveyData = [
    {
        title: "Global Health and Wellness Survey 2",
        desc: "This survey collects data on global health behaviors, attitudes towards wellness, and access to healthcare services across different demographics.",
        tags: ["Health", "Research"],
        coin: 20,
        point: 100,
        link: "#"
    },
    {
        title: "Consumer Buying Behavior Survey 2",
        desc: "This survey explores consumer purchasing habits, brand loyalty, and factors influencing buying decisions.",
        tags: ["Marketing", "Behavior Analysis", "Research"],
        coin: 5,
        point: 60,
        link: "#"
    },
    {
        title: "Online Education Effectiveness Survey 2",
        desc: "This survey examines patterns of social media usage, including frequency, platforms used, and impacts on daily life.",
        tags: ["Technology", "Society", "User Experience", "Social Apps"],
        coin: 30,
        point: 120,
        link: "#"
    },
];

function __loadPopularSurveys() {
    const popularSurveySection = document.getElementById("popular_surveys");
    if (!popularSurveySection) {
        console.error("Popular survey section not found.");
        return;
    }

    testPopularSurveyData.forEach(surveyData => {
        const surveyToken = createSurveyToken(surveyData);
        popularSurveySection.appendChild(surveyToken);
    });
}

function __loadSurveys() {
    var trendingSurveys = testSurveyData;
    var trendingSurveyContainer = document.getElementById('survey_container');

    if (!trendingSurveyContainer) {
        console.error("Trending Survey Container is not found");
        return;
    }

    trendingSurveys.forEach(surveyData => {
        const card = createExplorerSurveyCard(surveyData);
        if (card) {
            trendingSurveyContainer.appendChild(card);
        }
    });
} 

function loadExplorerSurveyHomeData() {
    console.log("loading explorer survey home data ...");
    __loadPopularSurveys();
    __loadSurveys();
}

export { loadExplorerSurveyHomeData };