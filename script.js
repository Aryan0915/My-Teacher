// ================================================================
// SCRIPT.JS — MY TEACHER WEBSITE
// ================================================================

// ===== 1. TICKER DATA — Roz yahan se update karo =====
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

// ===== 2. NOTICE PAPER DATA — Roz yahan se update karo =====
const noticeData = {
  items: [
    {
      heading: "मप्र वन आरक्षक व जेल प्रहरी",
      text: "आवेदन देने की तारीख बढ़ी"
    },
    {
      heading: "जल्द मिलेगा साहित्य विभाग",
      text: "वेबसाइट मे जल्द जुड़ेगा साहित्य एवं दर्शन विभाग"
    },
    {
      heading: "अध्ययन सामग्री",
      text: "सभी विषयों के नोट्स व टेस्ट सीरीज जल्द ही"
    }
  ],
  date: "14 March 2026" 
};

// ================================================================
// NEECHE KUCH MAT CHHUO — YE AUTOMATIC HAI
// ================================================================

// ===== TICKER BUILD =====
(function buildTicker() {
  const container = document.getElementById('ticker-content');
  if (!container) return;
  let html = '';
  tickerItems.forEach(item => {
    html += '<span class="ticker-item">';
    if (item.link) {
      html += '<a href="' + item.link + '">' + item.text + '</a>';
    } else {
      html += item.text;
    }
    html += '</span><span class="ticker-separator">|</span>';
  });
  container.innerHTML = html + html;
})();

// ===== LIVE DATE & TIME =====
function updateDateTime() {
  var el = document.getElementById('live-datetime');
  if (!el) return;
  var now = new Date();
  var days = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
  var months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
  var day = days[now.getDay()];
  var date = now.getDate();
  var month = months[now.getMonth()];
  var year = now.getFullYear();
  var hours = now.getHours();
  var minutes = String(now.getMinutes()).padStart(2, '0');
  var seconds = String(now.getSeconds()).padStart(2, '0');
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  el.textContent = day + ', ' + date + ' ' + month + ' ' + year + ' | ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// ===== NOTICE PAPER BUILD =====
(function buildNotice() {
  var container = document.getElementById('notice-body');
  if (!container) return;
  var html = '';
  noticeData.items.forEach(function(item) {
    html += '<div class="notice-sub">' + item.heading + '</div>';
    html += '<p class="notice-text">' + item.text + '</p>';
    html += '<span class="notice-line"></span>';
  });
  html += '<div class="notice-date">' + noticeData.date + '</div>';
  container.innerHTML = html;
})();

// ===== NOTICE TOGGLE =====
function toggleNotice() {
  var stack = document.querySelector('.notice-stack');
  var btn = document.querySelector('.notice-toggle-btn');
  if (!stack || !btn) return;
  stack.classList.toggle('notice-hidden');
  btn.classList.toggle('is-open');
}

// ===== HOMEPAGE NEWS CARDS — news-data.json se =====
document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('news-container');
  if (!container) return;

  fetch('news/news-data.json')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      container.innerHTML = '';
      data.forEach(function(item) {
        var imgHTML = item.image
          ? '<img src="' + item.image + '" class="news-card-img" alt="' + item.title + '">'
          : '<div class="news-card-img-placeholder">📰</div>';
        container.innerHTML += '<div class="news-card">' +
          imgHTML +
          '<div class="news-card-body">' +
            '<span class="news-card-badge">' + (item.category || 'Education News') + '</span>' +
            '<div class="news-card-date">📅 ' + item.date + '</div>' +
            '<h3>' + item.title + '</h3>' +
            '<p>' + item.desc + '</p>' +
            '<a href="' + (item.link || '#') + '" class="news-read-more">पूरा पढ़ें →</a>' +
          '</div>' +
        '</div>';
      });
    })
    .catch(function() {
      container.innerHTML = '<p style="color:#aaa; text-align:center; padding:30px;">अभी कोई समाचार नहीं है।</p>';
    });
});

// ===== MOBILE MENU =====
function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.toggle('open');
}

// ===== NAVBAR SHADOW ON SCROLL =====
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(0,0,0,0.3)'
      : '0 2px 10px rgba(0,0,0,0.2)';
  }
});