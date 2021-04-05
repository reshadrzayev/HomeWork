function prev(){
    // document.getElementById('img1').style.transition='all 1s';

    document.getElementById('img1').style.display='block';

}
function prevOut(){
    // document.getElementById('nn').style.width='auto';
    document.getElementById('img1').style.display='none';

}
function next(){
    // document.getElementById('img2').style.transition='all 1s';

    document.getElementById('img2').style.display='block';

}
function nextOut(){
    document.getElementById('img2').style.display='none';

}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nvbr").style.top = "0";

  } else {
    document.getElementById("nvbr").style.top = "-57px";

}
  prevScrollpos = currentScrollPos;
}
