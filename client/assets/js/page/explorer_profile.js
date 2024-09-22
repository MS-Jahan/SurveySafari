// assets/js/page/explorer_profile.js
import profileCards from "../profileItems/cards.js"
import createExplorerItemCard from "../components/explorer_item_card.js"
import { fetchProfileData } from '../apis/auth/auth_utility.js';
import social_links_item from "../components/social_links_item.js";

function __attachProfileCard(profileData, itemKey) {
    const cardContainer = document.getElementById('profile_card_container');
    cardContainer.innerHTML = ``;

    if (!cardContainer) {
        console.error("No card container found !");
        return null;
    }

    cardContainer.appendChild(profileCards[itemKey](profileData));
}

function __loadExplorerItems(profileData, attachedProfileCard) {
    const itemContainerModal = document.getElementById("itemsCollectionModal");
    const itemContainer = document.getElementById("items_container");

    if (!itemContainer || !itemContainerModal) {
        console.log("Item Container or Modal not found!");
        return null;
    }

    var textExplorerItems = [
        {
            imgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            itemName: "DLineCard"
        },
        {
            imgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            itemName: "DarkFallCard"
        },
        {
            imgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            itemName: "GradientCard"
        },
        {
            imgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            itemName: "HlineCard"
        },
        {
            imgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            itemName: "CloudCard"
        },
        {
            imgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            itemName: "SnowCard"
        },
        {
            imgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            itemName: "SqureCard"
        },
        {
            imgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            itemName: "CheckCard"
        }
    ];

    function __update_button_state(excludeBtns) {
        let btns = Array.from(itemContainer.getElementsByTagName('button'));

        btns.forEach(btn => {
            if (!excludeBtns.includes(btn)) {
                if (btn.id === "attach_btn") {
                    btn.disabled = false;
                } else {
                    btn.disabled = true;
                }
            }
        });
    }

    textExplorerItems.forEach(element => {
        var item = createExplorerItemCard(element);
        var attachBtn = item.querySelector("#attach_btn");
        var detachBtn = item.querySelector("#detach_btn");

        attachBtn.disabled = false || (attachedProfileCard == attachBtn.value);
        detachBtn.disabled = !attachBtn.disabled;

        attachBtn.addEventListener("click", function() {
            attachedProfileCard = attachBtn.value;
            __attachProfileCard(profileData, attachBtn.value);

            attachBtn.disabled = !attachBtn.disabled;
            detachBtn.disabled = !attachBtn.disabled;
            itemContainerModal.querySelector('.btn-close').click();
            __update_button_state([attachBtn, detachBtn]);
        });

        detachBtn.addEventListener("click", function() {
            attachedProfileCard = "DefaultCard";
            __attachProfileCard(profileData, "DefaultCard");

            detachBtn.disabled = !detachBtn.disabled;
            attachBtn.disabled = !detachBtn.disabled;
            itemContainerModal.querySelector('.btn-close').click();
            __update_button_state([attachBtn, detachBtn]);
        });

        itemContainer.appendChild(item);
    });
    
}

function __loadExplorerPersonalInfo(data) {
    document.getElementById('explorer_name').innerText = data.name;
    document.getElementById('explorer_institute').innerText = data.institute? data.institute : "<No Institute>";
    document.getElementById('explorer_email').innerText = data.email? data.email : "<No Institute>";
    document.getElementById('explorer_phone').innerText = data.explorer.phone? data.explorer.phone : "<No Phone>";
    document.getElementById('explorer_address').innerText = data.address? data.address : "<No Address>";
}

function __loadExplorerProfileStats(data) {
    document.getElementById('explorer_rank').innerText = data.explorer.explorerRank? data.explorer.explorerRank : "Unranked";
    document.getElementById('explorer_coin').innerText = data.explorer.coin;
    document.getElementById('explorer_point').innerText = data.explorer.point;
}

function __loadSocialLinks(data) {
    document.getElementById('social-links').innerHTML = "";

    // check if data.explorer.socialLinks is empty
    if (data.explorer.socialLinks.length == 0) {
        // add a message to the user
        document.getElementById('social-links').innerHTML = `
            <div class="alert" role="alert">
                No social links found!
            </div>
        `;
        return;
    }

    for(let i = 0; i < data.explorer.socialLinks.length; i++) {
        const socialLink = data.explorer.socialLinks[i];
        document.getElementById('social-links').innerHTML += social_links_item(socialLink.platform, socialLink.value);
    }

}

function loadExplorerProfile() {
    var attachedProfileCard = "CloudCard";
    fetchProfileData().then(data => {
        var profileData = {
            userName: data.username,
            profileImgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
            title: data.explorer.title? data.explorer.title : "",
            bio: data.explorer.bio? data.explorer.bio : "",
        }
        __attachProfileCard(profileData, attachedProfileCard);
        __loadExplorerItems(profileData, attachedProfileCard);
        __loadExplorerPersonalInfo(data);
        __loadExplorerProfileStats(data);
        __loadSocialLinks(data);
    });
}



export { loadExplorerProfile };