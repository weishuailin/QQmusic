var toplink =document.getElementById('toplink');
var timer = null;
var duration = 1000;
var speed = null;
toplink.onclick = function(){
    window.clearInterval(timer);
    timer = window.setInterval(function (){
        var curScrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        speed = curScrollTop/duration*30;
        if(curScrollTop <= 0){
            window.clearInterval(timer);
            window.onscroll = showBtn;
        }
        curScrollTop -= speed;
        document.documentElement.scrollTop = curScrollTop;
        document.body.scrollTop = curScrollTop;
    },10);
    this.style.display = 'none';
    window.onscroll = null;
}
var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
window.onscroll = showBtn;
function showBtn(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > winHeight){
        toplink.style.display = 'block';
    }else{
        toplink.style.display = 'none';
    }
}