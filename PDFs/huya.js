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
    clearInterval(timer);
  }
}, 300);
