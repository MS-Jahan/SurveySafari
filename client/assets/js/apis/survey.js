
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

export { createSurvey };