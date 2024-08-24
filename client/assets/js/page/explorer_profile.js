// assets/js/page/explorer_profile.js
import profileCards from "../profileItems/cards.js"
import createExplorerItemCard from "../components/explorer_item_card.js"

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
        console.log(item);
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

function loadExplorerProfile() {
    var attachedProfileCard = "CloudCard";
    var testProfileData = {
        userName: "Jone Doe",
        profileImgUrl: "https://bootdey.com/img/Content/avatar/avatar7.png",
        title: "expert",
        bio: "This is Test Profile Bio"
    }

    __attachProfileCard(testProfileData, attachedProfileCard);
    __loadExplorerItems(testProfileData, attachedProfileCard);
}

export { loadExplorerProfile };