// assets/js/components/item_token.js

function createItemToken(itemData) {
    if (!itemData) {
        console.error("Item data is not provided");
        return null;
    }

    const token = document.createElement('a');
    token.className = "d-flex shadow p-3 mb-3 rounded";
    token.style.textDecoration = "none";
    token.href = itemData.link;

    token.innerHTML = `
        <img class="rounded mx-3" src="${itemData.imgLink}" alt="product image" style="width: 50px; height: 50px;">
        <div>
            <h5>${itemData.name}</h5>
            <h6><i class="bi bi-coin h6"></i> ${itemData.coin}</h6>
        </div>
    `;

    return token;
}

export default createItemToken;