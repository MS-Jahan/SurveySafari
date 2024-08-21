// assets/js/page/explorer_survey.js

import renderForm from '../formBuilder/renderForm.js';

const testSurveyForm = [
    {
        "type": "header",
        "subtype": "h1",
        "label": "Survey on YOLO for Face Detection in Web Applications",
        "className": "text-light text-center bg-primary rounded p-2",
        "access": false
    },
    {
        "type": "paragraph",
        "subtype": "p",
        "label": "This survey aims to gather feedback on the use of YOLO as a face detection tool in web applications. We value your input on its effectiveness, ease of integration, and overall performance.",
        "className": "text-light text-start bg-primary p-2 rounded",
        "access": false
    },
    {
        "type": "text",
        "required": true,
        "label": "Full Name",
        "placeholder": "Your name (e.g., John Doe)",
        "className": "form-control text-dark",
        "name": "text-1723887443808-1",
        "access": false,
        "subtype": "text",
        "maxlength": 50,
        "value": "John Doe"
    },
    {
        "type": "radio-group",
        "required": true,
        "label": "Gender",
        "inline": false,
        "name": "radio-group-1723887452503-1",
        "access": false,
        "other": false,
        "values": [
            {
                "label": "Male",
                "value": "0",
                "selected": true
            },
            {
                "label": "Female",
                "value": "1",
                "selected": false
            },
            {
                "label": "Non-binary",
                "value": "2",
                "selected": false
            }
        ]
    },
    {
        "type": "date",
        "required": false,
        "label": "Date of Birth",
        "description": "Please enter your date of birth.",
        "className": "form-control text-dark",
        "name": "date-1723887488170-1",
        "access": false,
        "subtype": "date",
        "value": "1990-01-01"
    },
    {
        "type": "file",
        "required": false,
        "label": "Upload Profile Picture",
        "description": "Supported formats: .jpg, .png, .jpeg",
        "className": "form-control",
        "name": "file-1723887482822-1",
        "access": false,
        "multiple": false
    },
    {
        "type": "textarea",
        "required": true,
        "label": "Your Feedback on YOLO",
        "className": "form-control text-dark",
        "name": "textarea-1723887498781-1",
        "access": false,
        "subtype": "textarea",
        "value": "YOLO has proven to be a reliable face detection tool, but it could benefit from more efficient processing times."
    },
    {
        "type": "select",
        "required": true,
        "label": "How would you rate the accuracy of YOLO in face detection?",
        "className": "form-control text-dark",
        "name": "select-1723887498781-2",
        "access": false,
        "values": [
            {
                "label": "Excellent",
                "value": "5",
                "selected": false
            },
            {
                "label": "Very Good",
                "value": "4",
                "selected": true
            },
            {
                "label": "Good",
                "value": "3",
                "selected": false
            },
            {
                "label": "Fair",
                "value": "2",
                "selected": false
            },
            {
                "label": "Poor",
                "value": "1",
                "selected": false
            }
        ]
    },
    {
        "type": "checkbox-group",
        "required": false,
        "label": "Which features of YOLO do you find most useful?",
        "inline": false,
        "name": "checkbox-group-1723887498781-3",
        "access": false,
        "values": [
            {
                "label": "Real-time detection",
                "value": "real-time-detection",
                "selected": true
            },
            {
                "label": "High accuracy",
                "value": "high-accuracy",
                "selected": true
            },
            {
                "label": "Easy integration",
                "value": "easy-integration",
                "selected": false
            },
            {
                "label": "Lightweight model",
                "value": "lightweight-model",
                "selected": false
            }
        ]
    },
    {
        "type": "textarea",
        "required": false,
        "label": "What challenges did you face while integrating YOLO into your web application?",
        "className": "form-control text-dark",
        "name": "textarea-1723887498781-4",
        "access": false,
        "subtype": "textarea"
    },
    {
        "type": "number",
        "required": false,
        "label": "How many hours did it take you to integrate YOLO into your project?",
        "placeholder": "Enter the number of hours",
        "className": "form-control text-dark",
        "name": "number-1723887498781-5",
        "access": false,
        "value": 5
    },
    {
        "type": "radio-group",
        "required": true,
        "label": "Did you face any performance issues with YOLO?",
        "inline": false,
        "name": "radio-group-1723887452503-2",
        "access": false,
        "other": false,
        "values": [
            {
                "label": "Yes",
                "value": "yes",
                "selected": false
            },
            {
                "label": "No",
                "value": "no",
                "selected": true
            }
        ]
    },
    {
        "type": "textarea",
        "required": false,
        "label": "If yes, please describe the performance issues you encountered.",
        "className": "form-control text-dark",
        "name": "textarea-1723887498781-6",
        "access": false,
        "subtype": "textarea"
    },
    {
        "type": "radio-group",
        "required": true,
        "label": "Would you recommend YOLO for face detection in other web applications?",
        "inline": false,
        "name": "radio-group-1723887452503-3",
        "access": false,
        "other": false,
        "values": [
            {
                "label": "Yes",
                "value": "yes",
                "selected": true
            },
            {
                "label": "No",
                "value": "no",
                "selected": false
            }
        ]
    },
    {
        "type": "textarea",
        "required": false,
        "label": "Any additional comments or suggestions?",
        "className": "form-control text-dark",
        "name": "textarea-1723887498781-7",
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