// =============================================
// script.js
// Sirf education-news.html ke liye
// =============================================

// Article area aur sidebar boxes ko fade-in animation deta hai
const animateItems = document.querySelectorAll(".article-area, .sidebar-box");

// Pehle sab invisible karo
animateItems.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});

// Scroll karne par dikhao
window.addEventListener("scroll", () => {
  animateItems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Page load hone par jo elements screen pe already dikh rahe hain unhe bhi dikhao
window.dispatchEvent(new Event("scroll"));

console.log("✅ Education News page loaded!");