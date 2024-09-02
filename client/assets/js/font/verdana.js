// assets/js/font/verdana.js

import createDefaultFont from './default.js';

function createVerdanaFont() {
    const link = createDefaultFont();

    link.href = "../assets/css/font/verdana.css";
    
    return link;
}

export default createVerdanaFont;
