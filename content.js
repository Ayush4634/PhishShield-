// content.js

const phishingKeywords = ["login", "secure", "verify", "bank", "account"];
const suspiciousDomains = ["free-gift.com", "secure-login.net", "bank-verification.xyz"];

const currentURL = window.location.href;
const hostname = window.location.hostname.toLowerCase();

let isSuspicious = false;

// Check for suspicious keywords in the URL
phishingKeywords.forEach(keyword => {
    if (currentURL.toLowerCase().includes(keyword)) {
        isSuspicious = true;
    }
});

// Check for known suspicious domains
suspiciousDomains.forEach(domain => {
    if (hostname.includes(domain)) {
        isSuspicious = true;
    }
});

// Only alert the user if a match is found
if (isSuspicious) {
    alert("⚠️ PhishShield Warning:\nThis page may be suspicious!");
}
