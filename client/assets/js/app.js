// assets/js/app.js

import {
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

} from './index.js';

function initApp() {
    const page = document.body.id;
    
    switch (page) {
        // annonimus pages
        case 'index': setUpIndex(); break;
        case 'login': setUpLogin(); break;
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

document.addEventListener('DOMContentLoaded', initApp);