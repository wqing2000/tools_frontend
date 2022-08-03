// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://appewiejl9g3764.h5.xiaoeknow.com/p/course/content/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xiaoeknow.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let timer = null;

  function fn() {
    const $layout = document.querySelector(".content-detail_page_layout");
    const $videoWrapper = document.querySelector(".video_out_wrapper");
    console.log("start script---");
    if (!$layout || !$videoWrapper) {
      timer = setTimeout(fn, 500);
    } else {
      timer && clearTimeout(timer);
      $layout.style.maxWidth = "none";
      $videoWrapper.style.maxWidth = "none";
      setVideo();
    }
  }

  function setVideo() {
    const $videoWrapper = document.querySelector("#xe_video");
    if (!$videoWrapper.classList.contains("xgplayer-playing")) {
      //  播放按钮
      const $play = document.querySelector(".xgplayer-icon-play");

      //  切换到1080p
      const $1080p = document.querySelector(
        "#xe_video > xe-dialog:nth-child(12) > div.list > div > div:nth-child(2) > div"
      );

      const $video = document.querySelector("#xe_video video");
      if ($video && $video.readyState === 4) {
        timer = null;
        // 谷歌浏览器安全策略，不允许自动播放
        // $play.click();
        $1080p.click();
      } else {
        timer = setTimeout(setVideo, 500);
      }
    }
  }

  // Your code here...
  if (location.hostname.includes("xiaoeknow.com")) {
    fn();
  }
})();
