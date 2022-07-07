$("#loginButton").click(function () {
  $("#loginModal").modal("show");
});

$("#reserveButton").click(function () {
  $("#reserveModal").modal("show");
});
//
function toggleResetPswd(e) {
  e.preventDefault();
  $("#logreg-forms .form-signin").toggle();
  $("#logreg-forms .form-reset").toggle();
}

function toggleSignUp(e) {
  e.preventDefault();
  $("#logreg-forms .form-signin").toggle();
  $("#logreg-forms .form-signup").toggle();
}

$(() => {
  // Login Register Form
  $("#logreg-forms #forgot_pswd").click(toggleResetPswd);
  $("#logreg-forms #cancel_reset").click(toggleResetPswd);
  $("#logreg-forms #btn-signup").click(toggleSignUp);
  $("#logreg-forms #cancel_signup").click(toggleSignUp);
});

var password = document.getElementById("password"),
  confirm_password = document.getElementById("repeatpw");

function validatePassword() {
  if (password.value != repeatpw.value) {
    repeatpw.setCustomValidity("Passwords Don't Match");
  } else {
    repeatpw.setCustomValidity("");
  }
}

password.onchange = validatePassword;
repeatpw.onkeyup = validatePassword;
