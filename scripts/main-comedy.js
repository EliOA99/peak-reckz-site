//toggle code for hiding and showing information on relevant page
function myFunction1() {
document.getElementById("myInfo1").classList.toggle("infoHide1");  
}

function myFunction2() {
document.getElementById("myInfo2").classList.toggle("infoHide2");  
}

function myFunction3() {
document.getElementById("myInfo3").classList.toggle("infoHide3");  
}

function myFunction4() {
document.getElementById("myInfo4").classList.toggle("infoHide4");  
}

var elems = document.getElementsByClassName('horrs');
var confirmIt = function (e) {
if (!confirm('Please be aware that by clicking "okay", you confirm that you are aged 18+')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
elems[i].addEventListener('click', confirmIt, false);
}