// ==UserScript==
// @name         不显示必应的聊天机器人
// @namespace    https://github.com/godtang/browser_plug-in.git
// @version      0.1
// @description  登陆之后必应国际版的聊天机器人很烦
// @author       godtang
// @match        https://*.bing.com/search*
// @grant        none
// ==/UserScript==

(function () {
    ///页面加载完成后，500毫秒调用去除广告
    setTimeout(function () {
        startAD();
    }, 1000);
})();

function startAD() {
    ///每500毫秒执行一次去除广告
    setInterval(function () {
        ///聊天机器人窗口
        try {
            if (null === window.parent.document.querySelector("#ev_talkbox_wrapper")) {
            }
            else {
                window.parent.document.querySelector("#ev_talkbox_wrapper").remove();
            }
        }
        catch (err) {
            console.log(err); // 可执行
        }

    }, 1000);
}

