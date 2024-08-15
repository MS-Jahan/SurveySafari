// assests/js/components/discussion_card.js

function createDiscussionCard(discussionData, isOwner, ownerLinks=null) {
    if (!discussionData) {
        console.warn("Discussion data is empty");
        return null;
    }

    const card = document.createElement('div');
    card.className = 'card mb-3';
    card.style.backgroundColor = '#79AC78';

    card.innerHTML = `
        <div class="card-header d-flex justify-content-between">
            <h4><i class="bi bi-chat-left-text h4 px-2"></i> ${discussionData.title}</h4>
            <h4><i class="bi-chat-text"></i> ${discussionData.comments}</h4>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-right gap-3">
                ${discussionData.tags.map(tag => `<p class="tag p-1">${tag}</p>`).join('')}
            </div>
            <p class="card-text">
                ${discussionData.desc}
            </p>
            <div class="d-flex justify-content-between">
                <p class="text-sm mb-0 pb-0"><span class="op-6">Posted</span> <a class="text-success"
                        href="#">${discussionData.posted}</a> <span class="op-6">ago by</span> <a class="text-success"
                        href="#">${discussionData.by}</a>
                </p>
                ${isOwner ? `
                    <div class="gap-2">
                        <a href="${ownerLinks.viewLink}" class="btn btn-sm btn-outline-success"><i class="bi bi-eye-fill"></i> view</a>
                        <a href="${ownerLinks.deleteLink}" class="btn btn-sm btn-success"><i class="bi bi-trash"></i> delete</a>
                    </div>
                ` : `
                    <a href="${discussionData.link}" class="btn btn-success"><i class="bi bi-people-fill"></i> Join</a>
                `}
            </div>
        </div>
    `;

    return card;
}

export default createDiscussionCard;