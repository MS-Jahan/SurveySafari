// assets/js/components/discussion_token.js

function createDiscussionToken(discussionData) {
    if (!discussionData) {
        console.error("No data provided to createDiscussionToken");
        return null;
    }

    const token = document.createElement('div');
    token.className = "pos-relative px-3 py-3";

    token.innerHTML = `
        <hr class="mb-1 mt-0 pt-0">
        <h6 class="text-primary text-sm">
            <a href="${discussionData.link}" style="text-decoration: none;">
                <i class="bi bi-chat-left-text px-2"></i>
                ${discussionData.title}
            </a>
        </h6>
        <p class="mb-0" style="font-size: small;">
            <span class="op-6">Posted</span>
            <a class="text-success" href="">${discussionData.posted}</a>
            <span class="op-6">ago by</span>
            <a class="text-success" href="#">${discussionData.by}</a>
        </p>
    `;

    return token;
}

export default createDiscussionToken;