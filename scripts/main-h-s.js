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

function myFunctiona() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("expand1");
  var btnText = document.getElementById("rmBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionb() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("expand2");
  var btnText = document.getElementById("rmBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionc() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("expand3");
  var btnText = document.getElementById("rmBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctiond() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("expand4");
  var btnText = document.getElementById("rmBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}