// assets/js/components/author_survey_card.js

function createAuthorSurveyCard(surveyData) {
    if (!surveyData) {
        console.warn("No survey data provided");
        return null;
    }

    const card = document.createElement('div');
    card.className = "card mb-3";
    card.style.backgroundColor = "#79AC78";

    card.innerHTML = `
        <div class="card-header d-flex justify-content-between">
            <h4><i class="bi bi-clipboard-data"></i> ${surveyData.title}</h4>
            <h4><i class="bi bi-people-fill"></i> Responses #${surveyData.responses}</h4>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-right gap-3">
                ${surveyData.tags.map(tag => `<p class="tag p-1">${tag}</p>`).join('')}
            </div>
            <p class="card-text">${surveyData.desc}</p>
            <div class="d-flex justify-content-between">
                <p class="text-sm mb-0 pb-0"><span class="op-6">Survey posted</span> <a
                        class="text-success" href="#">${surveyData.postedTime}</a> <span class="op-6">ago</p>
                <div class="gap-2">
                    <a href="${surveyData.link}" class="btn btn-sm btn-outline-success mb-1"><i class="bi bi-eye-fill"></i> Open</a>
                    <a href="${surveyData.privateLink}" class="btn btn-sm btn-warning mb-1"><i class="bi bi-lock-fill"></i> Make Private</a>
                    <a href="${surveyData.deleteLink}" class="btn btn-sm btn-danger mb-1"><i class="bi bi-trash"></i> Delete</a>
                </div>
            </div>
        </div>
    `;

    return card;
}

export default createAuthorSurveyCard;