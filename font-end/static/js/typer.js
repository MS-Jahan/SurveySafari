document.addEventListener("DOMContentLoaded", function() {
    // Typing animation
    var text = "Everyone Wins: Fun for Respondents, Quality Data for Creators";
    var index = 0;
    var speed = 100; // typing speed in milliseconds
    var h1Element = document.querySelector('.animated-text');
    var animationDuration = parseFloat(getComputedStyle(h1Element).animationDuration) * 1000;

    function typeText() {
        if (index < text.length) {
            document.getElementById("typer").textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    setTimeout(function() {
        // Call the function to play the typer animation
        typeText();
    }, animationDuration);

});