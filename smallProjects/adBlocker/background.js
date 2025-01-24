chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        console.log("details > ",details); // all requests
        // return {cancel:true} // blocks all requests everywhere
    },
    // {urls:["*://*.google.com"]},  // filter which sites apply  
    // ["blocking"]
)
