// assets/js/profileItems/check_card.js

import createDefaultCard from "./default_card.js";

function createCheckCard(profileData) {
    if (!profileData) {
        console.log("profile data not provided !");
        return null;
    }

    const link=document.createElement("link");
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../assets/css/animation/check.css";
    document.getElementsByTagName("head")[0].appendChild(link);

    const card = createDefaultCard(profileData);

    card.classList.add("check-wrapper");
    
    return card;
}

export default createCheckCard;