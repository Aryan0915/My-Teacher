// =============================================
// news.js — Markdown Based Dynamic Loader
// URL: news.html?id=news1
// =============================================

const params = new URLSearchParams(window.location.search);
const newsId = params.get("id");

if (!newsId) {
  showError();
} else {
  loadNews(newsId);
}

// ── Step 1: JSON + MD दोनों fetch करो ──
async function loadNews(id) {
  try {
    // JSON से metadata
    const metaRes = await fetch("news-data.json");
    const allNews = await metaRes.json();
    const news    = allNews.find(n => n.id === id);
    if (!news) { showError(); return; }

    // .md file से article content
    const mdRes = await fetch(`articles/${id}.md`);
    if (!mdRes.ok) { showError(); return; }
    const mdText = await mdRes.text();

    renderPage(news, mdText, allNews);

  } catch (err) {
    console.error("Load Error:", err);
    showError();
  }
}

// ── Step 2: सब कुछ Page पर लगाओ ──
function renderPage(news, mdText, allNews) {

  // Title
  document.title = news.title + " — My Teacher";

  // Category
  document.getElementById("art-category").textContent =
    "📰 " + news.category;

  // Heading
  document.getElementById("art-title").textContent = news.title;

  // Date & Author
  document.getElementById("art-date").innerHTML =
    `📅 ${news.date} &nbsp;|&nbsp; ✍️ ${news.author || "My Teacher Team"}`;

  // Image
  const img = document.getElementById("art-img");
  img.src   = "../" + news.image;
  img.alt   = news.title;
  document.getElementById("art-caption").textContent =
    news.imageCaption || "";

  // ✅ Markdown → HTML (marked.js)
  document.getElementById("art-content").innerHTML =
    marked.parse(mdText);

  // PDF (अगर है तो दिखाओ)
  if (news.pdf) {
    document.getElementById("pdf-section").style.display = "block";
    document.getElementById("pdf-link").href = news.pdf;
  }

  // Sidebar: Latest Posts
  const list = document.getElementById("latest-list");
  list.innerHTML = "";
  allNews
    .filter(n => n.id !== news.id)
    .slice(0, 5)
    .forEach(n => {
      list.innerHTML +=
        `<li><a href="news.html?id=${n.id}">${n.title}</a></li>`;
    });

  // Schema JSON-LD
  document.getElementById("schema-ld").textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": news.title,
    "image": [`https://my-teacher-india.netlify.app/${news.image}`],
    "datePublished": news.datePublished || "",
    "dateModified":  news.datePublished || "",
    "author": {
      "@type": "Person",
      "name": news.author || "My Teacher"
    },
    "publisher": {
      "@type": "Organization",
      "name": "My Teacher",
      "logo": {
        "@type": "ImageObject",
        "url": "https://my-teacher-india.netlify.app/image.png/logo-design.png"
      }
    }
  });

  // Loading हटाओ, page दिखाओ
  document.getElementById("loading").style.display = "none";
  document.getElementById("page-wrapper").style.display = "flex";

  animatePage();
}

// ── Animations ──
function animatePage() {
  const article = document.querySelector(".article-area");
  if (article) {
    article.style.opacity    = "0";
    article.style.transform  = "translateY(30px)";
    article.style.transition = "all 0.6s ease";
    setTimeout(() => {
      article.style.opacity   = "1";
      article.style.transform = "translateY(0)";
    }, 50);
  }

  document.querySelectorAll(".sidebar-box").forEach((box, i) => {
    box.style.opacity    = "0";
    box.style.transition = `all 0.5s ease ${i * 0.15}s`;
    setTimeout(() => { box.style.opacity = "1"; }, 50);
  });

  console.log("✅ News Loaded:", document.title);
}

// ── Error ──
function showError() {
  document.getElementById("loading").style.display   = "none";
  document.getElementById("error-msg").style.display = "block";
}
