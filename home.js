// Set body height to actual viewport height on iPhone
function setFullHeight() {
  const vh = window.innerHeight; // visible viewport height
  document.body.style.height = `${vh}px`;
}

// Set initially
setFullHeight();

// Update on resize / orientation change
window.addEventListener('resize', setFullHeight);
