chrome.webRequest.onBeforeRequest.addListener(function(details) {
  // 这里根据实际的广告请求 URL 来拦截广告
  if (details.url.includes("ad") || details.url.includes("advertise") || details.url.includes("ads")) {
    console.log("Blocking ad request: ", details.url); // Debug log
    return { cancel: true };  // 阻止广告请求
  }
}, { urls: ["*://*.jd.com/*"] }, ["blocking"]);