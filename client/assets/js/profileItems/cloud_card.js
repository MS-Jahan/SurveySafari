// assets/js/profileItems/dark_fall_card.js

import createDefaultCard from "./default_card.js";

function createCloudCard(profileData) {
    if (!profileData) {
        console.log("profile data not provided ! 1");
        return null;
    }

    const link=document.createElement("link");
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../assets/css/animation/inf-cloud.css";
    document.getElementsByTagName("head")[0].appendChild(link);

    const card = createDefaultCard(profileData);

    card.classList.add("cloud");
    
    return card;
}

export default createCloudCard;