
window.onload = function () {//加载网页
    var topbtn = document.getElementById('gotop');//获取a标记
    var timer = null;
    topbtn.onclick = function () {//设置监听事件
        timer = setInterval(function () {
            var backtop = document.body.scrollTop;
            var speedtop = backtop/5;
            document.body.scrollTop = backtop -speedtop;
            if(backtop ==0){
                clearInterval(timer);
            }
        }, 30);
    }
}