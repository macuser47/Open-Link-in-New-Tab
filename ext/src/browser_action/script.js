var linkAssoc = {
    "Link_1":"https://upload.wikimedia.org/wikipedia/en/3/39/Wakerlink.jpg",
    "Link_2":"https://egotistsclub.files.wordpress.com/2012/03/link-tp.jpg",
    "Link_3":"http://img1.wikia.nocookie.net/__cb20120505155206/fantendo/pt/images/5/59/Tp-link_epona.jpg",
    "Link_4":"https://i.ytimg.com/vi/0xZUiAAQxnE/hqdefault.jpg"
};

$(document).ready( function() {
    
    syncImage();
    
    syncSelect();
    
    //handle image changes
    $("#imgSelect").change( function() {
        chrome.storage.sync.set( { "linkUrl":linkAssoc[ $("#imgSelect").val() ] }, syncImage );
    });
    
});


    
function syncImage() {
    //get link img
    chrome.storage.sync.get("linkUrl", function(value) {
        //alert(value.linkUrl);
        $("#preview").attr("src", value.linkUrl);
        
        //set to default link if undefined
        if (value.linkUrl == null) {
            $("#preview").attr("src", linkAssoc["Link_1"]);
            chrome.storage.sync.set( { "linkUrl":linkAssoc["Link_1"] } );
        }
    });
}

function syncSelect() {
    //sync imgSelect
    
    chrome.storage.sync.get("linkUrl", function(value) {
        var linkVal = "custom"; //default value if not found
        
        for (var i = 0; i < Object.keys(linkAssoc).length; i++) {
            if (linkAssoc[Object.keys(linkAssoc)[i]] == value.linkUrl) {
                linkVal = Object.keys(linkAssoc)[i];
                break;
            }
        }
        
        $("#imgSelect").val(linkVal);
    });
}