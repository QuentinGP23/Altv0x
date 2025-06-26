 window.addEventListener('DOMContentLoaded', () => {
  const marquee = document.querySelector('.marquee__inner');
  if (marquee && marquee.children.length === 1) {
    marquee.innerHTML += marquee.innerHTML;
  }
});