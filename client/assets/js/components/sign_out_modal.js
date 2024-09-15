// assets/js/components/sign_out_modal.js
import { logout } from '../apis/auth/auth_utility.js';

function createSignOutModal(link) {
    const modal = document.createElement('div');
    modal.className = "modal fade";
    modal.id = "signOutModal";

    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "signOutModalLabel");
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
        <style>
            .modal-content {
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                background-color: #79AC78;
            }

            .modal-header {
                border-bottom: none;
            }
        </style>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="signOutModalLabel">Sign Out</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <p class="mb-4">Are you sure you want to sign out?</p>
                <img src="https://img.icons8.com/ios-glyphs/90/000000/exit.png" alt="Sign Out Icon" class="mb-3">
            </div>
            <div class="modal-footer justify-content-center border-0">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger" id="signout_btn">Sign Out</button>
            </div>
            </div>
        </div>
    `;

    return modal;
}

function setUpSignOutModal(link) {
    document.body.appendChild(createSignOutModal(link));

    // need to implement this later
    const signOutButton = document.querySelector('#signout_btn');
    signOutButton.addEventListener('click', async () => {
        try {
            // const response = await fetch(link);
            // logout();
            // if (response.status === 200) {
            //     window.location.href = 'login.html';
            // }
            logout();
        } catch (error) {
            console.error(error);
        }
    });
}

export default setUpSignOutModal;