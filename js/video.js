/*
 * @Author: your name
 * @Date: 2020-10-08 18:18:17
 * @LastEditTime: 2020-10-08 18:40:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \04-jq-ajaxd:\AAA\VS_project\移动端\央视\js\video.js
 */

var video = document.getElementsByTagName('video')[0];


video.addEventListener('canplay', function () {
    /* 点击播放暂停 */
    touch.on($('.mycon').find('ul').find('li').first(), 'tap', function () {
        if ($(this).attr('class') == 'play') {
            video.play();
            $(this).toggleClass('play pause');
        } else {
            video.pause();
            $(this).toggleClass('play pause');
        }
    })

    /* 视频的时间 */
    video.addEventListener('timeupdate', function () {
        //已播放的时长
        $('.s_time').text(changetime(video.currentTime));
        //进度条的位置
        var jdt_w = (video.currentTime / video.duration) * 100;
        $('.s_jdt').css('width', jdt_w + '%')
        //小球的位置
        $('.boll').css('left', jdt_w + 'rem')
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        };
    });
    /* 视频的总时间 */
    $('.e_time').text(changetime(video.duration));

   
  
})

 
//  //鼠标点击改变进度条
//  $('.jdt').on('touchstart',changejdt);
//  function changejdt(e){
//      e = e || window.event;
//      var maxwidth = $(this).outerWidth(); //进度条的宽度397.5
//      var clickX=e.originalEvent.touches[0].clientX; //触摸的位置
//      var screenX=e.originalEvent.touches[0].screenX;//触摸在屏幕中的位置
//      var clickleft=$('.jdt').find('img').offset().left; //进度条距离左边的位置

//      console.log(e)
//      console.log(maxwidth,clickX,screenX ,clickleft);
  
//      video.currentTime = ((screenX-clickleft)/ maxwidth) * 100;
//  }


//改变时间
function changetime(t) {
    var m = Math.floor(t / 60);
    m < 10 ? m = '0' + m : m;
    var s = Math.floor(t % 60);
    s < 10 ? s = '0' + s : s;
    return m + ":" + s;
};

/* 点击分享 */
touch.on($('#share'),'tap',function(){
  
    if($('.share').css('display')=='none'){
        $('.share').show();
    }else{
        $('.share').hide();
    }
   
})