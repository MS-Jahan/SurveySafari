// assets/js/page/explorer_home.js

import createExplorerSurveyCard from '../components/explorer_survey_card.js';
import createItemToken from '../components/item_token.js';
import { fetchProfileData } from '../apis/auth/auth_utility.js';

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

function __loadTrendingSurveys() {
    // will get it by api call later
    var trendingSurveys = testSurveyData;
    var trendingSurveyContainer = document.getElementById('trending_survey_container');

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

function __setProfileData() {
    fetchProfileData().then(data => {
        console.log(data);
        document.getElementById('explorer_name').innerText = data.name;
        document.getElementById('explorer_title').innerText = data.explorer.title;
        document.getElementById('explorer_rank').innerText = data.explorer.explorerRank? data.explorer.explorerRank : "Unranked";
        document.getElementById('explorer_coin').innerText = data.explorer.coin;
        document.getElementById('explorer_point').innerText = data.explorer.point;
    });
}

function loadExplorerHomeData() {
    console.log("loading explorer home data ...");
    __loadTrendingSurveys();
    __loadPopularItems();
    __setProfileData();

}

export { loadExplorerHomeData };