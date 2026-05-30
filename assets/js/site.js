(function () {
  // Only activate on touch devices
  if (window.matchMedia('(hover: hover)').matches) return;

  var triggers = document.querySelectorAll('.hover-image-text');

  triggers.forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (!el.classList.contains('is-open')) {
        // First tap: preview the image, don't follow the link yet
        e.preventDefault();
        // Close any other open previews
        triggers.forEach(function (other) {
          if (other !== el) other.classList.remove('is-open');
        });
        el.classList.add('is-open');
      }
      // Second tap: is-open is already set, let the default click go through
    });
  });

  // Tap outside closes all previews
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.hover-image-text')) {
      triggers.forEach(function (el) { el.classList.remove('is-open'); });
    }
  });
}());
