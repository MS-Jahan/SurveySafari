// assets/js/page/explorer_redeem_shop.js

import createRedeemItemCard from "../components/redeem_item_card.js";

const testRedeemItemData = [
    {
        title: "Item 1",
        imgLink: "https://via.placeholder.com/480",
        price: 20
    },
    {
        title: "Item 2",
        imgLink: "https://via.placeholder.com/480",
        price: 50
    },
    {
        title: "Item 3",
        imgLink: "https://via.placeholder.com/480",
        price: 100
    },
    {
        title: "Item 4",
        imgLink: "https://via.placeholder.com/480",
        price: 200
    },
    {
        title: "Item 5",
        imgLink: "https://via.placeholder.com/480",
        price: 500
    },
    {
        title: "Item 6",
        imgLink: "https://via.placeholder.com/480",
        price: 1000
    },
    {
        title: "Item 7",
        imgLink: "https://via.placeholder.com/480",
        price: 2000
    },
    {
        title: "Item 8",
        imgLink: "https://via.placeholder.com/480",
        price: 5000
    },
    {
        title: "Item 9",
        imgLink: "https://via.placeholder.com/480",
        price: 10000
    },
    {
        title: "Item 10",
        imgLink: "https://via.placeholder.com/480",
        price: 20000
    }
]

function __load_redeem_items() {
    const itemList = document.getElementById('item-list');

    if (!itemList) {
        console.error("No item list found in the document");
        return;
    }

    testRedeemItemData.forEach(itemData => {
        const card = createRedeemItemCard(itemData);

        if (card) {
            itemList.appendChild(card);
        }
    });
}

function loadExplorerRedeemShopData() {
    __load_redeem_items();
}

function setUpRedeemModels() {
    // Assuming userCoins is the number of coins the user currently has
    let userCoins = 500; // Example value, replace this with the actual value from your server or application state
    
    // Add event listener to all redeem buttons
    const redeemButtons = document.querySelectorAll('.btn-success');
    redeemButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemCard = this.closest('.item-card');
            const itemTitle = itemCard.querySelector('.card-title').innerText;
            const itemPrice = parseInt(itemCard.getAttribute('data-price'), 10);
            const itemImageSrc = itemCard.querySelector('.card-img-top').getAttribute('src');

            // Set the product details in the modal
            document.getElementById('redeemProductTitle').innerText = itemTitle;
            document.getElementById('redeemProductPrice').innerText = itemPrice;
            document.getElementById('redeemProductImage').setAttribute('src', itemImageSrc);

            // Calculate remaining coins after redeem
            const remainingCoins = userCoins - itemPrice;
            document.getElementById('remainingCoins').innerText = remainingCoins;

            // Show the modal
            const redeemModal = new bootstrap.Modal(document.getElementById('redeemConfirmationModal'));
            redeemModal.show();

            // Handle confirm redeem button click
            document.getElementById('confirmRedeemButton').addEventListener('click', function () {
                if (remainingCoins >= 0) {
                    // Update user coins
                    userCoins = remainingCoins;
                    alert('Redemption successful!');
                } else {
                    alert('You do not have enough coins to redeem this item.');
                }

                // Hide the modal
                redeemModal.hide();
            }, { once: true }); // Ensure the event listener is only added once
        });
    });
}

// Need To break down the function into smaller functions
function setUprangeFilterWithPagination() {
    const searchInput = document.getElementById('search-item');
    const filterPrice = document.getElementById('filter-price');
    const priceRange = document.getElementById('price-range');
    const rangeValue = document.getElementById('range-value');
    const items = Array.from(document.getElementsByClassName('item-card'));
    const itemsPerPage = 8;
    let currentPage = 1;

    function displayItems(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        items.forEach((item, index) => {
            item.style.display = index >= start && index < end ? '' : 'none';
        });
        document.getElementById('page-num').textContent = page;
    }

    function filterItems() {
        const searchText = searchInput.value.toLowerCase();
        const priceRangeValue = parseInt(priceRange.value);

        items.forEach(item => {
            const title = item.querySelector('.card-title').textContent.toLowerCase();
            const price = parseInt(item.getAttribute('data-price'));

            const matchesSearch = title.includes(searchText);
            const withinPriceRange = price <= priceRangeValue;

            if (matchesSearch && withinPriceRange) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterItems);
    priceRange.addEventListener('input', () => {
        rangeValue.textContent = `Price Range: 0 - ${priceRange.value}`;
        filterItems();
    });

    filterPrice.addEventListener('change', () => {
        const selectedOption = filterPrice.value;

        const sortedItems = items.slice().sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));

            if (selectedOption === 'low-to-high') {
                return priceA - priceB;
            } else if (selectedOption === 'high-to-low') {
                return priceB - priceA;
            } else {
                return 0;
            }
        });

        sortedItems.forEach(item => {
            item.parentNode.appendChild(item);
        });
    });

    document.getElementById('prev-page').addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayItems(currentPage);
        }
    });

    document.getElementById('next-page').addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage * itemsPerPage < items.length) {
            currentPage++;
            displayItems(currentPage);
        }
    });

    displayItems(currentPage);
}

export { loadExplorerRedeemShopData, setUpRedeemModels, setUprangeFilterWithPagination };