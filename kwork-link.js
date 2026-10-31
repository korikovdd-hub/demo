(function () {
  var url = (typeof window.KWORK_PROFILE_URL === 'string' && window.KWORK_PROFILE_URL) || 'KWORK_PROFILE_URL';
  document.querySelectorAll('[data-kwork]').forEach(function (el) {
    el.setAttribute('href', url);
    if (!el.getAttribute('target')) el.setAttribute('target', '_blank');
    if (!el.getAttribute('rel')) el.setAttribute('rel', 'noopener noreferrer');
  });
})();
