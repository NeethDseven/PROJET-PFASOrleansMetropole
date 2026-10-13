const leafletTabs = [...document.querySelectorAll('[role="tab"]')];

function selectLeaflet(tab) {
  leafletTabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}

leafletTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectLeaflet(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % leafletTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + leafletTabs.length) % leafletTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = leafletTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectLeaflet(leafletTabs[next]);
    leafletTabs[next].focus();
  });
});
