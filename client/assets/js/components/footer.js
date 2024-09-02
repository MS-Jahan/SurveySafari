// assets/js/components/footer.js

function createFooter(margin) {
    const footer = document.createElement('footer');
    footer.className = "footer";
    footer.innerHTML = `
        <footer class="d-flex flex-wrap justify-content-between py-4 my-${margin} border-top">
            <div class="col-md-4 d-flex">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
                <span class="mb-3 mb-md-0 hover-1">
                    © 2024 XP Innovators, Team
                </span>
            </div>
            <ul class="col-md-4 justify-content-end list-unstyled d-flex px-4 mx-4">
                <li class="ms-3">
                    <a href="#">
                        <i class="bi bi-facebook h5"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a href="#">
                        <i class="bi bi-twitter-x h5"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a href="#">
                        <i class="bi bi-linkedin h5"></i>
                    </a>
                </li>
            </ul>
        </footer>
    `

    return footer;
}

function setUpFooter(margin) {
    document.querySelector('footer').replaceWith(createFooter(margin));
}

export default setUpFooter;