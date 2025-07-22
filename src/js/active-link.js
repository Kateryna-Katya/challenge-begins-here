const links = document.querySelectorAll('.navigation-item');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }

    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});