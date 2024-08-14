// assets/js/app.js

import {
    setUpIndex,
    setUpLogin,
    setUpSignup,
    setUpForgotPassword,
    setUpResetPassword
} from './index.js';

function initApp() {
    const page = document.body.id;
    
    switch (page) {
        case 'index': setUpIndex(); break;
        case 'login': setUpLogin(); break;
        case 'signup': setUpSignup(); break;
        case 'forgot_password': setUpForgotPassword(); break;
        case 'reset_password': setUpResetPassword(); break;
        default: console.warn('Unknown page:', page);
    }
}

document.addEventListener('DOMContentLoaded', initApp);