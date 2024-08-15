// assets/js/page/community_discussion.js

import createDiscussionCard from '../components/discussion_card.js';
import createDiscussionToken from '../components/discssion_token.js';

const testDiscussionData = [
    {
        title: "Special title treatment",
        desc: "With supporting text below as a natural lead-in to additional content.",
        tags: ["AI", "Opinion", "Prediction"],
        posted: "54 minutes",
        by: "DanielD",
        comments: 12,
        link: "#"
    },
    {
        title: "Special title treatment",
        desc: "With supporting text below as a natural lead-in to additional content.",
        tags: ["AI", "Opinion", "Prediction"],
        posted: "54 minutes",
        by: "DanielD",
        comments: 12,
        link: "#"
    },
    {
        title: "Special title treatment",
        desc: "With supporting text below as a natural lead-in to additional content.",
        tags: ["AI", "Opinion", "Prediction"],
        posted: "54 minutes",
        by: "DanielD",
        comments: 12,
        link: "#"
    },
    {
        title: "Special title treatment",
        desc: "With supporting text below as a natural lead-in to additional content.",
        tags: ["AI", "Opinion", "Prediction"],
        posted: "54 minutes",
        by: "DanielD",
        comments: 12,
        link: "#"
    },
    {
        title: "Special title treatment",
        desc: "With supporting text below as a natural lead-in to additional content.",
        tags: ["AI", "Opinion", "Prediction"],
        posted: "54 minutes",
        by: "DanielD",
        comments: 12,
        link: "#"
    }
]

const testActiveDiscussionData = [
    {
        title: "Special title treatment active",
        desc: "With supporting text below as a natural lead-in to additional content.",
        tags: ["AI", "Opinion", "Prediction"],
        posted: "54 minutes",
        by: "DanielD",
        link: "#"
    },
    {
        title: "Special title treatment 2",
        desc: "With supporting text below as a natural lead-in to additional content.",
        tags: ["AI", "Opinion", "Prediction"],
        posted: "54 minutes",
        by: "DanielD",
        link: "#"
    },
    {
        title: "Special title treatment 2",
        desc: "With supporting text below as a natural lead-in to additional content.",
        tags: ["AI", "Opinion", "Prediction"],
        posted: "54 minutes",
        by: "DanielD",
        link: "#"
    },
]

function __loadDiscussions() {
    // will be replaced with API call
    let discussions = testDiscussionData;
    const discussionContainer = document.getElementById('discussion_container');

    if (!discussionContainer) {
        console.error("Discussion Container is not found");
        return;
    }

    discussions.forEach(discussionData => {
        const card = createDiscussionCard(discussionData, false);
        if (card) {
            discussionContainer.appendChild(card);
        }
    });
}

function __loadActiveDiscussions() {
    // will be replaced with API call
    let discussions = testActiveDiscussionData;
    const discussionContainer = document.getElementById('active_discussion_container');

    if (!discussionContainer) {
        console.error("Discussion Container is not found");
        return;
    }

    discussions.forEach(discussionData => {
        const token = createDiscussionToken(discussionData);
        if (token) {
            discussionContainer.appendChild(token);
        }
    });
}

function loadCommunityDiscussionData() {
    console.log("loading community discussion data ...");
    __loadDiscussions();
    __loadActiveDiscussions();
}

export { loadCommunityDiscussionData };