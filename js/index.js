var banner = document.getElementById('banner')
var bannerInner = document.getElementById('bannerInner');
var slideLeft = document.getElementById('slideLeft');
var slideRight = document.getElementById('slideRight');
var list = document.getElementById('list');
var lists = list.getElementsByTagName('li');
var focusList = document.getElementById('focusList');
var focus = focusList.getElementsByTagName('a');

var step = 0;

function focusAlign(){
    var tempStep = step == focus.length ? 0 : step;
    for(var i=0; i<focus.length; i++){
        focus[i].className = i === tempStep ? 'curFoc' : '';
    }
}
slideLeft.onclick = function (){
      if(step<4){
          step++;
          animate(list,{left : step*-1200},500);
          focusAlign();
      }


}

slideRight.onclick = function autoMove(){
         if(step==0){
             return;
         }


        step--;
          animate(list,{left : step*-1200},500);
          focusAlign();





}

;(function bindEvent(){
    for(var i=0; i<focus.length; i++){
        var curLi = focus[i];
        curLi.index = i;
        curLi.onclick = function (){

            step = this.index;
            animate(list, {left: step*-1200},500);
            focusAlign();
        }
    }
})();


