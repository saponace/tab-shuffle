// Handle extension icon click
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        // Shuffle the tabs array
        shuffle(tabs);

        // For each tab in random order (iteration over shuffled array), set its position to 0
        tabs.forEach(function (t) {
            chrome.tabs.move(t.id, {index: 0});
        });
        notify("Lolilol, tabs shuffled")
    });
});


/**
 * Create a notification
 * @param message The body of the notification
 */
function notify(message) {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "images/tab-shuffle-64.png",
        title: "Tab shuffle",
        message: message
    })
}

/**
 * Shuffles array in place.
 * @param {Array} a items array that should be shuffled
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
