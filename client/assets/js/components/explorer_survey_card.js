// assets/js/components/explorer_survey_card.js

function createExplorerSurveyCard(surveyData) {
    const card = document.createElement('div');
    card.className = "card mb-3 border-0 shadow-sm"
    card.style.backgroundColor = "#79AC78";
    card.style.borderRadius = "15px";

    if (!surveyData) {
        console.error("Survey data is not provided");
        return null;
    }

    card.innerHTML = `
        <div class="card-header">
            <h4 class="text-white"><i class="bi bi-clipboard2-data"></i> ${surveyData.title}</h4>
        </div>
        <div class="card-body p-4">
            <div class="row align-items-center">
                <!-- Content Section -->
                <div class="col-lg-8 col-md-8 col-12">
                    <p class="text-white">${surveyData.desc}</p>
                    <div class="d-flex flex-wrap gap-2 mt-3">
                        ${surveyData.tags.map(tag => `<span class="tag p-2">${tag}</span>`).join('')}
                    </div>
                </div>
                <!-- Points and Button Section -->
                <div class="col-lg-4 col-md-4 col-12 text-center text-md-end mt-4 mt-md-0">
                    <div class="d-flex flex-column align-items-center align-items-md-end">
                        <h5 class="text-white mb-2"><i class="bi bi-coin"></i> ${surveyData.coin}</h5>
                        <h5 class="text-white mb-4"><i class="bi bi-asterisk"></i> ${surveyData.point}</h5>
                        <a class="btn btn-lg btn-outline-success px-4" href="${surveyData.link}">GO!</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    return card;
}

export default createExplorerSurveyCard;