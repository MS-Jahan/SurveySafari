// assets/js/components/explorer_item_card.js

function createExplorerItemCard(data) {
    if (!data) {
        console.log("data was not provided!");
        return null;
    }

    const itemCol = document.createElement('div');
    itemCol.className = "col-md-3 col-sm-4 col-6";

    const card = document.createElement('div');
    card.className = "card h-100 shadow-sm border-0 rounded";

    card.innerHTML = `
        <img src="${data.imgUrl}" class="card-img-top" alt="Item 1">
        <div class="card-body d-flex flex-column p-3 rounded" style="background-color: #619760;">
            <h6 class="card-title text-center text-light">${data.itemName}</h6>
            <div class="d-grid gap-2 mt-auto">
                <button class="btn btn-outline-success attach-btn" id="attach_btn" value="${data.itemName}">Attach</button>
                <button class="btn btn-outline-secondary detach-btn" id="detach_btn">Detach</button>
            </div>
        </div>
    `;

    itemCol.appendChild(card);

    return itemCol;
}

export default createExplorerItemCard;