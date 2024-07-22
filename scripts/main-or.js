//18+ Warning for Horror/Supernatural on article
var elems = document.getElementsByClassName('a6');
var confirmIt = function (e) {
if (!confirm('Please be aware that by clicking "okay", you confirm that you are aged 18+')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
elems[i].addEventListener('click', confirmIt, false);
}

//18+ Warning for Horror/Supernatural on button menu
var elems = document.getElementsByClassName('horrs');
var confirmIt = function (e) {
if (!confirm('Please be aware that by clicking "okay", you confirm that you are aged 18+')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
elems[i].addEventListener('click', confirmIt, false);
}

//Back to top button Javascript
let mybutton = document.getElementById("BTTBtn");

// Triggers when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrtopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}