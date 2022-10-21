$("#form").submit(function (event) {
  event.preventDefault();
});
function checkFunction() {
  setTimeout(function () {
    window.location.reload();
  }, 3000);
  var firstPassword = document.getElementById("Password1").value;
  var secondPassword = document.getElementById("Password2").value;
  var alertText = document.getElementById("text-alert");
  if (firstPassword === "" || secondPassword === "") {
    alertText.innerHTML = "Password can't be empty!";
    $('#Password2').css('border','2px solid red');
  } else if (firstPassword.length < 8 || secondPassword.length < 8) {
    alertText.innerHTML = "Password length less than 8!";
    $('#Password2').css('border','2px solid red');
  } else if (/[^a-zA-Z]/.test(firstPassword)) {
    alertText.innerHTML = "Please enter only alphabets!";
    $('#Password2').css('border','2px solid red');
  } else if (firstPassword !== secondPassword) {
    alertText.innerHTML = "Passwords do not match!";
    $('#Password2').css('border','2px solid red');
  } else {
    var mainHeading = document.getElementById("main-heading");
    mainHeading.innerHTML = "Password Changed";
    var buttonText = document.getElementById("button-text");
    buttonText.innerHTML = "JOIN A RACE";
    var textMessage = document.getElementById("text-message");
    textMessage.innerHTML =
      "Your password has been updated! Now get back in the driver seat, racers are waiting for you!";

    var firstPasswordDi = document.getElementById("Password1");
    var secondPasswordDi = document.getElementById("Password2");
    var textHeading = document.querySelectorAll("#text-heading");
    firstPasswordDi.style.display = "none";
    secondPasswordDi.style.display = "none";
    textHeading[0].style.display = "none";
    textHeading[1].style.display = "none";
    textHeading[2].style.display = "none";
    var buttonChange = document.getElementById("buttonChange");
    buttonChange.style.marginTop = "2rem";
  }
}
