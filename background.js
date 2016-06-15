chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({url: "*://*.youtube.com/*"}, function(tabs){
    console.log(tabs);
    for(var i = 0; i < tabs.length; i++){
      chrome.tabs.executeScript(tabs[i].id, {"file":"toggle.js"});
    }
  });
});
