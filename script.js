// ========================
// Part 1: Event Handling
// ========================
const button = document.getElementById("clickBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = " You clicked the button!";
});

// ========================
// Part 2: Interactive Features
// ========================

// Light/Dark Mode Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Counter Feature
let count = 0;
const counter = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// ========================
// Part 3: Form Validation
// ========================
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Name validation
  if (name === "") {
    formMessage.textContent = "Name is required.";
    formMessage.style.color = "red";
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "Enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  // Password validation
  if (password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  // Success message
  formMessage.style.color = "green";
  formMessage.textContent = "✅ Form submitted successfully!";
});
