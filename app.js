const $ = (selector) => document.querySelector(selector);
const fmt = (value, digits = 0) => value.toLocaleString('fr-FR', { minimumFractionDigits: digits, maximumFractionDigits: digits });
const num = (selector) => Math.max(0, Number($(selector).value) || 0);

// ---------- Navigation par livrable ----------
const views = [...document.querySelectorAll('.view')];
const tabs = [...document.querySelectorAll('.tabs a')];

function showView() {
  const id = location.hash.slice(1);
  const current = views.find((view) => view.id === id) || views[0];
  views.forEach((view) => view.classList.toggle('active', view === current));
  tabs.forEach((tab) => tab.classList.toggle('active', tab.getAttribute('href') === `#${current.id}`));
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', showView);
showView();

// ---------- Tableaux ----------
document.querySelectorAll('[data-table]').forEach((holder) => {
  if (!TABLES[holder.dataset.table]) return;
  const { head, rows } = TABLES[holder.dataset.table];
  const body = rows.map((row) => `<tr>${row.map((cell, i) => `<td data-label="${head[i]}">${cell}</td>`).join('')}</tr>`).join('');
  holder.className = 'table-wrap stack';
  holder.innerHTML = `<table><thead><tr>${head.map((cell) => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>`;
});

// ---------- Scénarios techniques ----------
const scenarioTabs = $('#scenarioTabs');

function showScenario(index) {
  const scenario = SCENARIOS[index];
  [...scenarioTabs.children].forEach((button, i) => button.setAttribute('aria-selected', i === index));
  $('#scenarioPanel').innerHTML = `
    <span class="tag">${scenario.status}</span>
    <h3>${scenario.title}</h3>
    <ol class="chain">${scenario.chain.map((step) => `<li>${step}</li>`).join('')}</ol>
    <p>${scenario.text}</p>
    <p class="small-note"><b>Condition de validation :</b> ${scenario.validation}</p>`;
}

SCENARIOS.forEach((scenario, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('role', 'tab');
  button.textContent = scenario.name;
  button.addEventListener('click', () => showScenario(index));
  scenarioTabs.append(button);
});
showScenario(0);

// ---------- Volume de média ----------
function updateMedia() {
  $('#mediaOut').textContent = `${fmt(num('#mediaFlow') * num('#mediaTime') / 60, 2)} m³`;
}

// ---------- Matrice pondérée ----------
function renderMatrixTable() {
  const head = ['Critère', 'Poids', ...MATRIX.options];
  const rows = MATRIX.criteria.map((criterion) => [criterion.label, `${criterion.weight} %`, ...criterion.notes]);
  const body = rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('');
  const holder = document.querySelector('[data-table="matrix"]');
  holder.className = 'table-wrap';
  holder.innerHTML = `<table class="compact"><thead><tr>${head.map((cell) => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>`;
}

function updateMatrix() {
  const costWeight = Number($('#costWeight').value);
  const shift = 25 - costWeight;
  const weights = { cost: costWeight, eff: 30 + shift * 2 / 3, site: 15 + shift / 3 };
  const costNotes = [Number($('#costCag').value), Number($('#costResin').value), 2, 2];

  const scores = MATRIX.options.map((option, i) => {
    const total = MATRIX.criteria.reduce((sum, criterion) => {
      const weight = weights[criterion.key] ?? criterion.weight;
      const note = criterion.key === 'cost' ? costNotes[i] : criterion.notes[i];
      return sum + weight * note;
    }, 0);
    return { option, score: total / 5 };
  });

  const ranked = [...scores].sort((a, b) => b.score - a.score);
  $('#costWeightOut').textContent = `${costWeight} %`;
  $('#matrixScores').innerHTML = ranked.map(({ option, score }) => `
    <div class="score-row"><span>${option}</span><div class="score-bar"><i style="width:${score}%"></i></div><b>${fmt(score, Number.isInteger(score) ? 0 : 1)}</b></div>`).join('');

  const gap = ranked[0].score - ranked[1].score;
  $('#matrixVerdict').textContent = gap === 0
    ? `${ranked[0].option} et ${ranked[1].option} sont à égalité : la matrice ne départage pas les options.`
    : `${ranked[0].option} en tête avec ${fmt(gap, 1)} point${gap >= 2 ? 's' : ''} d’avance sur ${ranked[1].option}. L’écart reste faible au regard de notes qualitatives : seuls des essais et des devis comparables peuvent trancher.`;
}

// ---------- Coût actualisé ----------
const ANNUITY = 0.03 / (1 - 1.03 ** -20);

function updateCost() {
  const volume = num('#simVolume');
  const net = Math.max(0, num('#simCapex') - num('#simGrant') - num('#simPolluter'));
  const annuity = net * ANNUITY;
  const opexYear = volume * num('#simOpex');
  const total = annuity + opexYear;
  $('#simNet').textContent = `${fmt(net)} €`;
  $('#simAnnuity').textContent = `${fmt(annuity)} €/an`;
  $('#simOpexYear').textContent = `${fmt(opexYear)} €/an`;
  $('#simTotal').textContent = `${fmt(total)} €/an`;
  $('#simPerM3').textContent = volume ? `${fmt(total / volume, 3)} €/m³` : '—';
}

// ---------- ELIXIR ----------
function updateElixir() {
  const volume = num('#elxFlow') * 365;
  const units = Math.ceil(volume / 1200);
  $('#elxVolume').textContent = `${fmt(volume)} m³`;
  $('#elxUnits').textContent = fmt(units);
  $('#elxService').textContent = `${fmt(volume * 1000)} € HT/an`;
  $('#elxRent').textContent = `${fmt(units * 480000)} € HT/an`;
  $('#elxBuy').textContent = `${fmt(units * 3000000)} € HT`;
  $('#elxEnergy').textContent = `${fmt(volume * 250 * num('#elxPower'))} €/an`;
}

$('#elxPresets').addEventListener('click', (event) => {
  const flow = event.target.dataset.flow;
  if (!flow) return;
  $('#elxFlow').value = flow;
  updateElixir();
});

// ---------- Liaisons ----------
const bindings = [
  [['#mediaFlow', '#mediaTime'], updateMedia],
  [['#costWeight', '#costCag', '#costResin'], updateMatrix],
  [['#simCapex', '#simVolume', '#simOpex', '#simGrant', '#simPolluter'], updateCost],
  [['#elxFlow', '#elxPower'], updateElixir],
];

renderMatrixTable();
bindings.forEach(([selectors, update]) => {
  selectors.forEach((selector) => $(selector).addEventListener('input', update));
  update();
});

// ---------- Sources ----------
$('#sourceList').innerHTML = SOURCES.map(({ group, items }) => `
  <h2>${group}</h2>
  <ul class="sources">${items.map(([ref, label, url]) => `
    <li><b>${ref}</b>${url ? `<a href="${url}" target="_blank" rel="noopener">${label}</a>` : `<span>${label}</span>`}</li>`).join('')}
  </ul>`).join('');
