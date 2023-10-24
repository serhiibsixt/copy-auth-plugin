document.getElementById('getHeader').addEventListener('click', () => {
    chrome.storage.local.get('lastAuthHeader', async (data) => {
        await navigator.clipboard.writeText(data.lastAuthHeader);
        const button = document.getElementById('getHeader');
        button.innerText = "Copied!";
        button.classList.add('copied');
    });
});
