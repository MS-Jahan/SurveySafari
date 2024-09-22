function __capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function social_links_item(platform, value) {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
            style="background-color: #79AC78;">
            <h5 class="mb-0 text-success"><i class="bi bi-${platform == "website" ? "globe" : platform == "facebook" ? "facebook" : platform == "twitter" ? "twitter" : platform == "linkedin" ? "linkedin" : platform == "instagram" ? "instagram" : "link"}"></i> ${__capitalize(platform)}</h5>
            <a href="#" class="">${value}</a>
        </li>
    `;
}

export default social_links_item;