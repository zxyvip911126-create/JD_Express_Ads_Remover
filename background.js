chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.url.includes("京东广告")) {
            return { cancel: true };  // 阻止广告请求
        }
    },
    { urls: ["*://*.jd.com/*"] },
    ["blocking"]
);