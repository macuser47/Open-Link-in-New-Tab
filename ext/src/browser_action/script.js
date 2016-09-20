var linkAssoc = {
    "Link_1":"https://upload.wikimedia.org/wikipedia/en/3/39/Wakerlink.jpg",
    "Link_2":"https://egotistsclub.files.wordpress.com/2012/03/link-tp.jpg",
    "Link_3":"http://img1.wikia.nocookie.net/__cb20120505155206/fantendo/pt/images/5/59/Tp-link_epona.jpg",
    "Link_4":"https://i.ytimg.com/vi/0xZUiAAQxnE/hqdefault.jpg",
    "Link_5":"http://orig06.deviantart.net/6e43/f/2012/274/f/0/chibi_link_animated_by_timtam13-d5gfxac.gif",
    "Link_6": "http://www.negativeworld.org/images/content/353/WW_surprise.jpg",
    "Link_7": "http://orig13.deviantart.net/a63f/f/2008/077/3/6/toon_link_funny_by_spikex.jpg",
    "Link_8": "http://img-cache.cdn.gaiaonline.com/669da4b8ef4cb665f50a570b230d84c8/http://i246.photobucket.com/albums/gg85/MAZZ0Murder/83107810.jpg",
    "Link_9":"https://i.ytimg.com/vi/FKbTGNhmQ08/maxresdefault.jpg",
    "Link_10":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/102dd2e4b60fa9b6fdbc9b9123ff2a9b514aeecd_full.jpg",
    "Link_11":"http://img13.deviantart.net/5c36/i/2012/220/5/0/link_derp_by_psychotic_teddybears-d5ac5b5.jpg",
    "Link_12":"https://cdn.scratch.mit.edu/static/site/projects/thumbnails/1768/4908.png",
    "Link_13":"http://static.giantbomb.com/uploads/scale_super/14/141684/2580349-1760582079-WW-Li.jpg",
    "Link_14":"http://ct.fra.bz/ol/fz/sw/i49/5/5/7/frabz-Triforce-of-HERP-DERP-34afe9.jpg",
    "Link_15":"http://orig12.deviantart.net/acf9/f/2008/251/1/e/link_raep_face_by_linkrapefaceplz.png",
    "Link_16":"https://i.ytimg.com/vi/kwAxYlW1h_k/maxresdefault.jpg"
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