// assets/js/font/georgia.js

import createDefaultFont from './default.js';

function createGeorgiaFont() {
    const link = createDefaultFont();

    link.href = "../assets/css/font/georgia.css";
    
    return link;
}

export default createGeorgiaFont;
