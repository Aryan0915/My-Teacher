const params  = new URLSearchParams(window.location.search);
const subject = params.get("subject") || "current";
const id      = params.get("id");

const subjectMap = {
  maths:     { file: "study-maths.json",     label: "🔢 Mathematics",       backUrl: "study-material.html?tab=maths"     },
  gk:        { file: "study-gk.json",        label: "🌍 General Knowledge",  backUrl: "study-material.html?tab=gk"        },
  science:   { file: "study-science.json",   label: "🔬 Science",            backUrl: "study-material.html?tab=science"   },
  reasoning: { file: "study-reasoning.json", label: "🧠 Reasoning",          backUrl: "study-material.html?tab=reasoning" },
  current:   { file: "study-current.json",   label: "📰 Current Affairs",    backUrl: "study-material.html?tab=current"   },
  sahitya:   { file: "sahitya-darshan.json", label: "📖 Sahitya Darshan",    backUrl: "sahitya-darshan.html"              },
};

const info = subjectMap[subject] || subjectMap["current"];

// Back buttons update karo
const backBtn  = document.getElementById("back-btn");
const backLink = document.getElementById("back-link");
if (backBtn)  backBtn.href  = info.backUrl;
if (backLink) backLink.href = info.backUrl;

// Category label
document.getElementById("category").innerText = info.label;

// JSON fetch karo
fetch(info.file)
  .then(r => r.json())
  .then(data => {
    const article = data.find(item => item.id === id);

    if (!article) {
      document.getElementById("title").innerText = "Article not found.";
      document.getElementById("content").innerHTML =
        "<p>Yeh article nahi mila. <a href='" + info.backUrl + "'>वापस जाएँ</a></p>";
      return;
    }

    // Page title, heading, date set karo
    document.title = article.title + " — My Teacher";
    document.getElementById("title").innerText = article.title;
    document.getElementById("date").innerText  = article.date ? "📅 " + article.date : "";

    // Cover image
    const img = document.getElementById("image");
    if (article.image) {
      img.src = article.image;
      img.alt = article.title;
      img.style.display = "block";
    }

    // PDF download button
    if (article.pdf) {
      document.getElementById("pdf-btn-wrap").innerHTML =
        `<a href="${article.pdf}" download class="pdf-download-btn">⬇️ PDF Download</a>`;
    }

    const contentEl = document.getElementById("content");

    // Content load karo — priority: file > content field > desc
    if (article.file) {
      // External .md ya .html file fetch karo
      fetch(article.file)
        .then(r => {
          if (!r.ok) throw new Error("File not found: " + article.file);
          return r.text();
        })
        .then(text => {
          const isMarkdown = article.file.endsWith(".md");
          if (isMarkdown && typeof marked !== 'undefined') {
            contentEl.innerHTML = marked.parse(text);
          } else {
            contentEl.innerHTML = text;
          }
        })
        .catch(err => {
          contentEl.innerHTML = `<p style="color:red;">⚠️ Content load nahi ho saka.<br>
            File check karein: <code>${article.file}</code></p>`;
          console.error(err);
        });

    } else if (article.content) {
      // JSON mein hi content hai
      const isHTML = /<[a-z][\s\S]*>/i.test(article.content);
      contentEl.innerHTML = isHTML
        ? article.content
        : "<p>" + article.content
            .replace(/\n\n/g, "</p><p>")
            .replace(/\n/g, "<br>") + "</p>";

    } else {
      // Sirf description hai
      contentEl.innerHTML = "<p>" + (article.desc || "Content jald aayega...") + "</p>";
    }
  })
  .catch(err => {
    document.getElementById("title").innerText = "Error loading article.";
    document.getElementById("content").innerHTML =
      `<p style="color:red;">⚠️ JSON file load nahi ho saki: <code>${info.file}</code></p>`;
    console.error(err);
  });