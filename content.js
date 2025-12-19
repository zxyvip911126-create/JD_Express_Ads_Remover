window.addEventListener('load', function () {
  // 假设广告元素有类名 'ad-banner'，你可以根据实际情况修改
  const adElement = document.querySelector('.ad-banner');
  if (adElement) {
    adElement.style.display = 'none';  // 隐藏广告
    console.log("Ad element removed");
  }
});