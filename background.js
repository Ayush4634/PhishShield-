chrome.webNavigation.onCompleted.addListener((details) => {
  let tabId = details.tabId;

  chrome.tabs.get(tabId, function(tab) {
    if (tab && tab.url) {
      if (isSuspiciousURL(tab.url)) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["content.js"]
        });
      }
    }
  });
});

function isSuspiciousURL(url) {
  const keywords = ["login", "verify", "update", "secure", "bank"];
  let lowerUrl = url.toLowerCase();

  for (let keyword of keywords) {
    if (lowerUrl.includes(keyword)) {
      return true;
    }
  }
  return false;
}
