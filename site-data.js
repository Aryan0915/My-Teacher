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
    text: "MP Board Result 2026 जल्द आएगा",
    link: "about-us/education-news.html"
  },
  {
    text: "MP Teacher Vacancy 2026 — 5000 पद",
    link: "about-us/sarkari-naukri.html"
  },
  {
    text: "नई शिक्षा नीति 2026 — पूरी जानकारी",
    link: "about-us/education-news.html"
  },
  {
    text: "हमारे शिक्षक एप — अभी डाउनलोड करें",
    link: "about-us/app-info.html"
  }
];


// ============================================================
// 2. NOTICE PAPER — Hero section mein left side
// Date aur 3 items update karo daily
// ============================================================
const noticeData = {
  date: "13 March 2026",
  items: [
    {
      heading: "परीक्षा सूचना",
      text: "MP TET 2026 का परिणाम अप्रैल में आएगा"
    },
    {
      heading: "भर्ती",
      text: "MP Teacher Vacancy — अंतिम तिथि 31 March"
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
// 4. EDUCATION NEWS — about-us/education-news.html
// Nai khabar add karo — card + full article dono automatic!
// ============================================================
const eduNewsData = [
  {
    "id": "edu1",
    "date": "12 March 2026",
    "title": "MP Board Result 2026 — मई में आएगा परिणाम",
    "desc": "मध्यप्रदेश बोर्ड ने 10वीं और 12वीं के परिणाम की तिथि घोषित की।",
    "category": "Education News",
    "image": "images/mp-board-result.jpg",
    "imageCaption": "MP Board परीक्षा परिणाम 2026",
    "intro": "मध्यप्रदेश माध्यमिक शिक्षा मण्डल ने वर्ष 2026 की बोर्ड परीक्षाओं के परिणाम की तिथि की घोषणा कर दी है।",
    "sections": [
      {
        "heading": "परिणाम कब आएगा",
        "content": "MP Board का परिणाम मई 2026 के दूसरे सप्ताह में जारी किया जाएगा।",
        "highlight": "महत्वपूर्ण: परिणाम केवल mpbse.nic.in पर देखा जा सकेगा।"
      },
      {
        "heading": "परिणाम कैसे देखें",
        "content": "आधिकारिक वेबसाइट पर जाएं, अपना रोल नंबर और जन्मतिथि दर्ज करें।",
        "highlight": ""
      }
    ]
  }
];


// ============================================================
// 5. SARKARI NAUKRI — about-us/sarkari-naukri.html
// Nai vacancy add karo
// ============================================================
const naukariData = [
  {
    "id": "naukri1",
    "date": "10 March 2026",
    "title": "MP Teacher Vacancy 2026 — 5000 पद",
    "desc": "MP School Shiksha Vibhag ne 5000 pado par bharti ke liye notification jaari ki hai.",
    "image": "",
    "link": "sarkari-naukri/job1.html",
    "category": "Sarkari Naukri"
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