import createDefaultFont from './default.js';
import { showLoadingScreen, hideLoadingScreen } from '../utility/loader.js';

const fonts = {
    "default": createDefaultFont,
};

function setFont(font) {
    const head = document.head;

    if (!fonts.hasOwnProperty(font)) {
        console.error(`Font ${font} not found`);
        return null;
    }

    const currentFontLink = document.getElementById('font-css');
    if (currentFontLink && currentFontLink.href.endsWith('pixelated.css')) {
        console.log(`Font ${font} is already applied.`);
        hideLoadingScreen(); // Hide loading when font is already applied
        return;
    }

    // Show the loading screen
    showLoadingScreen();

    const newFontLink = fonts[font]();
    newFontLink.onload = () => {
        if (currentFontLink) {
            head.removeChild(currentFontLink);
        }
        head.appendChild(newFontLink);
        console.log(`Font ${font} applied.`);
        setTimeout(hideLoadingScreen, 2000);
    };

    head.appendChild(newFontLink);
}

export default setFont;
