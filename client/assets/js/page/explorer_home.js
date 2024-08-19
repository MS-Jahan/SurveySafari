// assets/js/page/explorer_home.js

import createExplorerSurveyCard from '../components/explorer_survey_card.js';
import createItemToken from '../components/item_token.js';

const testSurveyData = [
    {
        title: "Global Health and Wellness Survey",
        desc: "This survey collects data on global health behaviors, attitudes towards wellness, and access to healthcare services across different demographics.",
        tags: ["Health", "Research"],
        coin: 20,
        point: 100,
        link: "explorer_survey_view.html"
    },
    {
        title: "Consumer Buying Behavior Survey",
        desc: "This survey explores consumer purchasing habits, brand loyalty, and factors influencing buying decisions.",
        tags: ["Marketing", "Behavior Analysis", "Research"],
        coin: 5,
        point: 60,
        link: "explorer_survey.html"
    },
    {
        title: "Online Education Effectiveness Survey",
        desc: "This survey examines patterns of social media usage, including frequency, platforms used, and impacts on daily life.",
        tags: ["Technology", "Society", "User Experience", "Social Apps"],
        coin: 30,
        point: 120,
        link: "explorer_survey_view.html"
    },
];

const testPopularItemData = [
    {
        imgLink: "https://via.placeholder.com/50",
        name: "Item 1",
        coin: 10,
        link: "explorer_survey_view.html"
    },
    {
        imgLink: "https://via.placeholder.com/50",
        name: "Item 2",
        coin: 20,
        link: "explorer_survey_view.html"
    },
    {
        imgLink: "https://via.placeholder.com/50",
        name: "Item 3",
        coin: 30,
        link: "explorer_survey_view.html"
    },
    {
        imgLink: "https://via.placeholder.com/50",
        name: "Item 4",
        coin: 40,
        link: "explorer_survey_view.html"
    },
    {
        imgLink: "https://via.placeholder.com/50",
        name: "Item 5",
        coin: 50,
        link: "explorer_survey_view.html"
    },
];

function __loadTrandingSurveys() {
    // will get it by api call later
    var trandingSurveys = testSurveyData;
    var trendingSurveyContainer = document.getElementById('trending_survey_container');

    if (!trendingSurveyContainer) {
        console.error("Trending Survey Container is not found");
        return;
    }

    trandingSurveys.forEach(surveyData => {
        const card = createExplorerSurveyCard(surveyData);
        if (card) {
            trendingSurveyContainer.appendChild(card);
        }
    });
}

function __loadPopularItems() {
    // will get it by api call later
    var popularItems = testPopularItemData;
    var popularItemsContainer = document.getElementById('popular_item_container');

    if (!popularItemsContainer) {
        console.error("Popular Items Container is not found");
        return;
    }

    popularItems.forEach(itemData => {
        const token = createItemToken(itemData);
        if (token) {
            popularItemsContainer.appendChild(token);
        }
    });
}

function loadExplorerHomeData() {
    console.log("loading explorer home data ...");
    __loadTrandingSurveys();
    __loadPopularItems();

}

export { loadExplorerHomeData };