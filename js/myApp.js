$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#startchange");
  var offset = startchange.offset();
  $(document).scroll(function () {
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top) {
      $("#navbar").css("background-color", "#f8f9fa");
    } else {
      $("#navbar").css("background-color", "transparent");
    }
  });
});
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
