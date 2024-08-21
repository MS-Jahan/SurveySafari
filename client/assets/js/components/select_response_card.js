// assets/js/components/select_response_card.js

import { renderBarChart } from '../chartJs/response_chats.js';

function createSelectResponseCard(responseData) {
    if (!responseData) {
        console.warn('No data provided to create checkbox response card.');
        return null;
    }

    const responseCard = document.createElement('div');
    responseCard.className = 'card mb-3';
    responseCard.style.backgroundColor = '#79AC78';

    const responseCardHeader = document.createElement('div');
    responseCardHeader.className = 'card-header';
    responseCardHeader.innerHTML = `
        <h4>${responseData.question}</h4>
        <h6>Responses: #${responseData.quantity}</h6>
    `;

    const responseCardChart = document.createElement('div');
    responseCardChart.className = 'card-body my-3 text-start';
    responseCardChart.style.minHeight = '250px';

    // Create canvas as a variable
    const canvas = document.createElement('canvas');
    canvas.id = `hBarChart-${responseData.id}`;
    canvas.style.maxHeight = '300px';
    canvas.className = 'mx-lg-5';

    responseCardChart.appendChild(canvas);
    responseCard.appendChild(responseCardHeader);
    responseCard.appendChild(responseCardChart);

    renderBarChart(canvas, responseData.chartData);

    return responseCard;
}

export { createSelectResponseCard };