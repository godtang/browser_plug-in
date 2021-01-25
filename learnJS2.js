// ==UserScript==
// @name         去除百度搜索广告
// @namespace    https://github.com/godtang/browser_plug-in.git
// @version      0.21
// @description  去除百度搜索推广、广告，原作者是大雄、小虾吃大虾
// @author       godtang
// @match        http*://*.baidu.com/*
// @grant        none
// ==/UserScript==

$(function () {
    ///页面加载完成后，500毫秒调用去除广告
    setTimeout(function () {
        startAD();
    }, 500);
});

function startAD() {
    ///每500毫秒执行一次去除广告
    setInterval(function () {
        ///百度经验底部广告
        $('.EC_result').remove();

        ///热榜
        if (document.querySelector('#con-ar > div > div > div')) {
            document.querySelector('#con-ar > div > div > div').remove();
        }

        ///右侧广告
        if (document.querySelector('#zsyx_im0')) {
            if (4 == document.querySelector('#zsyx_im0').childElementCount) {
                if ("广告" == document.querySelector('#zsyx_im0').children[3].innerText) {
                    document.querySelector('#zsyx_im0').remove();
                }
            }
        }


        ///百度搜索界面广告
        var container = document.getElementById('content_left');
        if (container) {
            Array.from(container.children).forEach(function (item) {
                if (item && /display:block\s+!important;visibility:visible\s+!important/i.test(item.getAttribute('style'))) {
                    $(item).fadeTo("fast", 0.01, function () {
                        $(item).slideUp("normal", function () {
                            $(item).remove();
                        });
                    });
                }
                if ($(item).find('span').text() == "广告") {
                    $(item).fadeTo("fast", 0.01, function () {
                        $(item).slideUp("normal", function () {
                            $(item).remove();
                        });
                    });
                }

            }, container);
        }
    }, 500);
}