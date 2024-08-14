// assets/js/index.js

import setUpNavbar from './components/navbar.js';
import setUpFooter from './components/footer.js';

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

export { setUpIndex, setUpLogin, setUpSignup, setUpForgotPassword, setUpResetPassword };