// assets/js/page/explorer_survey.js

import renderForm from '../formBuilder/renderForm.js';

const testSurveyForm = [
    {
        "type": "header",
        "subtype": "h1",
        "label": "Survey Safari Review Survey.",
        "className": "text-light text-center bg-success rounded p-2",
        "access": false
    },
    {
        "type": "paragraph",
        "subtype": "p",
        "label": "This is a user feedback survey for this platform, data that will be taken are<br>- name<br>- gender<br>- date of birth<br>- passport size photo<br>- your review",
        "className": "text-light text-start bg-success p-2 rounded",
        "access": false
    },
    {
        "type": "text",
        "required": true,
        "label": "full name",
        "placeholder": "your name ex: fatin shadab",
        "className": "form-control text-dark",
        "name": "text-1723887443808-0",
        "access": false,
        "subtype": "text",
        "maxlength": 30
    },
    {
        "type": "radio-group",
        "required": true,
        "label": "Gender",
        "inline": false,
        "name": "radio-group-1723887452503-0",
        "access": false,
        "other": false,
        "values": [
            {
                "label": "Male",
                "value": "0",
                "selected": false
            },
            {
                "label": "Female",
                "value": "1",
                "selected": true
            },
            {
                "label": "non-binary",
                "value": "2",
                "selected": false
            }
        ]
    },
    {
        "type": "date",
        "required": false,
        "label": "Date of Birth",
        "description": "your legal date of birth",
        "className": "form-control text-dark",
        "name": "date-1723887488170-0",
        "access": false,
        "subtype": "date"
    },
    {
        "type": "file",
        "required": false,
        "label": "Passport size photo",
        "description": "supported format .jpg, .png, .jpeg",
        "className": "form-control",
        "name": "file-1723887482822-0",
        "access": false,
        "multiple": false
    },
    {
        "type": "textarea",
        "required": false,
        "label": "Your Review",
        "className": "form-control text-dark",
        "name": "textarea-1723887498781-0",
        "access": false,
        "subtype": "textarea"
    }
];

function __renderForm() {
    console.log('Loading explorer survey page...');
    renderForm('survey-form', testSurveyForm);
}

function loadExplorerSurveyData() {
    __renderForm();

}

export { loadExplorerSurveyData };