// Part 1: EEvent Handling
const toggleBtn = document.getElementById("toggleBtn");
const tipMessage = document.getElementById("tipMessage");

toggleBtn.addEventListener("click", () => {
  if (tipMessage.style.display === "none") {
    tipMessage.style.display = "block";
  } else {
    tipMessage.style.display = "none";
  }
});

// Part 2: the Interactive Elements

// 1. Mode Toggle
const modeToggle = document.getElementById("modeToggle");
const modeStatus = document.getElementById("modeStatus");

modeToggle.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "#333";
    modeStatus.textContent = "Currently: Light Mode";
    modeToggle.textContent = "Switch to Dark Mode";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    modeStatus.textContent = "Currently: Dark Mode";
    modeToggle.textContent = "Switch to Light Mode";
  }
});

// 2. Atttendance Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    counterValue.textContent = counter;
  }
});

// 3.  Toggle
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "none" ? "block" : "none";
});

// Part 3: Form Valiidation
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Full name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@students\.mmu\.ac\.ke$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please use a valid MMU student email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    formSuccess.textContent = "Signup successful! Welcome to the club.";
    signupForm.reset();
  }
});

