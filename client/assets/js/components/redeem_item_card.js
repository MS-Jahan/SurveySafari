// assets/js/components/redeem_item_card.js

function createRedeemItemCard(redeemItemData) {
    if (!redeemItemData) {
        console.error("No data provided to createRedeemItemCard");
        return null;
    }

    //https://via.placeholder.com/480

    const card = document.createElement('div');
    card.className = "col-md-3 item-card mb-3";
    card.setAttribute("data-price", redeemItemData.price);

    card.innerHTML = `
        <div class="card shadow-lg" style="background-color: #79AC78;">
            <img src="${redeemItemData.imgLink}" class="card-img-top" alt="Item 1" style="max-height: 256px !important;">
            <div class="card-body">
                <div>
                    <h5 class="card-title">${redeemItemData.title}</h5>
                    <p class="card-text">Price: <i class="bi bi-coin"></i> ${redeemItemData.price}</p>
                </div>
                <div class="text-end my-2">
                    <button class="btn btn-md btn-success">Redeem</button>
                </div>
            </div>
        </div>
    `

    return card;
}

export default createRedeemItemCard;