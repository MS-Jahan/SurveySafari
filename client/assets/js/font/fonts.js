import createDefaultFont from './default.js';
import createJerseySpFont from './jersey_sp.js';
import createTimesFont from './times.js';
import createTrebuchetFont from './trebuchet.js';
import createVerdanaFont from './verdana.js';
import createTahomaFont from './tahoma.js';
import createArialFont from './arial.js';
import createCourierFont from './courier.js';
import createGeorgiaFont from './georgia.js';
import { showLoadingScreen, hideLoadingScreen } from '../utility/loader.js';

const fonts = {
    "default": createDefaultFont,
    "jerseySp": createJerseySpFont,
    "times": createTimesFont,
    "trebuchet": createTrebuchetFont,
    "verdana": createVerdanaFont,
    "tahoma": createTahomaFont,
    "arial": createArialFont,
    "courier": createCourierFont,
    "georgia": createGeorgiaFont,
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
    try{
        showLoadingScreen();
    } catch(e){
        console.log("Loading screen not found");
    }

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
