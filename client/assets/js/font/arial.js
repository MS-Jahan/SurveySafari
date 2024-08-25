// assets/js/font/arial.js

import createDefaultFont from './default.js';

function createArialFont() {
    const link = createDefaultFont();

    link.href = "../assets/css/font/arial.css";
    
    return link;
}

export default createArialFont;
