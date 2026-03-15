// =============================================
// news.js — news folder ke saare pages ke liye
// news1.html, news2.html, news3.html etc.
// =============================================

// Article fade-in animation
const article = document.querySelector(".article-area");

if (article) {
  article.style.opacity = "0";
  article.style.transform = "translateY(30px)";
  article.style.transition = "all 0.6s ease";

  window.addEventListener("load", () => {
    article.style.opacity = "1";
    article.style.transform = "translateY(0)";
  });
}

// Sidebar boxes fade-in
const sidebarBoxes = document.querySelectorAll(".sidebar-box");
sidebarBoxes.forEach((box, index) => {
  box.style.opacity = "0";
  box.style.transform = "translateY(20px)";
  box.style.transition = `all 0.5s ease ${index * 0.15}s`;

  window.addEventListener("load", () => {
    box.style.opacity = "1";
    box.style.transform = "translateY(0)";
  });
});

console.log("✅ News page loaded!");