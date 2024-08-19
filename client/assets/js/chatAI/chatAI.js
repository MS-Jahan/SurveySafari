function addMessage(sender, text) {
    var chatbox = document.getElementById('chatbox');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    var contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    contentDiv.textContent = text;
    messageDiv.appendChild(contentDiv);
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to the bottom
}

document.getElementById('chatbox-send').addEventListener('click', function () {
    var input = document.getElementById('chatbox-input');
    var message = input.value.trim();
    if (message) {
        addMessage('user', message);
        input.value = '';
        // Simulate bot response
        setTimeout(function () {
            addMessage('bot', 'This is a bot response.');
        }, 1000);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const offcanvas = document.getElementById('offcanvasBottom');
    const resizer = offcanvas.querySelector('.resizer');
    let isResizing = false;
    let startY;
    let startHeight;

    const startResizing = function (e) {
        isResizing = true;
        startY = e.touches ? e.touches[0].clientY : e.clientY; // Support for touch and mouse
        startHeight = parseInt(window.getComputedStyle(offcanvas).height, 10);
        document.body.style.cursor = 'ns-resize';
        document.body.style.userSelect = 'none'; // Prevent text selection
    };

    const resize = function (e) {
        if (!isResizing) return;
        const currentY = e.touches ? e.touches[0].clientY : e.clientY; // Support for touch and mouse
        const height = startHeight - (currentY - startY);
        offcanvas.style.height = `${height}px`;
    };

    const stopResizing = function () {
        isResizing = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = ''; // Restore text selection
    };

    // Mouse events
    resizer.addEventListener('mousedown', startResizing);
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResizing);

    // Touch events
    resizer.addEventListener('touchstart', startResizing);
    document.addEventListener('touchmove', resize);
    document.addEventListener('touchend', stopResizing);
});