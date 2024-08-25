// assets/js/font/jersey_sp.js

import createDefaultFont from './default.js';

function createJerseySpFont() {
    const link = createDefaultFont();

    link.href = "../assets/css/font/jersey_sp.css"
    
    return link;
}

export default createJerseySpFont;