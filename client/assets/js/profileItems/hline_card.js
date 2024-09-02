// assets/js/profileItems/hline_card.js

import createDefaultCard from "./default_card.js";

function createHlineCard(profileData) {
    if (!profileData) {
        console.log("profile data not provided !");
        return null;
    }

    const link=document.createElement("link");
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../assets/css/animation/line.css";
    document.getElementsByTagName("head")[0].appendChild(link);

    const card = createDefaultCard(profileData);
    card.classList.add("line-background");
    
    for (let i = 1; i <= 9; i++) {
        const light = document.createElement("div");
        light.className = `light x${i}`;
        card.getElementsByClassName("card-body")[0].appendChild(light);
    }

    return card;
}

export default createHlineCard;