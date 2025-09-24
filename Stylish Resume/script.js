
// 1️⃣ Smooth scroll for navigation links
document.querySelectorAll('header a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// 2️⃣ Scroll-to-top button
const scrollUpBtn = document.getElementById("scroll-up");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollUpBtn.style.display = "block";
  else scrollUpBtn.style.display = "none";
});
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3️⃣ Simple form validation
const form = document.querySelector("#contact-page form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();
  if (!name || !email || !message) alert("Please fill in all fields!");
  else {
    alert("Thanks for reaching out to me.");
    form.reset();
  }
});

// 4️⃣ Typing effect for the hero text
const typingText = document.querySelector(".typing-text");
const text = typingText.textContent;
typingText.textContent = "";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

