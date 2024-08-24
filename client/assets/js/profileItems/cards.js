// assets/js/profileItems/cards.js

import createDefaultCard from "./default_card.js"
import createDlineCard from "./dline_card.js"
import createDarkFallCard from "./dark_fall_card.js"
import createGradientCard from "./gradient_card.js"
import createHlineCard from "./hline_card.js"
import createCloudCard from "./cloud_card.js"
import createSnowCard from "./snow_card.js"
import createSqureCard from "./squre_card.js"
import createCheckCard from "./check_card.js"

const profileCards = {
    "DefaultCard": createDefaultCard,
    "DLineCard": createDlineCard,
    "DarkFallCard": createDarkFallCard,
    "GradientCard": createGradientCard,
    "HlineCard": createHlineCard,
    "CloudCard": createCloudCard,
    "SnowCard": createSnowCard, 
    "SqureCard": createSqureCard,
    "CheckCard": createCheckCard,
}

export default profileCards;