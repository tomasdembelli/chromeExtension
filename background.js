chrome.runtime.onInstalled.addListener(function() {
    window.tabList = []
    chrome.tabs.onActivated.addListener(function() {
        console.log('previous tab:', window.tabList.pop());
        chrome.tabs.query({highlighted: true, currentWindow: true}, function(tabs) {
            var currTab = tabs[0];
            if (currTab) { 
                console.log('current tab: ', currTab.title, currTab.id)
                var lastTab = [currTab.title, currTab.id]
                window.tabList.push(lastTab)
            }
          });
    });
});