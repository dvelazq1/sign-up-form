var phoneNum = document.getElementById("phoneNum")
const phoneError = document.querySelector('#tel-error');
phoneNum.addEventListener("input", function (event) {
    if (phoneNum.validity.patternMismatch) {
        phoneNum.setCustomValidity("Phone number must be 10 digits long");
    } else {
        phoneNum.setCustomValidity('');
    }     
  }); 

var password = document.getElementById("password"),
confirmPassword = document.getElementById("confirmPassword")

function validatePassword() {
    if (password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("Passwords Don't Match");
    } else{
        confirmPassword.setCustomValidity("");
    } 
    }
password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;


