const navItems = document.querySelectorAll('.nav-item[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const pipelineDetails = [
  ['Captage & contrôle', 'L’eau brute est prélevée puis analysée pour confirmer les PFAS, le débit, le fer, le manganèse et les paramètres qui peuvent affecter le traitement.', 'Données à obtenir : campagne PFAS récente, débit historique et débit exploitable.'],
  ['Prétraitement', 'Une étape de déferrisation et de démanganisation peut protéger les équipements et limiter le colmatage des médias adsorbants.', 'Condition : confirmer les concentrations locales en fer, manganèse, turbidité et matière organique.'],
  ['Adsorption PFAS', 'Deux colonnes tête / sécurité sont étudiées avec un média de résines spécifiques PFAS ou de charbon actif granulaire.', 'Validation : essais de percée par molécule, pertes de charge et durée de vie du média.'],
  ['Contrôle qualité', 'Des points de prélèvement entre les colonnes et en sortie permettent d’anticiper la saturation avant toute perte de conformité.', 'Indicateur clé : rester sous 100 ng/L, avec une cible de conception à 50 ng/L.'],
  ['Distribution', 'Après traitement, l’eau est désinfectée et contrôlée avant son introduction dans le réseau d’eau potable.', 'Passage en exploitation : autorisations sanitaires, réception et protocole de suivi.'],
];

const scenarioDetails = {
  'Résines PFAS': 'Option prioritaire à tester : compacte et adaptée à de nombreux PFAS, mais sensible à la compétition ionique et au coût des résines usées.',
  'Charbon actif (CAG)': 'Alternative industrielle mature, à comparer sur la même eau. Une attention particulière est nécessaire pour les PFAS à chaînes courtes et la gestion du charbon usé.',
  'Osmose inverse': 'Recours ciblé offrant une séparation élevée, avec des besoins plus importants en énergie, prétraitement et gestion des concentrats.',
  'CAG + résines': 'Combinaison à retenir uniquement si les essais démontrent un gain de qualité significatif par rapport au surcoût et à la maintenance.',
};
const scenarioTitles = {
  'Résines PFAS': 'Tester les résines PFAS',
  'Charbon actif (CAG)': 'Tester le charbon actif',
  'Osmose inverse': 'Étudier l’osmose inverse',
  'CAG + résines': 'Évaluer la combinaison CAG + résines',
};

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

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('visible'), 2600);
}

function openDetails(title, body, note) {
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `<div class="details-modal" role="dialog" aria-modal="true" aria-label="${title}">
    <button class="modal-close" aria-label="Fermer">×</button>
    <span class="section-kicker">DÉTAIL DU PROJET</span>
    <h2>${title}</h2>
    <p>${body}</p>
    <div class="modal-note"><strong>À retenir</strong><span>${note}</span></div>
    <button class="primary-button modal-action">Fermer</button>
  </div>`;
  document.body.append(modal);
  const close = () => modal.remove();
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.modal-close') || event.target.closest('.modal-action')) close();
  });
  document.addEventListener('keydown', function escape(event) {
    if (event.key === 'Escape') {
      close();
      document.removeEventListener('keydown', escape);
    }
  });
}

document.querySelectorAll('.pipeline-step').forEach((step, index) => {
  step.setAttribute('tabindex', '0');
  const open = () => openDetails(...pipelineDetails[index]);
  step.addEventListener('click', open);
  step.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });
});

document.querySelectorAll('.option-row').forEach((row) => {
  row.setAttribute('tabindex', '0');
  const name = row.querySelector('.option-name strong').textContent;
  const selectScenario = () => {
    document.querySelectorAll('.option-row').forEach((item) => item.classList.remove('selected'));
    row.classList.add('selected');
    document.querySelector('.recommendation-card h2').textContent = scenarioTitles[name];
    document.querySelector('.recommendation-card p').textContent = scenarioDetails[name];
    showToast(`${name} sélectionné comme scénario de travail`);
  };
  row.addEventListener('click', selectScenario);
  row.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectScenario();
    }
  });
});

document.querySelector('.text-button')?.addEventListener('click', () => {
  document.querySelector('.pipeline-step.highlight')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  showToast('Cliquez sur une étape pour afficher son détail');
});

document.querySelector('.project-picker')?.addEventListener('click', () => showToast('Projet actif : Hautes Bordes · Semoy'));
document.querySelector('.help-card')?.addEventListener('click', () => showToast('Le dossier contient les sources, hypothèses et critères de validation.'));
document.querySelectorAll('.more-button').forEach((button) => button.addEventListener('click', () => showToast('Menu d’actions disponible dans la version connectée')));
