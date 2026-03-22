// ============================================================
// SITE-DATA.JS — MY TEACHER WEBSITE
// SIRF YE EK FILE ROZ UPDATE KARO — POORI WEBSITE AUTOMATIC!
// ============================================================
// 
// KAISE USE KAREIN:
// 1. VS Code mein sirf ye file kholo
// 2. Jo section update karna ho wahan changes karo
// 3. Ctrl + S dabao — website automatically update!
//
// ============================================================


// ============================================================
// 1. TICKER — Running news (navbar ke neeche wali)
// Add/Remove karo — automatically scroll mein aayega
// ============================================================
const tickerItems = [
  {
    text: "करंट अफेयर्स का सेक्शन बन गया अभी चेक करें स्टडी मटेरियल में",
    
  },
  {
    text: "स्टडी मटेरियल मे सभी विषयों पर काम जारी है अगले कुछ दिनों मे नया content देखने को मिलेगा",
    
  },
  {
    text: "अब आपके लिए नए टेस्ट, जिसमे रोचक प्रश्न, अपनी अंकसूची के साथ, सभी प्रश्नों का विश्लेषण भी",
    
  },
  {
    text: "साहित्य में मिलेगा पुरानी किताबों का संगम, जिसमे क्लासिक साहित्य का होगा जमावड़ा",
    
  }
];


// ============================================================
// 2. NOTICE PAPER — Hero section mein left side
// Date aur 3 items update karo daily
// ============================================================
const noticeData = {
  date: "23 March 2026",
  items: [
    {
      heading: "करंट अफेयर्स की सूचना",
      text: "study material के current section में देखें"
    },
    {
      heading: "टेस्ट exam का नया इंतजाम",
      text: "सभी प्रमुख परीक्षाओ के मुफ़्त टेस्ट"
    },
    {
      heading: "अध्ययन सामग्री",
      text: "नए नोट्स Study Material में उपलब्ध"
    }
  ]
};


// ============================================================
// 3. HOMEPAGE NEWS CARDS — index.html pe dikhne wale cards
// Nai entry add karo ya purani hatao
// ============================================================
const homeNewsData = [
  {
    "id": "news1",
    "date": "12 March 2026",
    "title": "MP Board Result 2026 — मई में आएगा परिणाम",
    "desc": "मध्यप्रदेश बोर्ड ने 10वीं और 12वीं के परिणाम की तिथि घोषित की।",
    "image": "",
    "link": "about-us/education-news.html",
    "category": "Education News"
  }
];



// ============================================================
// 6. STUDY MATERIAL — about-us/study-material.html
// Har subject ke liye alag section
// type: "pdf" / "notes" / "article"
// ============================================================
const studyData = {
  maths: [
    {
      "id": "maths1",
      "date": "10 March 2026",
      "title": "Number System — संख्या पद्धति",
      "desc": "MP TET ke liye Number System ke complete notes.",
      "image": "",
      "pdf": "",
      "link": "#",
      "type": "notes"
    }
  ],
  gk: [
    {
      "id": "gk1",
      "date": "10 March 2026",
      "title": "Madhya Pradesh GK — सामान्य ज्ञान",
      "desc": "MP TET ke liye Madhya Pradesh ka poora GK.",
      "image": "",
      "pdf": "",
      "link": "#",
      "type": "pdf"
    }
  ],
  science: [],
  reasoning: [],
  current: []
};


// ============================================================
// YE NEECHE WALA CODE MAT CHHUO — AUTOMATIC SYSTEM HAI
// ============================================================
(function applyAllData() {

  // Ticker apply
  if (typeof buildTicker === 'function') buildTicker();

  // Notice apply
  if (typeof buildNotice === 'function') buildNotice();

  // Homepage news cards
  const homeContainer = document.getElementById('news-container');
  if (homeContainer && homeNewsData) {
    homeContainer.innerHTML = '';
    homeNewsData.forEach(item => {
      const imgHTML = item.image
        ? `<img src="${item.image}" alt="${item.title}" class="card-img">`
        : '';
      homeContainer.innerHTML += `
        <div class="content-card">
          ${imgHTML}
          <div class="card-body">
            <div class="card-date">📅 ${item.date}</div>
            <span class="card-category">${item.category}</span>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <a href="${item.link}" class="read-more">Read More →</a>
          </div>
        </div>`;
    });
  }

})();