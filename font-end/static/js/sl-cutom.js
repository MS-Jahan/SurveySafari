const drawer = document.querySelector('.drawer-placement-top');
const openButton = document.querySelector('.humburger');
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

openButton.addEventListener('click', () => drawer.show());
closeButton.addEventListener('click', () => drawer.hide());