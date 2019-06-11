chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onActivated.addListener(function() {
        chrome.tabs.query(function(tabs) {
            var currTab = tabs[0];
            if (currTab) { 
                console.log(currTab.title)
            }
          });
    });
});