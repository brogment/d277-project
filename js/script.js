"use strict";

const form = document.getElementById("my-form");
const email = document.getElementById("email");
const emailTwo = document.getElementById("email-two");
const message = document.getElementById("message");


email.addEventListener("input", (event) => {
  if (email.value !== emailTwo.value) {
    message.textContent = "Make sure your email addresses match";
    message.style.color = "red";
  } else {
    message.textContent = "";
  }
});

emailTwo.addEventListener("input", (event) => {
  if (email.value !== emailTwo.value) {
    message.textContent = "Make sure your email addresses match";
    message.style.color = "red";
  } else {
    message.textContent = "";
  }
});

form.addEventListener("submit", function (event) {
    if (email.value !== emailTwo.value) {
      event.preventDefault();
      alert("You tried submitting emails that didn't match");
    }
  });