import createDlineCard from "./dline_card.js"
import createDefaultCard from "./default_card.js"

const profileCards = {
    "DefaultCard": createDefaultCard,
    "DLineCard" : createDlineCard,
}

export default profileCards;