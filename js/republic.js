/*
 * @Author: your name
 * @Date: 2020-09-28 11:16:30
 * @LastEditTime: 2020-10-07 16:24:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \04-jq-ajaxd:\AAA\VS_project\移动端\央视\js\republic.js
 */
window.onload = function () {
  function setRem() {
    var ui = 640;
    var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (winWidth >= 375) {
      document.documentElement.style.fontSize = (winWidth / ui) * 100 + 'px';
    } else {
      document.documentElement.style.fontSize = (375 / ui) * 100 + 'px';
    }
  }
  setRem();
  window.onresize = setRem;
}