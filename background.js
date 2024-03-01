chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "timestampToDatetime",
    title: "timestamp converter ",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "timestampToDatetime" && info.selectionText) {
    console.log(info.selectionText);
    chrome.tabs.sendMessage(tab.id, {text: "convertTimestamp", timestamp: info.selectionText});
  }
});

