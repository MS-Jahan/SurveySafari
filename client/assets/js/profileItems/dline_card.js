// assets/js/profileItems/dline_card.js
import createDefaultCard from "./default_card.js";

function createDlineCard(profileData) {
    if (!profileData) {
        console.log("profile data not provided ! 1");
        return null;
    }

    const link=document.createElement("link");
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../assets/css/animation/dline.css";
    document.getElementsByTagName("head")[0].appendChild(link);

    const card = createDefaultCard(profileData);

    card.getElementsByClassName("card-body")[0].classList.add("dline");
    
    return card;
}

export default createDlineCard;