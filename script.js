var phoneNum = document.getElementById("phoneNum").value;

function validatePhoneNum() {
    if (phoneNum.length !== 10) {
        return false;
    }
}

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

