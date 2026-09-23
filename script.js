document.addEventListener('DOMContentLoaded', () => {
  const yearText = new Date().getFullYear();
  const footer = document.querySelector('.footer-wrap p');
  if (footer) {
    footer.textContent = `\u00A9 ${yearText} Takahiro Shindo`;
  }

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const lbCaption = lightbox.querySelector('figcaption');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    const open = (src, alt, caption) => {
      lbImg.src = src;
      lbImg.alt = alt || '';
      lbCaption.textContent = caption || '';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      lbImg.src = '';
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.gallery-grid img').forEach((img) => {
      img.addEventListener('click', () => {
        const caption = img.closest('figure')?.querySelector('figcaption')?.textContent;
        open(img.src, img.alt, caption);
      });
    });

    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
    });
  }
});
