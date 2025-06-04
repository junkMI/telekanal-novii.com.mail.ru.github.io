const toggleBtn = document.getElementById('toggleEffectsBtn');
const tvOverlay = document.querySelector('.tv-overlay');
const scanlines = document.querySelector('.scanlines');

toggleBtn.addEventListener('click', () => {
    const isHidden = tvOverlay.classList.toggle('effects-hidden');
    scanlines.classList.toggle('effects-hidden');

    toggleBtn.textContent = isHidden ? 'Включить шум' : 'Выключить шум';
});