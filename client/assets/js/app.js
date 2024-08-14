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
    setUpAuthorUpgradeSubscription
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
        default: console.warn('Unknown page:', page);
    }
}

document.addEventListener('DOMContentLoaded', initApp);