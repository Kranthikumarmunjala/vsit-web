// let currentSlideIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll(".dot");

// function showSlide(index) {
//   if (!slides || slides.length === 0) return;
  
//   if (index >= slides.length) {
//     currentSlideIndex = 0;
//   } else if (index < 0) {
//     currentSlideIndex = slides.length - 1;
//   } else {
//     currentSlideIndex = index;
//   }

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   if(slides[currentSlideIndex]) slides[currentSlideIndex].classList.add("active");
//   if(dots[currentSlideIndex]) dots[currentSlideIndex].classList.add("active");
// }

// function nextSlide() {
//   showSlide(currentSlideIndex + 1);
// }

// function prevSlide() {
//   showSlide(currentSlideIndex - 1);
// }

// function currentSlide(index) {
//   showSlide(index);
// }

// // Auto Slide every 5 seconds if slides exist
// if (slides.length > 0) {
//   setInterval(() => {
//     nextSlide();
//   }, 5000);
// }

// // Scroll to Top Smooth
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }

// // Mobile Hamburger Menu Toggle
// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");

// if (menuToggle && navLinks) {
//   menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//   });

//   document.querySelectorAll(".nav-links a").forEach(link => {
//     link.addEventListener("click", () => {
//       navLinks.classList.remove("active");
//     });
//   });
// }


// // Slider Code
// let currentSlideIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll(".dot");

// function showSlide(index) {
//   if (!slides || slides.length === 0) return;
//   if (index >= slides.length) currentSlideIndex = 0;
//   else if (index < 0) currentSlideIndex = slides.length - 1;
//   else currentSlideIndex = index;

//   slides.forEach((slide) => slide.classList.remove("active"));
//   dots.forEach((dot) => dot.classList.remove("active"));

//   if(slides[currentSlideIndex]) slides[currentSlideIndex].classList.add("active");
//   if(dots[currentSlideIndex]) dots[currentSlideIndex].classList.add("active");
// }

// function nextSlide() { showSlide(currentSlideIndex + 1); }
// function prevSlide() { showSlide(currentSlideIndex - 1); }
// function currentSlide(index) { showSlide(index); }

// if (slides.length > 0) {
//   setInterval(nextSlide, 5000);
// }

// // Scroll to top
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// // ☰ Mobile Hamburger Menu Toggle Functionality (100% Reliable)
// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menuToggle");
//   const navLinks = document.getElementById("navLinks");

//   if (menuToggle && navLinks) {
//     menuToggle.onclick = function (e) {
//       e.stopPropagation();
//       navLinks.classList.toggle("active");
//     };

//     // లింక్ క్లిక్ చేస్తే మెనూ మూసుకుపోతుంది
//     document.querySelectorAll(".nav-links a").forEach(function (link) {
//       link.onclick = function () {
//         navLinks.classList.remove("active");
//       };
//     });

//     // బయట ఎక్కడైనా టచ్ చేసినా మెనూ క్లోజ్ అయిపోతుంది
//     document.addEventListener("click", function (event) {
//       if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
//         navLinks.classList.remove("active");
//       }
//     });
//   }
// });






// ================= HERO SLIDER =================
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (!slides || slides.length === 0) return;
  if (index >= slides.length) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = slides.length - 1;
  else currentSlideIndex = index;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  if (slides[currentSlideIndex]) slides[currentSlideIndex].classList.add("active");
  if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add("active");
}

function nextSlide() { showSlide(currentSlideIndex + 1); }
function prevSlide() { showSlide(currentSlideIndex - 1); }
function currentSlide(index) { showSlide(index); }

if (slides.length > 0) {
  setInterval(nextSlide, 5000);
}

// ================= SCROLL TO TOP =================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ================= ☰ MOBILE HAMBURGER MENU (UNIVERSAL) =================
function toggleMobileMenu(event) {
  if (event) event.stopPropagation();
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.toggle("active");
  }
}

// Close menu when clicking outside or clicking a link
document.addEventListener("click", function (event) {
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");
  if (navLinks && menuToggle) {
    if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove("active");
    }
  }
});