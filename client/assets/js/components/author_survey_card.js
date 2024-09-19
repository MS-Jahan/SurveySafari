import { toggleSurveyPrivacy, deleteSurvey } from '../apis/survey.js';

function timeSince(timestamp) {
    console.log("timestamp", timestamp);
    console.log("new Date(timestamp)", new Date(timestamp));
    const now = new Date();
    const secondsPast = (now.getTime() - new Date(timestamp).getTime()) / 1000;
    if (secondsPast < 60) {
        return parseInt(secondsPast) + ' seconds ago';
    }
    if (secondsPast < 3600) {
        return parseInt(secondsPast / 60) + ' minutes ago';
    }
    if (secondsPast <= 86400) {
        return parseInt(secondsPast / 3600) + ' hours ago';
    }
    if (secondsPast <= 604800) {
        return parseInt(secondsPast / 86400) + ' days ago';
    }
    // Add logic for weeks
    if (secondsPast > 604800) {
        return 'over a week ago';
    }
    // Add logic for months
    if (secondsPast > 2592000) {
        return 'over a month ago';
    }
    // Add logic for years
    if (secondsPast > 31536000) {
        return 'over a year ago';
    }
    // Default
    return 'a while ago';
}

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
                ${surveyData.tags && surveyData.tags.length > 0 ? surveyData.tags.map(tag => `<span class="tag p-2">${tag}</span>`).join('') : '<span class="tag p-2">No tags</span>'}
            </div>
            <p class="card-text">${surveyData.desc}</p>
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                <p class="text-sm mb-3 mb-md-0"><span class="op-6">Survey posted</span> 
                    <a id="posted-time" class="text-success" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="${new Date(surveyData.postedTime).toString()}">${timeSince(surveyData.postedTime)}</a> <span class="op-6">ago</p>
                <div class="d-flex flex-wrap gap-2">
                    <a href="${surveyData.link}" class="btn btn-sm btn-outline-success mb-1">
                        <i class="bi bi-eye-fill"></i> Open
                    </a>
                    <a class="btn btn-sm btn-warning mb-1 privacy-btn">
                        <i class="bi bi-lock-fill"></i> ${surveyData.status == 'public' ? 'Make Private' : 'Make Public'}
                    </a>
                    <a class="btn btn-sm btn-danger mb-1 delete-btn">
                        <i class="bi bi-trash"></i> Delete
                    </a>
                </div>
            </div>
        </div>
    `;

    // Add event listener after the element is created
    card.querySelector('.privacy-btn').addEventListener('click', () => {
        toggleSurveyPrivacy(surveyData.id, surveyData.status == 'public' ? 'private' : 'public');
    });

    // Add event listener after the element is created
    card.querySelector('.delete-btn').addEventListener('click', () => {
        deleteSurvey(surveyData.id);
    });

    return card;
}

export default createAuthorSurveyCard;
