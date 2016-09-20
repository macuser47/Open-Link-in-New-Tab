// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var id;

chrome.tabs.onCreated.addListener(function(tab) {         
    var url = tab.url;
    id = tab.id;
    
    if (url != "chrome://newtab/") {
        chrome.storage.sync.get("linkUrl", function(value) {
            chrome.tabs.update(id, {url: value.linkUrl});
        });
    }
});





//firstrun

chrome.runtime.onInstalled.addListener( function(details){
    chrome.storage.sync.set( { "linkUrl":"https://upload.wikimedia.org/wikipedia/en/3/39/Wakerlink.jpg" } );
});