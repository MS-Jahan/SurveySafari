document.addEventListener("DOMContentLoaded", function() {
    const loginDiv = document.getElementById('login-div');
    const signupDiv = document.getElementById('signup-div');
    const featureDiv = document.getElementById('features-div');
    const sectionDiv = document.getElementById('security-div');
    const pricingDiv = document.getElementById('pricing-div');

    function toggleDiv(trigger) {
        loginDiv.style.display = 'none';
        signupDiv.style.display = 'none';
        featureDiv.style.display = 'none';
        sectionDiv.style.display = 'none';
        pricingDiv.style.display = 'none';

        if (trigger.id === 'login') {
            loginDiv.style.display = 'block';
        } else if (trigger.id === 'signup') {
            signupDiv.style.display = 'block';
        } else if (trigger.id === 'features') {
            featureDiv.style.display = 'block';
        } else if (trigger.id === 'security') {
            sectionDiv.style.display = 'block';
        } else if (trigger.id === 'pricing') {
            pricingDiv.style.display = 'block';
        }
    }

    // Smooth scroll and active class handling
    const navbarItems = document.querySelectorAll('.navbar__container__item');

    navbarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('clicked');
            // Remove active class from all items
            navbarItems.forEach(navItem => {
                navItem.classList.remove('active__item');
            });

            toggleDiv(this);

            // Add active class to the clicked item
            this.classList.add('active__item');
        });
    });
});