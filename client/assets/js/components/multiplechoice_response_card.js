// assets/js/components/multiplechoice_response_card.js

import { renderDonutChart } from '../chartJs/response_chats.js';

function createMultipleChoiceResponseCard(responseData) {
    if (!responseData) {
        console.warn('No data provided to create multiple choice response card.');
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
        <canvas class="mx-lg-5" id="donutChart-${responseData.id}" style="max-height: 300px;"></canvas>
    `;

    responseCard.appendChild(responseCardHeader);
    responseCard.appendChild(responseCardChart);

    renderDonutChart(`donutChart-${responseData.id}`, responseData.chartData);

    return responseCard;
}

export { createMultipleChoiceResponseCard };