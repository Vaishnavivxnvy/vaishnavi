// script.js
document.getElementById("verifyForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  const code = document.getElementById("code").value.trim();
  const message = document.getElementById("message");

  // Simulated correct verification code
  const correctCode = "123456";

  if (code === "") {
    message.textContent = "Please enter the verification code.";
    return;
  }

  if (code === correctCode) {
    message.style.color = "green";
    message.textContent = "Verification successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Incorrect code. Please try again.";
  }
});
