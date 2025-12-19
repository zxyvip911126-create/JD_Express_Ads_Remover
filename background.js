chrome.webNavigation.onCompleted.addListener(function(details) {
  // 执行广告隐藏代码
  chrome.tabs.executeScript(details.tabId, {
    code: `
      // 替换为正确的广告选择器
      const adElement = document.querySelector('.splash-ad');  // 需要替换为京东快递广告的选择器
      if (adElement) {
        adElement.style.display = 'none';  // 隐藏广告
      }
    `
  });
}, {url: [{urlMatches: 'https://www.jd.com/*'}, {urlMatches: 'https://m.jd.com/*'}]});