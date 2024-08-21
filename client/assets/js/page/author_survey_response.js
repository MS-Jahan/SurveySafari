// assets/js/page/author_survey_response.js

import { createTextFieldResponseSummaryCard } from '../components/textfield_response_card.js';
import { createMultipleChoiceResponseCard } from '../components/multiplechoice_response_card.js';
import { createCheckBoxResponseCard } from '../components/checkbox_response_card.js';
import { createNonUniqueResponseCard } from '../components/non_unique_response_card.js';

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

const testSurveyResponseSummary = {
    "text-responses": [
        {
            question: "Full Name",
            serial: 1,
            quantity: 3,
            responses: [
                "John Doe",
                "Jane Smith",
                "Michael Johnson"
            ]
        },
        {
            question: "Your Feedback on YOLO",
            serial: 6,
            quantity: 3,
            responses: [
                "YOLO has proven to be a reliable face detection tool, but it could benefit from more efficient processing times.",
                "I found YOLO to be very accurate in detecting faces in real-time.",
                "The integration of YOLO into my web application was seamless and hassle-free."
            ]
        },
        {
            question: "What challenges did you face while integrating YOLO into your web application?",
            quantity: 2,
            serial: 9,
            responses: [
                "I encountered some issues with the compatibility of YOLO with my existing codebase.",
                "The documentation for integrating YOLO was not very clear, which made the process more challenging."
            ]
        },
        {
            question: "If yes, please describe the performance issues you encountered.",
            serial: 12,
            quantity: 1,
            responses: [
                "I experienced some lag in the processing speed of YOLO when detecting multiple faces simultaneously."
            ]
        },
        {
            question: "Any additional comments or suggestions?",
            serial: 14,
            quantity: 2,
            responses: [
                "Overall, I am satisfied with the performance of YOLO and would recommend it to others.",
                "It would be helpful to have more tutorials and guides on optimizing YOLO for different use cases."
            ]
        }
    ],
    "radio-group-responses": [
        {
            id: 1,
            question: "Gender",
            serial: 2,
            quantity: 3,
            chartData: {
                title: "Gender Distribution",
                labels: [
                    "Male",
                    "Female",
                    "Non-binary"
                ],
                data: [2, 10, 1],
                backgroundColor: [
                    "#ff33f9",
                    "#4441ff",
                    "#f9ff41"
                ],
            }
        },
        {
            id: 2,
            question: "Would you recommend YOLO for face detection in other web applications?",
            serial: 13,
            quantity: 3,
            chartData: {
                title: "Recommendation Status",
                labels: [
                    "Yes",
                    "No"
                ],
                data: [2, 1],
                backgroundColor: [
                    "#ff33f9",
                    "#4441ff"
                ]
            }
        },
        {
            id: 4,
            question: "Did you face any performance issues with YOLO?",
            serial: 11,
            quantity: 3,
            chartData: {
                title: "Performance Issues",
                labels: [
                    "Yes",
                    "No"
                ],
                data: [1, 2],
                backgroundColor: [
                    "#ff33f9",
                    "#4441ff"
                ]
            }
        }
    ],
    "checkbox-group-responses": [
        {
            id: 3,
            question: "Which features of YOLO do you find most useful?",
            serial: 8,
            quantity: 3,
            chartData: {
                datasetLabel: "Feature Preferences",
                title: "Feature Preferences",
                labels: [
                    "Real-time detection",
                    "High accuracy",
                    "Easy integration",
                    "Lightweight model"
                ],
                data: [3, 3, 1, 0],
                backgroundColor: [
                    "#ff33f9",
                    "#4441ff",
                    "#f9ff41",
                    "#41ff44"
                ]
            }
        }
    ],
    "non-unique-responses": [
        {
            id: 5,
            question: "How many hours did it take you to integrate YOLO into your project?",
            quantity: 3,
            serial: 10,
            chartData: {
                title: "Integration Hours",
                xAxisLabel: "Hours",
                yAxisLabel: "Responses",
                labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                datasetLabel: "Integration Hours",
                data: [0, 5, 2, 6, 2, 8, 1, 5, 10, 9, 8, 7, 6, 0, 0, 0, 0],
            }
        },
    ]
}

