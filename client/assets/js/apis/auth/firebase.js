// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth as firebaseGetAuth, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8fPaTGxU62Vh991AI-J5Qnb7y076HX_8",
  authDomain: "surveysafari-1654e.firebaseapp.com",
  projectId: "surveysafari-1654e",
  storageBucket: "surveysafari-1654e.appspot.com",
  messagingSenderId: "257743968749",
  appId: "1:257743968749:web:7b07ec647e3287d663efe4",
  measurementId: "G-F57Y46LESJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getAuth() {
  return firebaseGetAuth(app);
}

async function signInWithEmailAndPassword (email, password) {
    return firebaseSignInWithEmailAndPassword(getAuth(), email, password);
}

async function createUserWithEmailAndPassword (email, password) {
  return firebaseCreateUserWithEmailAndPassword(getAuth(), email, password);
}

export { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword };