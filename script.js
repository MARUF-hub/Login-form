// =========== Login to Forget ========

const forgetLink = document.getElementById("forget-link");
forgetLink.addEventListener("click", function () {
  let loginClose = document.getElementById("login");
  loginClose.style.display = "none";

  let forgetOpen = document.getElementById("forget");
  forgetOpen.style.display = "block";
});

// ============= Forget to Login ==========

const loginLink = document.getElementById("login-link");
loginLink.addEventListener("click", function () {
  let loginOpen = document.getElementById("login");
  loginOpen.style.display = "flex";

  let forgetClose = document.getElementById("forget");
  forgetClose.style.display = "none";
});

// ========== Forget-back to Login=========

const logLink = document.getElementById("back");
logLink.addEventListener("click", function () {
  let LoginOpen = document.getElementById("login");
  LoginOpen.style.display = "flex";

  let forgetClose = document.getElementById("forget");
  forgetClose.style.display = "none";
});

// ========== Forget to Reset ===========

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function () {
  let loginClose = document.getElementById("login");
  loginClose.style.display = "none";

  let forgetClose = document.getElementById("forget");
  forgetClose.style.display = "none";

  const resetOpen = document.getElementById("reset");
  resetOpen.style.display = "block";
});

// =============== Reset-back to Forget==========

const forgetLink2 = document.getElementById("back-2");
forgetLink2.addEventListener("click", function () {
  let forgetOpen = document.getElementById("forget");
  forgetOpen.style.display = "block";

  const resetClose = document.getElementById("reset");
  resetClose.style.display = "none";
});

// ============ Sign-back to Login ========

const logLink3 = document.getElementById("back-3");
logLink3.addEventListener("click", function () {
  let LoginOpen = document.getElementById("login");
  LoginOpen.style.display = "flex";

  let signClose = document.getElementById("sign-up");
  signClose.style.display = "none";
});

// ======== Login-back to Sign-up ===========

const signUpLink = document.getElementById("signBtn");
signUpLink.addEventListener("click", function () {
  let loginClose = document.getElementById("login");
  loginClose.style.display = "none";

  let signUpOpen = document.getElementById("sign-up");
  signUpOpen.style.display = "block";
});

// ============ Scroll Reveal ===========
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(`.login-form`, { origin: "top" });
