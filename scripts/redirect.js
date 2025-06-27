let footerTimer = null;
let footerVisible = false;

function isFooterInView() {
  const footer = document.querySelector("footer");
  if (!footer) return false;
  const rect = footer.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function checkFooter() {
  if (isFooterInView()) {
    if (!footerVisible) {
      footerVisible = true;
      footerTimer = setTimeout(() => {
        window.location.href = "Modo.html";
      }, 5000);
    }
  } else {
    footerVisible = false;
    if (footerTimer) {
      clearTimeout(footerTimer);
      footerTimer = null;
    }
  }
}

window.addEventListener("scroll", checkFooter);
window.addEventListener("resize", checkFooter);
window.addEventListener("DOMContentLoaded", checkFooter);
