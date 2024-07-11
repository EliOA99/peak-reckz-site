var elems = document.getElementsByClassName('a6');
var confirmIt = function (e) {
if (!confirm('Please be aware that by clicking "okay", you confirm that you are aged 18+')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
elems[i].addEventListener('click', confirmIt, false);
}

var elems = document.getElementsByClassName('horrs');
var confirmIt = function (e) {
if (!confirm('Please be aware that by clicking "okay", you confirm that you are aged 18+')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
elems[i].addEventListener('click', confirmIt, false);
}