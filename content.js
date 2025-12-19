// 等待页面加载完成后执行广告移除
window.addEventListener('load', () => {
    // 查找并移除开屏广告
    const adElement = document.querySelector('.splash-screen');  // 根据实际的广告元素类名
    if (adElement) {
        adElement.style.display = 'none';  // 隐藏广告
    }
    console.log("JD Express splash ad removed.");
});