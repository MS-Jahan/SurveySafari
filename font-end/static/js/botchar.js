document.addEventListener("DOMContentLoaded", function() {
    // Get the botchar button element
    const botcharButton = document.getElementById('botchar');
    const botcharImg = document.getElementById('botchar-img');
    const botcharPopup = document.getElementById('botchar-popup');

    // Set the initial position of the button
    // botcharButton.style.position = 'absolute';
    // botcharButton.style.top = '50%';
    // botcharButton.style.left = '50%';
    // botcharButton.style.transform = 'translate(-50%, -50%)';

    // Add event listener for mouseover event
    botcharButton.addEventListener('mouseover', () => {
        // Change the image source when hovering over the button
        botcharImg.src = 'static/assets/botchar2.png';
    });

    // Add event listener for mouseout event
    botcharButton.addEventListener('mouseout', () => {
        // Change the image source back to the original when not hovering
        botcharImg.src = 'static/assets/botchar1.png';
    });

    botcharButton.addEventListener('click', () => {
        console.log("hello");
        console.log(botcharPopup);
        if (botcharPopup.open) {
            botcharPopup.hide;
        } else {
            botcharPopup.show;
        }
    });
});

window.setTextToBotchar = function(text) {
    const botcharText = document.getElementById('botchar-text');
    botcharText.textContent = '';

    let index = 0;
    const typingEffect = setInterval(() => {
        botcharText.textContent += text[index];
        index++;

        if (index === text.length) {
            clearInterval(typingEffect);
            if (!botcharPopup.open) {
                botcharPopup.show();
            }
        }
    }, 50);
}