// assets/js/components/textfield_response_card.js

function createTextFieldResponseSummaryCard(textFieldResponseData) {
    if (!textFieldResponseData) {
        console.warn("No data provided to create text field response card.");
        return null;
    }

    var textFieldResponseCard = document.createElement("div");
    textFieldResponseCard.className = "card mb-3";
    textFieldResponseCard.style.backgroundColor = "#79AC78";
    textFieldResponseCard.innerHTML = `
        <div class="card-header">
            <h4>Question: ${textFieldResponseData.question}</h4>
            <h6>Responses: #${textFieldResponseData.quantity}</h6>
        </div>
        <div class="card-body my-3" style="min-height: 250px;">
            <ul class="list-group custom-scrollbar" style="overflow-y: auto; max-height: 400px;">
                ${textFieldResponseData.responses.map(response => `<li class="list-group-item list-group-item-custom">${response}</li>`).join("")}
            </ul>
        </div>
    `;

    return textFieldResponseCard;
}

export { createTextFieldResponseSummaryCard };