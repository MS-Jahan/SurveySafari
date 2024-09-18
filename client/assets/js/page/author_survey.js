// assets/js/page/author_survey.js

import {createSurvey} from '../apis/survey.js';
import renderForm from '../formBuilder/renderForm.js';

let formBuilder; // Declare formBuilder in a wider scope

function initSaveSurveyListener() {
    const saveSurveyBtn = document.getElementById('save_survey_btn');
    if (saveSurveyBtn) {
        saveSurveyBtn.addEventListener('click', saveSurvey);
    }

    // Initialize the formBuilder
    var fbEditor = document.getElementById('fb-editor');
    $(fbEditor).formBuilder().promise.then(fb => {
        formBuilder = fb; // Store the initialized formBuilder instance

        $('#explorer-view-tab').on('click', function () {
            var formData = formBuilder.actions.getData('json');
            console.log(formData);
            renderForm("rendered-form", formData);
        });
    });
}

async function saveSurvey(e) {
    e.preventDefault();
    var formData;
    if (formBuilder) {
        formData = formBuilder.actions.getData('json');
        console.log(formData);
    } else {
        console.error('FormBuilder is not initialized');
        return;
    }

    // Get the survey title
    const surveyTitle = document.getElementById('survey_title').value.trim();
    if (surveyTitle === '') {
        alert('Please enter a survey title');
        return;
    }

    // Get the survey description
    const surveyDescription = document.getElementById('survey_description').value.trim();
    if (surveyDescription === '') {
        alert('Please enter a survey description');
        return;
    }

    // Get the survey tags
    const surveyTags = document.getElementById('survey_tags').value.trim();

    // Get the survey banner file
    // const surveyBanner = document.getElementById('survey_banner').files[0];

    // Get the survey content
    const surveyContent = JSON.stringify(formData);

    // send post request to save the survey
    createSurvey({
        title: surveyTitle,
        description: surveyDescription,
        tags: surveyTags,
        content: surveyContent
    });
    

}

export { initSaveSurveyListener };
