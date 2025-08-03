chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  let url = tabs[0].url;
  let statusEl = document.getElementById("status");

  if (isSuspiciousURL(url)) {
    statusEl.textContent = "⚠️ This page may be suspicious!";
    statusEl.className = "warning";
  } else {
    statusEl.textContent = "✅ This page appears safe.";
    statusEl.className = "safe";
  }
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
