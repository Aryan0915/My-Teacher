// ================================================================
// SITE-DATA.JS — SIRF YE FILE ROZ UPDATE KARO
// Koi bhi function mat likho — sirf data yahan hoga
// ================================================================

// ===== 1. TICKER ===== 
const tickerItems = [
  { text: "हमारी वेबसाइट में कंटेन्ट लेखक की आवश्यकता, पढ़ें नोटिफिकेशन" },
  { text: "मध्यप्रदेश भोज (ओपन यूनिवर्सिटी) में प्रवेश परीक्षा फॉर्म शुरू, notice पढे" },
  { text: "करंट अफेयर्स का सेक्शन बन गया अभी चेक करें स्टडी मटेरियल में" },
  { text: "स्टडी मटेरियल मे सभी विषयों पर काम जारी है अगले कुछ दिनों मे नया content देखने को मिलेगा" },
  { text: "अब आपके लिए नए टेस्ट, जिसमे रोचक प्रश्न, अपनी अंकसूची के साथ, सभी प्रश्नों का विश्लेषण भी" },
  { text: "नए टेस्ट सीरीज, जाओ देखो, प्रश्नों का analysis भी साथ में" }
];

// ===== 2. NOTICE PAPER — Date daily update karo =====
const noticeData = {
  date: "26 March 2026",
  items: [
    { heading: "करंट अफेयर्स की सूचना",   text: "study material के current section में देखें" },
    { heading: "टेस्ट exam का नया इंतजाम", text: "सभी प्रमुख परीक्षाओ के मुफ़्त टेस्ट" },
    { heading: "अध्ययन सामग्री",           text: "नए नोट्स Study Material में उपलब्ध" }
  ]
};

// ===== 3. HOMEPAGE NEWS CARDS — Roz nai khabar yahan add karo =====
const homeNewsData = [
  {
    id: "news1",
    date: "25 March 2026",
    title: "क्या TET कैसे होगा सर्वे और परीक्षा",
    desc: "स्कूल शिक्षा विभाग ने जारी की गाइडलाइन",
    image: "image.png/article-image.jpeg",
    link: "news/news.html?id=news1",
    category: "Education News"
  },
  {
    id: "news2",
    date: "25 March 2026",
    title: "डिजिटल शिक्षा को बढ़ावा",
    desc: "मध्यप्रदेश बोर्ड ने 10वीं और 12वीं के परिणाम की तिथि घोषित की।",
    image: "image.png/digital.jpeg",
    link: "news/news.html?id=news2",
    category: "Education News"
  }
  // Nayi khabar add karni ho to yahan copy karo:
  // { id: "news2", date: "...", title: "...", desc: "...", image: "", link: "#", category: "..." },
];

// ===== 4. STUDY MATERIAL =====
const studyData = {
  maths: [
    { id: "maths1", date: "10 March 2026", title: "Number System — संख्या पद्धति",
      desc: "MP TET ke liye Number System ke complete notes.", image: "", pdf: "", link: "#", type: "notes" }
  ],
  gk: [
    { id: "gk1", date: "10 March 2026", title: "Madhya Pradesh GK — सामान्य ज्ञान",
      desc: "MP TET ke liye Madhya Pradesh ka poora GK.", image: "", pdf: "", link: "#", type: "pdf" }
  ],
  science:   [],
  reasoning: [],
  current:   []
};