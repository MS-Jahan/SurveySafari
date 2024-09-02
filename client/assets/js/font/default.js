// assets/js/font/default.js

function createDefaultFont() {
    const link = document.createElement('link');
    link.id = 'font-css';
    link.rel = 'stylesheet';
    link.href = '../assets/css/font/pixelated.css';
    
    return link;
}

export default createDefaultFont;