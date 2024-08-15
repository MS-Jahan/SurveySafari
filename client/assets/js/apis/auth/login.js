// assets/js/apis/auth/login.js

import { login } from './auth_utility.js';

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', login);