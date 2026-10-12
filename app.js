const navItems = document.querySelectorAll('.nav-item[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navItems.forEach((item) => item.classList.toggle('active', item.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25] });

sections.forEach((section) => observer.observe(section));

document.querySelector('.primary-button')?.addEventListener('click', () => {
  document.querySelector('#roadmap')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.export-button')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const original = button.innerHTML;
  button.innerHTML = '✓ Rapport prêt';
  button.style.background = '#2a9e8e';
  setTimeout(() => {
    button.innerHTML = original;
    button.style.background = '';
  }, 1800);
});

document.querySelector('#periodSelect')?.addEventListener('change', (event) => {
  const insight = document.querySelector('.chart-insight p');
  if (event.target.value === 'Historique complet') {
    insight.textContent = 'Vue historique sélectionnée. Les données disponibles couvrent actuellement 4 prélèvements entre novembre 2023 et janvier 2024.';
  } else {
    insight.textContent = 'Les 4 mesures historiques dépassent la limite de qualité. Une nouvelle campagne d’analyses est nécessaire avant tout dimensionnement.';
  }
});
