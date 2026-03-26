// ================================================================
// SCRIPT.JS — LOGIC ONLY
// Data site-data.js se aata hai — wahan update karo daily
// ================================================================

// ===== 1. TICKER BUILD =====
function buildTicker() {
  var container = document.getElementById('ticker-content');
  if (!container || typeof tickerItems === 'undefined') return;
  var html = '';
  tickerItems.forEach(function(item) {
    html += '<span class="ticker-item">';
    html += item.link ? '<a href="' + item.link + '">' + item.text + '</a>' : item.text;
    html += '</span><span class="ticker-separator">|</span>';
  });
  container.innerHTML = html + html; // double = smooth loop
}

// ===== 2. LIVE DATE & TIME =====
function updateDateTime() {
  var el = document.getElementById('live-datetime');
  if (!el) return;
  var now = new Date();
  var days   = ['रविवार','सोमवार','मंगलवार','बुधवार','गुरुवार','शुक्रवार','शनिवार'];
  var months = ['जनवरी','फरवरी','मार्च','अप्रैल','मई','जून','जुलाई','अगस्त','सितंबर','अक्टूबर','नवंबर','दिसंबर'];
  var hours = now.getHours();
  var ampm  = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  el.textContent =
    days[now.getDay()] + ', ' +
    now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear() + ' | ' +
    hours + ':' + String(now.getMinutes()).padStart(2,'0') + ':' +
    String(now.getSeconds()).padStart(2,'0') + ' ' + ampm;
}

// ===== 3. NOTICE PAPER BUILD =====
function buildNotice() {
  var container = document.getElementById('notice-body');
  if (!container || typeof noticeData === 'undefined') return;
  var html = '';
  noticeData.items.forEach(function(item) {
    html += '<div class="notice-sub">'  + item.heading + '</div>';
    html += '<p class="notice-text">'   + item.text    + '</p>';
    html += '<span class="notice-line"></span>';
  });
  html += '<div class="notice-date">' + noticeData.date + '</div>';
  container.innerHTML = html;
}

// ===== 4. NOTICE TOGGLE =====
function toggleNotice() {
  var stack = document.querySelector('.notice-stack');
  var btn   = document.querySelector('.notice-toggle-btn');
  if (!stack || !btn) return;
  stack.classList.toggle('notice-hidden');
  btn.classList.toggle('is-open');
}

// ===== 5. NEWS CARDS BUILD (homeNewsData from site-data.js) =====
function buildNewsCards() {
  var container = document.getElementById('news-container');
  if (!container || typeof homeNewsData === 'undefined') return;

  if (homeNewsData.length === 0) {
    container.innerHTML = '<p style="color:#aaa;text-align:center;padding:30px;">अभी कोई समाचार नहीं है।</p>';
    return;
  }

  container.innerHTML = '';
  homeNewsData.forEach(function(item) {
    var imgHTML = item.image
      ? '<img src="' + item.image + '" class="news-card-img" alt="' + item.title + '">'
      : '<div class="news-card-img-placeholder">📰</div>';

    container.innerHTML +=
      '<div class="news-card">' +
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
}

// ===== 6. MOBILE MENU — FIX: was 'open', now 'active' =====
function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.toggle('active');
}

// ===== 7. NAVBAR SHADOW ON SCROLL =====
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(0,0,0,0.3)'
      : '0 2px 10px rgba(0,0,0,0.2)';
  }
});

// ===== 8. INIT — Sab kuch DOMContentLoaded pe start hoga =====
document.addEventListener('DOMContentLoaded', function() {
  buildTicker();
  buildNotice();
  buildNewsCards();
  updateDateTime();
  setInterval(updateDateTime, 1000);
});