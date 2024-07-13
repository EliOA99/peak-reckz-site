function validate() { 
let fname = 
    document.getElementById("fname").value;
let sname = 
    document.getElementById("sname").value; 
let subject =
    document.getElementById("subject")
let email = 
    document.getElementById("emadd").value; 
let message = 
    document.getElementById("message").value; 
let error_message = 
    document.getElementById("error_message"); 
  
error_message.style.padding = "10px"; 
  
let errors = [];

if (fname.length <= 3) { //error message if your first name contains 3 or less characters//
    errors.push("Please Enter a valid Name");}
if (sname.length <= 3) { //error message if your surname contains 3 or less characters//
    errors.push("Please Enter a valid Surname");}
if (subject.length < 1) { //error message if subject character count is below one.
    errors.push("Please Enter a Subject");} 
if (email.indexOf("@") == -1 || email.length <= 0) { //error if email doesn't have an @
    errors.push( 
        "Please Enter a valid Email Address");} 
if (message.length <= 30) { //error if your message contains 30 or less characters total//
    errors.push( 
        "Please Enter More Than 30 Characters");} 

if (errors.length > 0) { 
    error_message.innerHTML = 
        errors.join("<br>"); 
    return false;} 
else { 
    alert( 
        "Form successfully sent!"); 
    return true;}}

//18+ Warning for Horror/Supernatural on button menu
var elems = document.getElementsByClassName('horrs');
var confirmIt = function (e) {
if (!confirm('Please be aware that by clicking "okay", you confirm that you are aged 18+')) e.preventDefault();
};
for (var i = 0, l = elems.length; i < l; i++) {
elems[i].addEventListener('click', confirmIt, false);
}