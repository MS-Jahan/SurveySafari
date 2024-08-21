// assets/js/components/checkbox_response_card.js

import { renderHBarChart } from '../chartJs/response_chats.js';

function createCheckBoxResponseCard(responseData) {
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
    responseCardChart.innerHTML = `
        <canvas class="mx-lg-5" id="hBarChart-${responseData.id}" style="max-height: 300px;"></canvas>
    `;

    responseCard.appendChild(responseCardHeader);
    responseCard.appendChild(responseCardChart);

    renderHBarChart(`hBarChart-${responseData.id}`, responseData.chartData);

    return responseCard;
}

export { createCheckBoxResponseCard };