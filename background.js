chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // 这里的条件根据广告的URL进行判断，如果是广告的请求就拦截
    if (details.url.includes("ad") || details.url.includes("advertise")) {
      console.log("Blocking ad request: ", details.url); // Debug log
      return { cancel: true };  // 阻止广告请求
    }
  },
  { urls: ["*://*.jd.com/*"] },  // 只拦截来自京东的请求
  ["blocking"]
);