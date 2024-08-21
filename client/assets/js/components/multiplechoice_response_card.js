// assets/js/components/multiplechoice_response_card.js

import { renderDonutChart } from '../chartJs/response_chats.js';

function createMultipleChoiceResponseCard(responseData) {
    if (!responseData) {
        console.warn('No data provided to create multiple choice response card.');
        return null;
    }
    
    const responseCard = document.createElement('div');
    responseCard.className = 'card mb-3 response-card';
    responseCard.id = `${responseData.question}-${responseData.serial}`;
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
    canvas.id = `donutChart-${responseData.id}`;
    canvas.style.maxHeight = '300px';
    canvas.className = 'mx-lg-5';
    
    // Append the canvas to the card body
    responseCardChart.appendChild(canvas);
    responseCard.appendChild(responseCardHeader);
    responseCard.appendChild(responseCardChart);

    // Now render the chart using the canvas element
    renderDonutChart(canvas, responseData.chartData);

    return responseCard;
}


export { createMultipleChoiceResponseCard };