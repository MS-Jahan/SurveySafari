// assets/js/page/explorer_profile.js
import profileCards from "../profileItems/cards.js"

function __attachProfileCard(profileData, itemKey) {
    const cardContainer = document.getElementById('profile_card_container');
    cardContainer.innerHTML = ``;

    if (!cardContainer) {
        console.error("No card container found !");
        return null;
    }

    cardContainer.appendChild(profileCards[itemKey](profileData));
}

function __loadExplorerItems() {
    
}

function loadExplorerProfile() {
    var attachedProfileCard = "DLineCard";
    var testProfileData = {
        userName: "Jone Doe",
        profileImgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
        title: "expert",
        bio: "This is Test Profile Bio"
    }

    __attachProfileCard(testProfileData, attachedProfileCard);
    __loadExplorerItems();
}

export { loadExplorerProfile };