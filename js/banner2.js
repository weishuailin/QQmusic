var hotbanner = document.getElementById('hotbanner')
var hotbannerInner = document.getElementById('hotbannerInner');
var hotLeft = document.getElementById('hotLeft');
var hotRight = document.getElementById('hotRight');
var hotlist = document.getElementById('hotlist');
var hotlists = hotlist.getElementsByTagName('li');
var hotfocusList = document.getElementById('hotfocusList');
var hotfocus = hotfocusList.getElementsByTagName('a');

var step = 0;

function focusAlign(){
    var tempStep = step == focus.length ? 0 : step;
    for(var i=0; i<hotfocus.length; i++){
        hotfocus[i].className = i === tempStep ? 'curFoc' : '';
    }
}
hotLeft.onclick = function (){
    if(step<4){
        step++;
        animate(hotlist,{left : step*-1200},500);
        focusAlign();
    }


}

hotRight.onclick = function autoMove(){
    if(step==0){
        return;
    }


    step--;
    animate(hotlist,{left : step*-1200},500);
    focusAlign();





}

;(function bindEvent(){
    for(var i=0; i<hotfocus.length; i++){
        var curLi = hotfocus[i];
        curLi.index = i;
        curLi.onclick = function (){

            step = this.index;
            animate(hotlist, {left: step*-1200},500);
            focusAlign();
        }
    }
})();


