// assets/js/profileItems/gradient_card.js

import createDefaultCard from "./default_card.js";

function createGradientCard(profileData) {
    if (!profileData) {
        console.log("profile data not provided ! 1");
        return null;
    }

    const link=document.createElement("link");
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../assets/css/animation/gradient.css";
    document.getElementsByTagName("head")[0].appendChild(link);

    const card = createDefaultCard(profileData);

    card.classList.add("gradient-profile-card");
    
    return card;
}

export default createGradientCard;