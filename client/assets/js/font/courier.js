// assets/js/font/courier.js

import createDefaultFont from './default.js';

function createCourierFont() {
    const link = createDefaultFont();

    link.href = "../assets/css/font/courier.css";
    
    return link;
}

export default createCourierFont;
