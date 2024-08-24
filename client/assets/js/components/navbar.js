// assets/js/components/navbar.js

function createNavbar(blocks, anonymous, index, restPass) {
    const navbar = document.createElement('nav');

    if (anonymous) navbar.className = "navbar navbar-expand-lg nav";
    else navbar.className = "navbar nav fixed-top";

    navbar.innerHTML = `
        <div class="container-fluid">
            ${anonymous ? `
                <h1 class="px-2 mx-2 hover-1">
                    SurveySafari
                </h1>
                `:`
                <a class="h1 px-2 mx-2 hover-1" href="${blocks.homePage}" style="text-decoration: none;">
                    SurveySafari
                </a>
            `}
            ${anonymous ? `
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    ${index ? `
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#features">
                                    <span class="h5">
                                        Features
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#price-section"><span class="h5">Pricing</span></a>
                            </li>
                        </ul>
                        ` : `
                    `}
                    ${restPass ? ``:`
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="${blocks.signUpPage}"><span class="h5">Sign up</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="${blocks.logInPage}"><span class="h5">Log in</span></a>
                            </li>
                        </ul>
                    `}
                </div>
            ` : `
                ${blocks ? `
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <i class="bi bi-menu-button h2 p-1 m-1"></i>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel" style="background-color: #79AC78;">
        <div class="offcanvas-header">
          <h4 class="offcanvas-title" id="offcanvasDarkNavbarLabel">${blocks.navText}</h4>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                ${blocks.navItems.map((item) => `
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="${item.link}">
                                            <i class="${item.icon}"></i>
                                            <span class="px-3">
                                                ${item.text}
                                            </span>
                                        </a>
                                    </li>
                                `).join('')}
                                <li class="nav-item">
                                    <a class="nav-link" href="" aria-current="page" data-bs-toggle="modal" data-bs-target="#signOutModal"">
                                        <i class="bi bi-box-arrow-in-right"></i>
                                        <span class="px-3">
                                            Sign Out
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    ` : `
                `}
            `}
        </div>
    `;

    return navbar;
}

function setUpNavbar(blocks, anonymous, index=false, restPass=false) {
    const navbar = document.getElementById('navbar');
    navbar.appendChild(createNavbar(blocks, anonymous, index, restPass));
}

export default setUpNavbar;