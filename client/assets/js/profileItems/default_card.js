// assets/js/profileItems/default_card.js

function createDefaultCard(profileData) {

    if (!profileData) {
        console.log("profile data not provided !");
        return null;
    }

    const card = document.createElement('div');
    card.className = "card";
    card.style.backgroundColor = "#79AC78";

    const cardHeader = document.createElement('div');
    cardHeader.className = "card-header";
    cardHeader.style.webkitTextFillColor = "#618264";
    cardHeader.innerHTML = `
        <div class="row">
            <div class="col-12">
                <h3><i class="bi bi-person-bounding-box"></i> Profile</h3>
            </div>
        </div>
    `;

    const cardBody = document.createElement('div');
    cardBody.className = "card-body pt-5";
    cardBody.style.borderBottomRightRadius = "5px !important";
    cardBody.style.borderBottomLeftRadius = "5px !important";

    const cardBodyInnerDiv = document.createElement('div');
    cardBodyInnerDiv.className = "d-flex flex-column align-items-center text-center";
    cardBodyInnerDiv.innerHTML = `
        <div id="wrap" class="img-wrap">
            <img src="${profileData.profileImgUrl}" alt="Admin"
                class="rounded-circle" width="150">
        </div>
        <div class="mt-3">
            <h4>${profileData.userName}</h4>
            <p class="mb-1">${profileData.title}</p>
            <p class="font-size-sm">${profileData.bio}</p>
        </div>
    `;

    cardBody.appendChild(cardBodyInnerDiv);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}

export default createDefaultCard;