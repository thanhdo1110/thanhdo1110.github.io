/* ═══════════════════════════════════════════════════════════════════════════
   TruyenDrive — shared header / footer injector
   Keeps nav + footer consistent across pages w/o server-side includes
   ═══════════════════════════════════════════════════════════════════════════ */

(function(){
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const headerHTML = `
  <nav class="nav">
    <div class="nav-in">
      <a href="index.html" class="brand"><img src="assets/logo-wide.png" alt="TruyenDrive"/></a>
      <div class="nav-menu">
        <a href="features.html" data-page="features.html">Tính năng</a>
        <a href="security.html" data-page="security.html">Bảo mật</a>
        <a href="download.html" data-page="download.html">Tải về</a>
        <a href="support.html" data-page="support.html">Hỗ trợ</a>
      </div>
      <div class="nav-cta">
        <a href="https://github.com/34306/TruyenDrive-iOS" target="_blank" rel="noopener" class="btn btn-ghost">GitHub</a>
        <a href="download.html" class="btn btn-primary">
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1v9m0 0L3.5 6.5M7 10l3.5-3.5M2 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Tải về
        </a>
      </div>
    </div>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="foot-in">
      <div class="foot-brand">
        <img src="assets/logo-wide.png" alt="TruyenDrive" style="height:80px;width:312px;object-fit:contain"/>
        <p>Comic reader cho Google Drive. Mã hoá ảnh trên thiết bị, đọc đa chế độ, giữ riêng tư tuyệt đối.</p>
        <div class="foot-social">
          <a href="https://github.com/34306/TruyenDrive-iOS" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1C4.1 1 1 4.1 1 8c0 3.1 2 5.7 4.8 6.6.4.1.5-.2.5-.4v-1.3c-2 .4-2.4-.8-2.4-.8-.3-.8-.8-1-.8-1-.7-.5 0-.5 0-.5.7.1 1.1.8 1.1.8.7 1.1 1.7.8 2.2.6.1-.5.3-.8.5-1-1.5-.2-3.1-.8-3.1-3.4 0-.8.3-1.4.7-1.9 0-.2-.3-1 .1-2 0 0 .6-.2 2 .7.6-.2 1.2-.3 1.8-.3s1.2.1 1.8.3c1.4-.9 2-.7 2-.7.4 1 .1 1.8.1 2 .5.5.7 1.1.7 1.9 0 2.7-1.6 3.2-3.1 3.4.3.2.5.7.5 1.4v2c0 .2.1.5.5.4C13 13.7 15 11.1 15 8c0-3.9-3.1-7-7-7z"/></svg>
          </a>
          <a href="https://discord.gg/cEEDd4wGX4" target="_blank" rel="noopener" aria-label="Discord">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.5 3.5c-1.1-.5-2.3-.9-3.5-1l-.2.3c1 .2 1.8.5 2.6 1-1-.5-2.1-.8-3.2-.9-.4 0-.7 0-1.1.1H8c-.4-.1-.7-.1-1.1-.1-1.1.1-2.2.4-3.2.9.8-.5 1.6-.8 2.6-1l-.1-.3c-1.2.1-2.4.5-3.5 1C1.3 6 .5 8.8.6 11.6c.9.7 2 1.1 3.1 1.3.2-.3.5-.7.7-1-.5-.2-1.1-.4-1.6-.7l.2-.2c2.7 1.3 5.7 1.3 8.4 0l.2.2c-.5.3-1.1.5-1.6.7.2.3.5.7.7 1 1.1-.2 2.2-.6 3.1-1.3.2-3.1-.4-5.9-1.9-8.4zM5.7 9.9c-.6 0-1.1-.6-1.1-1.4 0-.7.5-1.4 1.1-1.4s1.1.6 1.1 1.4c0 .7-.5 1.4-1.1 1.4zm4.6 0c-.6 0-1.1-.6-1.1-1.4 0-.7.5-1.4 1.1-1.4s1.1.6 1.1 1.4c0 .7-.5 1.4-1.1 1.4z"/></svg>
          </a>
          <a href="https://t.me/dothanh1110" target="_blank" rel="noopener" aria-label="Telegram">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M14.5 2L1.5 7l3.5 1.2L13 4 6 9.5l5 3 2-9 1.5-1.5zM6 12.5L11.5 6 7 10v2.5z"/></svg>
          </a>
          <a href="https://fb.com/ctdoteam" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M9 15v-6h2l.3-2.4H9V5c0-.7.2-1.2 1.2-1.2H12V1.6c-.3 0-1-.1-1.8-.1-1.8 0-3 1.1-3 3v1.7H5V8.6h2.2V15H9z"/></svg>
          </a>
        </div>
        <p style="font-size:11px;margin-top:8px">Made with <span style="color:#ff3b30">♥</span> in Vietnam · 2025</p>
      </div>
      <div class="foot-col">
        <h5>Sản phẩm</h5>
        <a href="features.html">Tính năng</a>
        <a href="security.html">Bảo mật</a>
        <a href="download.html">Tải về</a>
        <a href="features.html#modes">Chế độ đọc</a>
      </div>
      <div class="foot-col">
        <h5>Tài nguyên</h5>
        <a href="support.html">Hướng dẫn</a>
        <a href="support.html#faq">FAQ</a>
        <a href="support.html#contact">Liên hệ</a>
        <a href="https://github.com/34306/TruyenDrive-iOS" target="_blank" rel="noopener">Mã nguồn mở</a>
      </div>
      <div class="foot-col">
        <h5>Cộng đồng</h5>
        <a href="https://discord.gg/cEEDd4wGX4" target="_blank" rel="noopener">Discord</a>
        <a href="https://t.me/ctdotech" target="_blank" rel="noopener">Telegram (Blog)</a>
        <a href="https://t.me/TestFlight1110" target="_blank" rel="noopener">TestFlight Public</a>
        <a href="https://fb.com/ctdoteam" target="_blank" rel="noopener">Facebook</a>
      </div>
      <div class="foot-col">
        <h5>Pháp lý</h5>
        <a href="privacy.html">Quyền riêng tư</a>
        <a href="terms.html">Điều khoản</a>
        <a href="terms.html#licenses">Giấy phép MIT</a>
        <a href="terms.html#disclaimer">Tuyên bố miễn trừ</a>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2025 TruyenDrive · CTDO Team. Tất cả nhân vật &amp; truyện thuộc về tác giả.</span>
      <div class="foot-legal">
        <a href="privacy.html">Riêng tư</a>
        <a href="terms.html">Điều khoản</a>
        <a href="terms.html#cookies">Cookies</a>
        <span>v2.4.0</span>
      </div>
    </div>
  </footer>`;

  // Inject — placeholder elements or fallback to body start/end
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = headerHTML;
  else document.body.insertAdjacentHTML('afterbegin', headerHTML);
  if (footerSlot) footerSlot.outerHTML = footerHTML;
  else document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Mark current nav item active
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if (a.dataset.page === here) a.classList.add('active');
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
