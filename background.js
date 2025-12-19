chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // 在这里通过正则匹配广告的请求并取消它
    if (details.url.indexOf('https://jd.com/ad') !== -1) {
      return { cancel: true }; // 取消广告请求
    }
    return {};
  },
  { urls: ["*://*.jd.com/*"] }, // 监听所有JD的URL
  ["blocking"]
);