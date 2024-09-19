import { displaySurveys } from '../page/author_survey_archive.js';

// function to create a survey
function createSurvey(data) {
    // send a post request to create a survey at /api/surveys/create
    fetch(`${window.API_HOST}/api/surveys/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(res => {
        // if response status is greater and equal to 200 and less than 300
        if (res.status >= 200 && res.status < 300) {
            // show a sweet alert message
            Swal.fire({"title":"Survey Created","text":"Survey created successfully. Redirecting to survey archive...","icon":"success","showConfirmButton":false,"timer":3000});
            // Redirect to survey archive after 3 seconds
            setTimeout(() => {
                window.location.href = 'author_survey_archive.html';
            }, 3000);
        } else {
            res.text().then(text => {
                if (text.trim() == "") {
                    text = "An error occurred during survey creation.";
                }
                console.error('Error:', text);
                // show a sweet alert message
                Swal.fire({"title":"Error","text":text,"icon":"error","showConfirmButton":false});
            });
        }
    }).catch(err => {
        console.error('Error:', err);
        // show a sweet alert message
        console.error('Error:', err);
        Swal.fire({"title":"Error","text":"An error occurred during survey creation.","icon":"error","showConfirmButton":false});
    });
}

function toggleSurveyPrivacy(surveyId, privacy) {
    // send a put request to toggle survey privacy at /api/surveys/:id/
    fetch(`${window.API_HOST}/api/surveys/${surveyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ "status": privacy })
    }).then(res => {
        if (res.status >= 200 && res.status < 300) {
            // show a sweet alert message
            Swal.fire({ "title": "Survey Privacy Updated", "text": "Survey privacy updated successfully.", "icon": "success", "showConfirmButton": false, "timer": 3000 });
            // Reload the surveys after 3 seconds
            setTimeout(() => {
                displaySurveys();
            }, 1000);
        } else {
            res.text().then(text => {
                if (text.trim() == "") {
                    text = "An error occurred during survey privacy update.";
                }
                console.error('Error:', text);
                // show a sweet alert message
                Swal.fire({ "title": "Error", "text": text, "icon": "error", "showConfirmButton": false });
            });
        }
    }).catch(err => {
        console.error('Error:', err);
        // show a sweet alert message
        console.error('Error:', err);
        Swal.fire({ "title": "Error", "text": "An error occurred during survey privacy update.", "icon": "error", "showConfirmButton": false });
    });
}

function deleteSurvey(surveyId) {
    // show a sweet alert confirmation dialog
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // send a delete request to delete a survey at /api/surveys/:id/
            fetch(`${window.API_HOST}/api/surveys/${surveyId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            }).then(res => {
                if (res.status >= 200 && res.status < 300) {
                    // show a sweet alert message
                    Swal.fire({ "title": "Survey Deleted", "text": "Survey deleted successfully.", "icon": "success", "showConfirmButton": false, "timer": 3000 });
                    // Reload the surveys after 3 seconds
                    setTimeout(() => {
                        displaySurveys();
                    }, 1000);
                } else {
                    res.text().then(text => {
                        if (text.trim() == "") {
                            text = "An error occurred during survey deletion.";
                        }
                        console.error('Error:', text);
                        // show a sweet alert message
                        Swal.fire({ "title": "Error", "text": text, "icon": "error", "showConfirmButton": false });
                    });
                }
            }).catch(err => {
                console.error('Error:', err);
                // show a sweet alert message
                Swal.fire({ "title": "Error", "text": "An error occurred during survey deletion.", "icon": "error", "showConfirmButton": false });
            });
        }
    });
}

export { createSurvey, toggleSurveyPrivacy, deleteSurvey };