// assets/js/app.js

import {
    setUpIndex,
    setUpLogin,
    setUpLogout,
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

} from './index.js';

import setFont from './font/fonts.js';

window.API_HOST = 'http://localhost:8080';


// Load a single script and call the callback after loading
function loadExternalScript(src, callback, errorCallback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    script.onerror = function() {
        console.error('Failed to load script:', src);
        if (errorCallback) errorCallback(); // Handle error case
    };
    document.head.appendChild(script);
}

// Load multiple scripts sequentially
function loadScriptsSequentially(scripts, callback, errorCallback) {
    if (scripts.length === 0) {
        if (callback) callback();
        return;
    }

    const [firstScript, ...remainingScripts] = scripts;
    loadExternalScript(firstScript, () => {
        loadScriptsSequentially(remainingScripts, callback, errorCallback);
    }, errorCallback);
}

// The main function to initialize the app
function initApp() {
    const page = document.body.id;

    if (['index', 'login', 'signup', 'forgot_password', 'reset_password'].includes(page)) {
        console.log('Setting default font');
    } else {
        setFont('default'); // Set user selected font
    }
    
    switch (page) {
        // annonimus pages
        case 'index': setUpIndex(); break;
        case 'login': setUpLogin(); break;
        case 'logout': setUpLogout(); break;
        case 'signup': setUpSignup(); break;
        case 'forgot_password': setUpForgotPassword(); break;
        case 'reset_password': setUpResetPassword(); break;
        // author pages
        case 'author_dashboard': setUpAuthorDashboard(); break;
        case 'author_survey_archive': setUpAuthorSurveyArchive(); break;
        case 'author_survey': setUpAuthorSurvey(); break;
        case 'author_upgrade_subscription': setUpAuthorUpgradeSubscription(); break;
        case 'author_survey_responses': setUpAuthorSurveyResponses(); break;
        // explorer pages
        case 'explorer_home': setUpExplorerHome(); break;
        case 'explorer_profile': setUpExplorerProfile(); break;
        case 'explorer_survey_home': setExplorerSurveyHome(); break;
        case 'explorer_leaderboard': setUpExplorerLeaderboard(); break;
        case 'explorer_redeem_shop': setUpExplorerRedeemShop(); break;
        case 'explorer_survey_view': setExplorerSurveyView(); break;
        case 'explorer_survey': setExplorerSurvey(); break;
        // common pages
        case 'community_discussion': setUpCommunityDiscussion(); break;
        case 'discussion': setUpDiscussion(); break;
        case 'create_discussion': setUpCreateDiscussion(); break;
        // Unknown page !
        default: console.warn('Unknown page:', page);
    }
}

// document.addEventListener('DOMContentLoaded', initApp);

// Define a list of scripts to load
const scriptsToLoad = [
    'https://cdn.jsdelivr.net/npm/sweetalert2@11',
];

// Error handling function if scripts fail to load
function handleScriptLoadError() {
    console.warn('Some scripts failed to load. Default behavior may apply.');
    initApp(); // Initialize the app with default behavior
}

// Load scripts sequentially and initialize the app after they all load
document.addEventListener('DOMContentLoaded', () => {
    loadScriptsSequentially(scriptsToLoad, initApp, handleScriptLoadError);
});
