// ==UserScript==
// @name         不显示必应的聊天机器人
// @namespace    https://github.com/godtang/browser_plug-in.git
// @version      0.1
// @description  登陆之后必应国际版的聊天机器人很烦
// @author       godtang
// @match        https://*.bing.com/search*
// @grant        none
// ==/UserScript==

var noChatboxTimes = 0;

(function () {
    ///页面加载完成后，1000毫秒调用去除聊天框
    setTimeout(function () {
        removeChatbox();
    }, 1000);
})();

function removeChatbox() {
    ///聊天机器人窗口
    try {
        if (null === window.parent.document.querySelector("#ev_talkbox_wrapper")) {
            noChatboxTimes++;
        }
        else {
            window.parent.document.querySelector("#ev_talkbox_wrapper").remove();
        }
        if (noChatboxTimes < 5) {
            setTimeout(function () {
                removeChatbox();
            }, 1000);
        }
        else {
            // 超过5次都没有找到聊天框，不再启动
            console.log("超过5次都没有找到聊天框，不再启动");
        }
    }
    catch (err) {
        // 异常的话不再启动
        console.log(err); // 可执行
    }
}


