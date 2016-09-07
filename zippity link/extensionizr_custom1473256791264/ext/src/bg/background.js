// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


chrome.tabs.onCreated.addListener(function(tab) {         
    var url = tab.url;
    
    if (url != "chrome://newtab/") {
        chrome.tabs.update(tab.id, {url: "https://upload.wikimedia.org/wikipedia/en/3/39/Wakerlink.jpg"});
    }
});