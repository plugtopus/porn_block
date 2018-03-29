
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.method == 'blockAccess') {
        chrome.browserAction.setIcon({
            path: chrome.extension.getURL("/icons/128.png")
        });
        sendResponse({
            status: true
        });
    }
    if (message.method == 'changeIconDefault') {
        console.log('changeIconDefault')
        chrome.browserAction.setIcon({
            path: chrome.extension.getURL("/icons/128.png")
        });
        sendResponse({
            status: true
        });
    }
});
