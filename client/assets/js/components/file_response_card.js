// assets/js/components/file_response_card.js

function createFileResponseSummaryCard(fileResponseData) {
    if (!fileResponseData) {
        console.warn("No data provided to create file response card.");
        return null;
    }

    const fileResponseCard = document.createElement("div");
    fileResponseCard.className = "card mb-3";
    fileResponseCard.style.backgroundColor = "#79AC78";

    const fileResponseCardHeader = `
        <div class="card-header">
            <h4>Question: ${fileResponseData.question}</h4>
            <h6>Responses: #${fileResponseData.quantity}</h6>
        </div>`;

    // Generate tabs
    const fileTypes = Object.keys(fileResponseData.responses);
    const tabs = fileTypes.map((type, index) => `
        <li class="nav-item">
            <a class="nav-link ${index === 0 ? 'active' : ''}" id="${type}-tab" data-bs-toggle="tab" href="#${type}-tab-content" role="tab" aria-controls="${type}" aria-selected="${index === 0}">
                ${type}
            </a>
        </li>
    `).join("");

    // Generate tab content
    const tabContents = fileTypes.map((type, index) => `
        <div class="tab-pane fade ${index === 0 ? 'show active' : ''}" id="${type}-tab-content" role="tabpanel" aria-labelledby="${type}-tab">
            <ul class="list-group custom-scrollbar" style="overflow-y: auto; max-height: 400px;">
                ${fileResponseData.responses[type].map(file => `
                    <li class="list-group-item list-group-item-custom">
                        ${file.name}
                        <a href="${file.url}" download="${file.name}" class="btn btn-sm btn-success float-end">Download</a>
                    </li>
                `).join("")}
            </ul>
        </div>
    `).join("");

    // Assemble the card body
    const fileResponseCardBody = `
        <div class="card-body my-3" style="min-height: 250px;">
            <ul class="nav nav-tabs" id="fileTabs" role="tablist">
                ${tabs}
            </ul>
            <div class="tab-content mt-3" style="max-height: 300px; overflow-y: auto;">
                ${tabContents}
            </div>
            <button class="btn btn-success mt-3" id="downloadAllFiles">Download All Files</button>
        </div>
    `;

    fileResponseCard.innerHTML = fileResponseCardHeader + fileResponseCardBody;

    // Attach event listener for "Download All Files" button
    const downloadAllButton = fileResponseCard.querySelector("#downloadAllFiles");
    downloadAllButton.addEventListener("click", async () => {
        const zip = new JSZip();
        const filePromises = [];
    
        fileTypes.forEach(type => {
            fileResponseData.responses[type].forEach(file => {
                const filePromise = fetch(file.url)
                    .then(response => {
                        if (!response.ok) throw new Error(`Failed to fetch ${file.name}`);
                        return response.blob();
                    })
                    .then(blob => {
                        zip.file(file.name, blob);
                    });
                filePromises.push(filePromise);
            });
        });
    
        try {
            await Promise.all(filePromises); // Wait for all fetches to complete
            const content = await zip.generateAsync({ type: "blob" });
            const zipUrl = URL.createObjectURL(content);
            const zipLink = document.createElement('a');
            zipLink.href = zipUrl;
            zipLink.download = "files.zip";
            document.body.appendChild(zipLink);
            zipLink.click();
            document.body.removeChild(zipLink);
            URL.revokeObjectURL(zipUrl);
        } catch (error) {
            console.error("Error generating ZIP file:", error);
        }
    });
    

    return fileResponseCard;
}

export { createFileResponseSummaryCard };