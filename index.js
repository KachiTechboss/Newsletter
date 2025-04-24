document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex

  // Check if the email input is empty
  if (!emailInput.value.trim()) {
    errorMessage.textContent = "Email is required.";
    errorMessage.classList.remove("hidden"); // Show the error message
    emailInput.classList.add("error-border"); // Add red border to input
  } 
  // Check if the email format is invalid
  else if (!emailRegex.test(emailInput.value.trim())) {
    errorMessage.textContent = "Please enter a valid email address.";
    errorMessage.classList.remove("hidden"); // Show the error message
    emailInput.classList.add("error-border"); // Add red border to input
  } 
  // If the email is valid
  else {
    errorMessage.textContent = ""; // Clear the error message
    errorMessage.classList.add("hidden"); // Hide the error message
    emailInput.classList.remove("error-border"); // Remove red border from input

    // Show the thank-you card and hide the form card
    document.getElementById("form-card").classList.add("hidden");
    document.getElementById("thank-you-card").classList.remove("hidden");

    // Update the email in the thank-you message
    document.getElementById("user-email").textContent = emailInput.value.trim();
  }
});

// Dismiss the thank-you message
function dismiss() {
  document.getElementById("thank-you-card").classList.add("hidden"); // Hide the thank-you card
  document.getElementById("form-card").classList.remove("hidden"); // Show the form card
}