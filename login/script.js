function toggleForm(formType) {
  document.getElementById("login-form-container").classList.add("hidden");
  document.getElementById("register-form-container").classList.add("hidden");

  if (formType === "login") {
    document.getElementById("login-form-container").classList.remove("hidden");
  } else {
    document
      .getElementById("register-form-container")
      .classList.remove("hidden");
  }

  document.getElementById("login-error").textContent = "";
  document.getElementById("register-error").textContent = "";
}

function validateLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const errorMessage = document.getElementById("login-error");

  // Basic validation checks for email and password
  if (email === "" || password === "") {
    errorMessage.textContent = "Please fill in all fields.";
    return false;
  }

  // Validate email format
  if (!email.includes("@") || !email.includes(".")) {
    errorMessage.textContent = "Please enter a valid email address.";
    return false;
  }

  // Validate password length (minimum 6 characters)
  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long.";
    return false;
  }

  // Clear error message if valid
  errorMessage.textContent = "";
  return true;
}

function validateRegister() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorMessage = document.getElementById("register-error");

  // Basic validation checks
  if (email === "" || password === "" || confirmPassword === "") {
    errorMessage.textContent = "Please fill in all fields.";
    return false;
  }

  // Validate email format
  if (!email.includes("@") || !email.includes(".")) {
    errorMessage.textContent = "Please enter a valid email address.";
    return false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
    return false;
  }

  // Validate password length (minimum 6 characters)
  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long.";
    return false;
  }

  // Clear error message if valid
  errorMessage.textContent = "";
  return true;
}
