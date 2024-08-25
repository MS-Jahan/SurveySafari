// assets/js/font/times.js

import createDefaultFont from './default.js';

function createTimesFont() {
    const link = createDefaultFont();

    link.href = "../assets/css/font/times.css";
    
    return link;
}

export default createTimesFont;
