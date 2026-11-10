/* Headline tabs for the pipeline design page. Same behaviour as the Lab brief. Content only, no data calls. */
'use strict';
(function () {
  var hb = Array.prototype.slice.call(document.querySelectorAll('.hero-tabs button'));
  function show(n) {
    hb.forEach(function (b, i) {
      b.setAttribute('aria-selected', i === n);
      b.tabIndex = i === n ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = i !== n;
    });
  }
  hb.forEach(function (b, i) {
    b.addEventListener('click', function () { show(i); });
    b.addEventListener('keydown', function (e) {
      if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].indexOf(e.key) < 0) return;
      e.preventDefault();
      var n = (i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + hb.length) % hb.length;
      show(n); hb[n].focus();
    });
  });
})();
