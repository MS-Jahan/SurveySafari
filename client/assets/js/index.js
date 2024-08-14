// assets/js/index.js

import setUpNavbar from './components/navbar.js';
import setUpFooter from './components/footer.js';

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

    setUpNavbar({
        homePage: '',
        navText: 'Authors Menu 🧭',
        navItems: [
            {
                link: '',
                icon: 'bi bi-speedometer2',
                text: 'DashBoard'
            },
            {
                link: 'author_survey_archive.html',
                icon: 'bi bi-clipboard-data',
                text: 'Survey Archive'
            },
            {
                link: '#',
                icon: 'bi bi-chat-square-text',
                text: 'Community Discussion'
            },
            {
                link: 'author_upgrade_subscription.html',
                icon: 'bi bi-credit-card-2-back',
                text: 'Upgrade Subscription'
            },
            {
                link: '#',
                icon: 'bi bi-box-arrow-in-left',
                text: 'Sign Out'
            }
        ]
    }, false);
    setUpFooter(1);
}

function setUpAuthorSurveyArchive() {
    console.log('Loading author survey archive page...');

    setUpNavbar({
        homePage: 'author_dashboard.html',
        navText: 'Authors Menu 🧭',
        navItems: [
            {
                link: 'author_dashboard.html',
                icon: 'bi bi-speedometer2',
                text: 'DashBoard'
            },
            {
                link: 'author_survey_archive.html',
                icon: 'bi bi-clipboard-data',
                text: 'Survey Archive'
            },
            {
                link: '#',
                icon: 'bi bi-chat-square-text',
                text: 'Community Discussion'
            },
            {
                link: 'author_upgrade_subscription.html',
                icon: 'bi bi-credit-card-2-back',
                text: 'Upgrade Subscription'
            },
            {
                link: '#',
                icon: 'bi bi-box-arrow-in-left',
                text: 'Sign Out'
            }
        ]
    }, false);
    setUpFooter(1);
}

function setUpAuthorSurvey() {
    console.log('Loading author survey page...');

    setUpNavbar({
        homePage: 'author_dashboard.html',
        navText: 'Authors Menu 🧭',
        navItems: [
            {
                link: 'author_dashboard.html',
                icon: 'bi bi-speedometer2',
                text: 'DashBoard'
            },
            {
                link: 'author_survey_archive.html',
                icon: 'bi bi-clipboard-data',
                text: 'Survey Archive'
            },
            {
                link: '#',
                icon: 'bi bi-chat-square-text',
                text: 'Community Discussion'
            },
            {
                link: 'author_upgrade_subscription.html',
                icon: 'bi bi-credit-card-2-back',
                text: 'Upgrade Subscription'
            },
            {
                link: '#',
                icon: 'bi bi-box-arrow-in-left',
                text: 'Sign Out'
            }
        ]
    }, false);
    setUpFooter(1);
}

function setUpAuthorUpgradeSubscription() {
    console.log('Loading author upgrade subscription page...');

    setUpNavbar({
        homePage: 'author_dashboard.html',
        navText: 'Authors Menu 🧭',
        navItems: [
            {
                link: 'author_dashboard.html',
                icon: 'bi bi-speedometer2',
                text: 'DashBoard'
            },
            {
                link: 'author_survey_archive.html',
                icon: 'bi bi-clipboard-data',
                text: 'Survey Archive'
            },
            {
                link: '',
                icon: 'bi bi-chat-square-text',
                text: 'Community Discussion'
            },
            {
                link: '#',
                icon: 'bi bi-credit-card-2-back',
                text: 'Upgrade Subscription'
            },
            {
                link: '#',
                icon: 'bi bi-box-arrow-in-left',
                text: 'Sign Out'
            }
        ]
    }, false);
    setUpFooter(1);
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
    setUpAuthorUpgradeSubscription
};