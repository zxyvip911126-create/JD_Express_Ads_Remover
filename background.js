// background.js

// 拦截广告请求
const blockAds = (details) => {
  const url = details.url;

  // 检查是否是京东广告请求
  if (url.match(/https:\/\/(ads|advertise)\.jd\.com/)) {
    console.log('Blocked an ad: ', url);
    return { cancel: true };  // 拦截广告
  }

  return { cancel: false }; // 不拦截其他请求
};

// 监听请求
chrome.webRequest.onBeforeRequest.addListener(
  blockAds,
  { urls: ["<all_urls>"] },
  ["blocking"]
);