const testSurveyResponseByQuestion = {

}

const testSurveyResponseByUser = {

}

function __loadAuthorSurveyResponseSummary() {
    const summaryResContainer = document.getElementsByClassName('summary_response_container')[0];
    if (!summaryResContainer) {
        console.warn("No summary response container found.");
        return null;
    }

    let responseCards = [];
    testSurveyForm.forEach((question) => {
        responseCards.push(null);
    });

    if (testSurveyResponseSummary['text-responses']) {
        testSurveyResponseSummary['text-responses'].forEach((textResponse) => {
            const serial = textResponse.serial;
            responseCards[serial - 1] = createTextFieldResponseSummaryCard(textResponse);
        });
    }
    if (testSurveyResponseSummary['radio-group-responses']) {
        testSurveyResponseSummary['radio-group-responses'].forEach((rgResponse) => {
            const serial = rgResponse.serial;
            responseCards[serial - 1] = createMultipleChoiceResponseCard(rgResponse);
        });
    }
    if (testSurveyResponseSummary['checkbox-group-responses']) {
        testSurveyResponseSummary['checkbox-group-responses'].forEach((cbResponse) => {
            const serial = cbResponse.serial;
            responseCards[serial - 1] = createCheckBoxResponseCard(cbResponse);
        });
    }
    if (testSurveyResponseSummary['non-unique-responses']) {
        testSurveyResponseSummary['non-unique-responses'].forEach((nuResponse) => {
            const serial = nuResponse.serial;
            responseCards[serial - 1] = createNonUniqueResponseCard(nuResponse);
        });
    }

    responseCards.forEach((card) => {
        if (card) {
            summaryResContainer.appendChild(card);
        }
    });
}

function __loadAuthorSurveyResponseByQuestion() {

}

function __loadAuthorSurveyResponseByUser() {

}

function __summaryResBtnClickHandler() {
    __showDiv('summary');
    __loadAuthorSurveyResponseSummary();
}

function __questionResBtnClickHandler() {
    __showDiv('question');
    __loadAuthorSurveyResponseByQuestion();
}

function __individualResBtnClickHandler() {
    __showDiv('individual');
    __loadAuthorSurveyResponseByUser();
}

function __showDiv(divId) {
    // Hide all sections by adding the d-none class
    document.querySelectorAll('.footer-content').forEach(function (div) {
        div.classList.add('d-none');
    });

    // Show the selected div section by removing the d-none class
    const selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
        selectedDiv.classList.remove('d-none');
    }

    // Hide all response containers by adding the d-none class
    document.querySelectorAll('.summary_response_container, .question_response_container, .individual_response_container').forEach(function (container) {
        container.classList.add('d-none');
    });

    // Show the specific response container by removing the d-none class
    const selectedContainer = document.querySelector(`.${divId}_response_container`);
    if (selectedContainer) {
        selectedContainer.classList.remove('d-none');
    }
}

function loadAuthorSurveyResponseData() {
    const summaryResBtn = document.getElementById('summary_res_btn');
    const questionResBtn = document.getElementById('question_res_btn');
    const individualResBtn = document.getElementById('individual_res_btn');

    if (summaryResBtn) {
        summaryResBtn.addEventListener('click', __summaryResBtnClickHandler);
    }
    if (questionResBtn) {
        questionResBtn.addEventListener('click', __questionResBtnClickHandler);
    }
    if (individualResBtn) {
        individualResBtn.addEventListener('click', __individualResBtnClickHandler);
    }

    __summaryResBtnClickHandler();
}

export { loadAuthorSurveyResponseData };