let lastAuthHeader = '';

chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        for (let header of details.requestHeaders) {
            if (header.name.toLowerCase() === 'authorization') {
                lastAuthHeader = header.value;
                chrome.storage.local.set({lastAuthHeader: lastAuthHeader});
                break;
            }
        }
    },
    {urls: ["<all_urls>"]},
    ["requestHeaders"]
);

// Since a service worker must have some fetch handling logic,
// you might want to add a basic fetch event listener like below.
self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});
