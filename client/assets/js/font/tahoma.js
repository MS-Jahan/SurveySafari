// assets/js/font/tahoma.js

import createDefaultFont from './default.js';

function createTahomaFont() {
    const link = createDefaultFont();

    link.href = "../assets/css/font/tahoma.css";
    
    return link;
}

export default createTahomaFont;
