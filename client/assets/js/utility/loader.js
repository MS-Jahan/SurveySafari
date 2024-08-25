// assets/js/utility/loader.js

function showLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'flex'; // Show loading screen
}

function hideLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'none'; // Hide loading screen
}

export { showLoadingScreen, hideLoadingScreen }; // Export the functions