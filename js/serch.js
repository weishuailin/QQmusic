var wrap = document.getElementById('wrap');
var input = wrap.getElementsByTagName('input')[0];
var ul = wrap.getElementsByTagName('ul')[0];
var lis = ul.getElementsByTagName('li');
input.onfocus = fn;
input.onkeyup = fn;
function fn(){
    var reg = /^\s*$/;
    if(reg.test(this.value)){
        ul.style.display = 'none';
        return;
    }
    ul.style.display = 'block';
}
ul.onclick = function (e){
    e = e || window.event;
    e.target = e.target || e.srcElement;
    if(e.target.nodeName == 'I'){
        input.value = e.target.innerText;
        this.style.display = 'none';
    }
}
