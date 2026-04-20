// ==UserScript==
// @name         虎牙解除限制（最终终极版）
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://www.huya.com/*
// @grant        unsafeWindow
// @run-at       document-end
// @noframes
// ==/UserScript==

console.log("✅ 脚本启动");

// 核心：用 unsafeWindow 获取虎牙页面 真实的 document 和 jQuery
const realDocument = unsafeWindow.document;
const $ = unsafeWindow.$;

const timer = setInterval(() => {
  // 用 真实的document 查询元素
  const el = realDocument.querySelector(".player-videotype-list li");

  if (el && $) {
    $(el).data("data").status = 9;
    console.log("✅ 限制解除成功！！！");
    // 底部自动消失Toast提示
      let toast = realDocument.createElement('div');
      toast.innerText = '✅ 画质限制解除成功！！！';
      toast.style.cssText = `
    position:fixed;top:50px;left:50%;transform:translate(-50%,-50%);
    padding:12px 24px;background:rgba(0,0,0,0.7);color:white;
    border-radius:6px;z-index:9999;
`;
      realDocument.body.appendChild(toast);
      setTimeout(()=>toast.remove(),2500);

    clearInterval(timer);
  }
}, 300);
