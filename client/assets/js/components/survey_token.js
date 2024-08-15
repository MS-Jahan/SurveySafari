// assets/js/components/survey_token.js

function createSurveyToken(surveyData) {
    if (!surveyData) {
        console.error("Survey data is required to create a survey token.");
        return;
    }

    const surveyToken = document.createElement('div');
    surveyToken.classList.add('pos-relative', 'px-3', 'py-3');

    surveyToken.innerHTML = `
        <hr class="my-1">
        <h6 class="text-primary text-sm">
            <a href="#" style="text-decoration: none;"><i class="bi bi-clipboard2-data"></i>
                ${surveyData.title}</a>
        </h6>
        <div class="d-flex gap-3">
            ${surveyData.tags.map(tag => `
                <a style="font-size: x-small; text-decoration: underline; -webkit-text-fill-color: #618264;">
                    #${tag}
                </a>`).join('')
            }
        </div>
        <p class="text-end mb-0" style="font-size: small;">
            <i class="bi bi-coin"></i> ${surveyData.coin}
            <i class="bi bi-asterisk px-2"></i> ${surveyData.point}
        </p>
    `;

    return surveyToken;
}

export default createSurveyToken;