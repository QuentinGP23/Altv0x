window.addEventListener("DOMContentLoaded", () => {
  const chrono = document.getElementById("Chrono");
  if (!chrono) return;
  const spans = chrono.querySelectorAll("span");
  let count = 5; // Commence à 5

  function updateChrono(val) {
    const valStr = val.toString().padStart(2, "0");
    spans[0].textContent = valStr[0];
    spans[1].textContent = valStr[1];
    // Le troisième span reste "S"
  }

  updateChrono(count);

  const interval = setInterval(() => {
    count--;
    if (count < 0) {
      clearInterval(interval);
      return;
    }
    updateChrono(count);
  }, 1000);
});
