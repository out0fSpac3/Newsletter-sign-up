"use strict";

const errorMessage = document.querySelector(".error-message");
const errorMessageField = document.querySelector(".input-box");
const subscribeBtn = document.querySelector(".subscribe-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const newEmailAddress = document.querySelector(".email-address");
const confirmationSuccess = document.querySelector(".success-message-window");
const signUpForm = document.querySelector(".main-container");

function validateEmail() {
  if (!errorMessageField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    errorMessage.innerHTML = "Valid email required";
    errorMessage.style.color = "red";
    errorMessageField.style.backgroundColor = "pink";
    errorMessageField.style.color = "red";
    errorMessageField.style.borderColor = "red";
    return false;
  } else {
      signUpForm.style.display = "none";
      confirmationSuccess.style.display = "block";
      newEmailAddress.innerHTML = errorMessageField.value;
  }
}

subscribeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  validateEmail();
});

dismissBtn.addEventListener("click", function (event) {
    event.preventDefault();
    location.reload();
})