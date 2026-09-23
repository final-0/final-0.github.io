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
});
