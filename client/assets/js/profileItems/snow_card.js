// assets/js/profileItems/snow_card.js

import createDefaultCard from "./default_card.js";

function createSnowCard(profileData) {
    if (!profileData) {
        console.log("profile data not provided ! 1");
        return null;
    }

    const link=document.createElement("link");
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../assets/css/animation/snow.css";
    document.getElementsByTagName("head")[0].appendChild(link);

    const snowDiv = document.createElement('div');
    snowDiv.className = "background-animation";

    const card = createDefaultCard(profileData);

    card.classList.add("background-container");
    card.appendChild(snowDiv);
    
    return card;
}

export default createSnowCard;