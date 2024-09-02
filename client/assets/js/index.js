// assets/js/index.js

import setUpNavbar from './components/navbar.js';
import setUpFooter from './components/footer.js';
import setUpSignOutModal from './components/sign_out_modal.js';
import { loadExplorerHomeData } from './page/explorer_home.js';
import { loadExplorerSurveyHomeData } from './page/explorer_survey_home.js';
import { loadCommunityDiscussionData } from './page/community_discussion.js';
import { loadExplorerRedeemShopData, setUpRedeemModels, setUprangeFilterWithPagination } from './page/explorer_redeem_shop.js';
import { loadAuthorDashboardData } from './page/author_dashboard.js';
import { loadExplorerSurveyData } from './page/explorer_survey.js';
import { loadAuthorSurveyArchiveData } from './page/author_survey_archive.js';
import { loadAuthorSurveyResponseData } from './page/author_survey_response.js';
import { loadExplorerProfile } from "./page/explorer_profile.js";



// FullNavs
const authorNavBlocks = {
    homePage: 'author_dashboard.html',
    navText: 'Authors Menu 🧭',
    navItems: [
        { link: 'author_dashboard.html', icon: 'bi bi-speedometer2', text: 'DashBoard' },
        { link: 'author_survey_archive.html', icon: 'bi bi-clipboard-data', text: 'Survey Archive' },
        { link: 'community_discussion.html', icon: 'bi bi-chat-square-text', text: 'Community Discussion' },
        { link: 'author_upgrade_subscription.html', icon: 'bi bi-credit-card-2-back', text: 'Upgrade Subscription' },
    ]
}

const explorerNavBlocks = {
    homePage: 'explorer_home.html',
    navText: 'Explorer Menu 🧭',
    navItems: [
        { link: 'explorer_home.html', icon: 'bi bi-house', text: 'Home' },
        { link: 'explorer_profile.html', icon: 'bi bi-person-bounding-box', text: 'Profile' },
        { link: 'explorer_survey_home.html', icon: 'bi bi-clipboard-data', text: 'Surveys' },
        { link: 'explorer_redeem_shop.html', icon: 'bi bi-shop', text: 'Redeem Shop' },
        { link: 'explorer_leaderboard.html', icon: 'bi bi-sort-numeric-up', text: 'Leader Board' },
        { link: 'community_discussion.html', icon: 'bi bi-chat-square-text', text: 'Community Discussion' },
    ]
}

const signOutLink = {
    "explorer": "#",
    "author": "#"
}

// Annonimus pages
function setUpIndex() {
    console.log('Loading index page...');

    setUpNavbar({
        signUpPage: 'pages/signup.html',
        logInPage: 'pages/login.html'
    }, true, true);
    setUpFooter(0);
}

function setUpLogin() {
    console.log('Loading login page...');

    setUpNavbar({
        signUpPage: 'signup.html',
        logInPage: ''
    }, true);
    setUpFooter(0);
}

function setUpSignup() {
    console.log('Loading signup page...');

    setUpNavbar({
        signUpPage: '',
        logInPage: 'login.html'
    }, true);
    setUpFooter(0);
}

function setUpForgotPassword() {
    console.log('Loading forgot password page...');

    setUpNavbar({
        signUpPage: 'signup.html',
        logInPage: 'login.html'
    }, true);
    setUpFooter(0);
}

function setUpResetPassword() {
    console.log('Loading reset password page...');

    setUpNavbar(null, true, false, true);
    setUpFooter(0);
}

// Author pages
function setUpAuthorDashboard() {
    console.log('Loading author dashboard page...');

    setUpNavbar(authorNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["author"]);

    loadAuthorDashboardData();
}

function setUpAuthorSurveyArchive() {
    console.log('Loading author survey archive page...');

    setUpNavbar(authorNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["author"]);

    loadAuthorSurveyArchiveData();
}

function setUpAuthorSurvey() {
    console.log('Loading author survey page...');

    setUpNavbar(authorNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["author"]);
}

function setUpAuthorUpgradeSubscription() {
    console.log('Loading author upgrade subscription page...');

    setUpNavbar(authorNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["author"]);
}

function setUpAuthorSurveyResponses() {
    console.log('Loading author survey responses page...');

    setUpNavbar(authorNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["author"]);
    
    loadAuthorSurveyResponseData();
}

// Explorer pages
function setUpExplorerHome() {
    console.log('Loading explorer home page...');

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);

    loadExplorerHomeData();
}

function setUpExplorerProfile() {
    console.log('Loading explorer profile page...');

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);

    loadExplorerProfile();
}

function setExplorerSurveyHome() {
    console.log('Loading explorer survey home page ...');

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);

    loadExplorerSurveyHomeData();
}

function setUpExplorerLeaderboard() {
    console.log("Loding explorer leaderboard page ...");

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);
}

function setUpExplorerRedeemShop() {
    console.log("Loding explorer redeem shop page ...");

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);

    loadExplorerRedeemShopData();
    setUpRedeemModels();
    setUprangeFilterWithPagination();
}

function setExplorerSurveyView() {
    console.log("Loading explorer survey view page ...");

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);
}

function setExplorerSurvey() {
    console.log("Loading explorer survey page ...");

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(0);
    setUpSignOutModal(signOutLink["explorer"]);

    loadExplorerSurveyData();
}

// Community Discussion pages
function setUpCommunityDiscussion() {

    console.log('Loading community discussion page ...');

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);

    loadCommunityDiscussionData();
}

function setUpDiscussion() {
    console.log('Loading discussion page ...');

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);
}

function setUpCreateDiscussion() {
    console.log('Loading create discussion page ...');

    setUpNavbar(explorerNavBlocks, false);
    setUpFooter(2);
    setUpSignOutModal(signOutLink["explorer"]);
}

export { 
    setUpIndex,
    setUpLogin,
    setUpSignup,
    setUpForgotPassword,
    setUpResetPassword,
    setUpAuthorDashboard,
    setUpAuthorSurveyArchive,
    setUpAuthorSurvey,
    setUpAuthorUpgradeSubscription,
    setUpExplorerHome,
    setUpExplorerProfile,
    setExplorerSurveyHome,
    setUpExplorerLeaderboard,
    setUpExplorerRedeemShop,
    setUpCommunityDiscussion,
    setUpDiscussion,
    setUpCreateDiscussion,
    setExplorerSurveyView,
    setExplorerSurvey,
    setUpAuthorSurveyResponses
};