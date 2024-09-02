// assets/js/font/trebuchet.js

import createDefaultFont from './default.js';

function createTrebuchetFont() {
    const link = createDefaultFont();

    link.href = "../assets/css/font/trebuchet.css";
    
    return link;
}

export default createTrebuchetFont;
