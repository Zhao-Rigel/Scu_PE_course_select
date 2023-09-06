// ==UserScript==
// @name         选课
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  体育自动选课
// @author       Rigel
// @match        http://211.83.159.5:81/selectCourse
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var _alert=window.alert;
    window.alert=function(){
        return true;
    }
    var _comfirm=window.comfirm;
    window.comfirm=function(){
        return true;
    }
    setTimeout(work,500);
    function work()
    {
        var y = document.querySelectorAll("div.courseClassCell > div.cell > button");
        console.log(y.length);
        if(y.length<10)
        {
            location.reload();
            return;
        }
        y[11].click();
        console.log('click suceess');
    }

})();
