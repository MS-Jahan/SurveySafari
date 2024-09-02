function createAuthorSurveyCard(surveyData) {
    if (!surveyData) {
        console.warn("No survey data provided");
        return null;
    }

    const card = document.createElement('div');
    card.className = "card mb-3";
    card.style.backgroundColor = "#79AC78";

    card.innerHTML = `
        <div class="card-header d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h4 class="mb-2 mb-md-0"><i class="bi bi-clipboard-data"></i> ${surveyData.title}</h4>
            <h4 class="mb-0"><i class="bi bi-people-fill"></i> Responses #${surveyData.responses}</h4>
        </div>
        <div class="card-body">
            <div class="d-flex flex-wrap justify-content-start gap-2 mb-3">
                ${surveyData.tags.map(tag => `<span class="tag p-2">${tag}</span>`).join('')}
            </div>
            <p class="card-text">${surveyData.desc}</p>
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                <p class="text-sm mb-3 mb-md-0"><span class="op-6">Survey posted</span> 
                    <a class="text-success" href="#">${surveyData.postedTime}</a> <span class="op-6">ago</p>
                <div class="d-flex flex-wrap gap-2">
                    <a href="${surveyData.link}" class="btn btn-sm btn-outline-success mb-1">
                        <i class="bi bi-eye-fill"></i> Open
                    </a>
                    <a href="${surveyData.privateLink}" class="btn btn-sm btn-warning mb-1">
                        <i class="bi bi-lock-fill"></i> Make Private
                    </a>
                    <a href="${surveyData.deleteLink}" class="btn btn-sm btn-danger mb-1">
                        <i class="bi bi-trash"></i> Delete
                    </a>
                </div>
            </div>
        </div>
    `;

    return card;
}

export default createAuthorSurveyCard;
