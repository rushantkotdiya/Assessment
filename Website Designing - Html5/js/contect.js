document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const nameRegex = /^[A-Za-z]{3,6}$/;

    if (!name || !email || !message) {
      alert("All fields are required.");
      e.preventDefault();
    } else if (!nameRegex.test(name)) {
      alert("Name must be 3 to 6 alphabets only.");
      e.preventDefault();
    }
  });
});











  document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Demo credentials
  const validEmail = "user@example.com";
  const validPassword = "123456";

  if (email === validEmail && password === validPassword) {
    alert("Login successful!");
    errorMsg.textContent = "";
    // Redirect or continue to dashboard
  } else {
    errorMsg.textContent = "Invalid email or password.";
  }
});

document.getElementById("applyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (name.length < 3 || name.length > 6) {
    status.textContent = "Name must be 3–6 letters.";
    status.style.color = "red";
    return;
  }

  // Simulated form submission
  status.style.color = "green";
  status.textContent = "Application submitted successfully!";
  document.getElementById("applyForm").reset();
});




document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = document.getElementById("event").value;
  const status = document.getElementById("status");

  if (name === "" || email === "" || event === "") {
    status.textContent = "Please fill out all required fields.";
    status.style.color = "red";
    return;
  }

  // Simulate registration success
  status.textContent = "Successfully registered for the event!";
  status.style.color = "green";
  document.getElementById("registerForm").reset();
});
