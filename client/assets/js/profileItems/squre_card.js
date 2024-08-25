// assets/js/profileItems/squre_card.js

import createDefaultCard from "./default_card.js";

function createSqureCard(profileData) {
    if (!profileData) {
        console.log("profile data not provided !");
        return null;
    }

    const link=document.createElement("link");
    link.type="text/css";
    link.rel="stylesheet";
    link.href="../assets/css/animation/squre.css";
    document.getElementsByTagName("head")[0].appendChild(link);

    const card = createDefaultCard(profileData);

    card.getElementsByClassName("card-body")[0].classList.add("hero");
    for (let i=0; i < 10; i++) {
        var cubeDiv = document.createElement('div');
        cubeDiv.className = "cube";
        card.getElementsByClassName("card-body")[0].appendChild(cubeDiv);
        console.log("hello");
    }
    
    return card;
}

export default createSqureCard;