/**
 * Created by lenovo on 2016/10/10.
 */
window.addEventListener('load', function () {
    // 在窗体载入完毕后再绑定
    var CM = new CommentManager(document.getElementById('player'));
    CM.init();
    // 先启用弹幕播放（之后可以停止）
    CM.start();
    // 开放 CM 对象到全局这样就可以在 console 终端里操控
    window.CM = CM;

    var socket = io();
    socket.on('danmaku show', function (msg) {
        console.log(msg);
        var danmaku = JSON.parse(msg);
        CM.send(danmaku);
    });
});