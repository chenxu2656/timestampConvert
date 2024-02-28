chrome.runtime.onInstalled.addListener(function() {
  console.log('Default background color set to %cgreen');
  chrome.contextMenus.create({
    id: "timestampToDatetime",
    title: "转换时间戳",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "timestampToDatetime" && info.selectionText) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: convertTimestamp,
      args: [info.selectionText]
    });
  }
});

