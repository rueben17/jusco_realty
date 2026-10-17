// Jusco Realtors — small vanilla behaviours: mobile menu, listing filters, viewing booking form.
(function () {
  // Mobile menu
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('hidden') === false;
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Listing filters (listings.html). Cards carry data-area/-type/-status/-beds/-price.
  var filters = document.getElementById('filters');
  var grid = document.getElementById('listing-grid');
  if (filters && grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-listing]'));
    var countEl = document.getElementById('result-count');
    var emptyEl = document.getElementById('no-results');
    var clearBtn = document.getElementById('clear-filters');

    // Pre-fill from the URL (home search and neighbourhood links use ?status=&area=&type=)
    var params = new URLSearchParams(location.search);
    ['area', 'type', 'beds', 'sort'].forEach(function (k) { if (params.get(k) && filters.elements[k]) filters.elements[k].value = params.get(k); });
    if (params.get('status')) { var r = filters.querySelector('input[name=status][value="' + params.get('status') + '"]'); if (r) r.checked = true; }

    function apply() {
      var f = filters.elements;
      var status = filters.querySelector('input[name=status]:checked').value;
      var area = f.area.value, type = f.type.value, beds = Number(f.beds.value), sort = f.sort.value;
      var shown = cards.filter(function (c) {
        var ok = (!status || c.dataset.status === status) && (!area || c.dataset.area === area) &&
                 (!type || c.dataset.type === type) && Number(c.dataset.beds) >= beds;
        c.classList.toggle('hidden', !ok);
        return ok;
      });
      cards.slice().sort(function (a, b) {
        if (sort === 'price-asc') return a.dataset.price - b.dataset.price;
        if (sort === 'beds') return b.dataset.beds - a.dataset.beds;
        return b.dataset.price - a.dataset.price;
      }).forEach(function (c) { grid.appendChild(c); });
      countEl.textContent = shown.length + (shown.length === 1 ? ' home' : ' homes');
      emptyEl.classList.toggle('hidden', shown.length > 0);
      clearBtn.classList.toggle('hidden', !(status || area || type || beds));
    }
    filters.addEventListener('change', apply);
    filters.addEventListener('submit', function (e) { e.preventDefault(); });
    clearBtn.addEventListener('click', function () {
      filters.reset();
      history.replaceState(null, '', location.pathname);
      apply();
    });
    apply();
  }

  // Booking form (contact.html)
  var form = document.getElementById('booking-form');
  if (form) {
    var success = document.getElementById('booking-success');
    var today = new Date().toISOString().slice(0, 10);
    form.elements.date.min = today;
    var pre = new URLSearchParams(location.search).get('property');
    if (pre) form.elements.property.value = pre;

    var rules = {
      name: function (v) { return v.trim().length > 0; },
      phone: function (v) { return v.replace(/\D/g, '').length >= 9; },
      email: function (v) { return /^\S+@\S+\.\S+$/.test(v); },
      date: function (v) { return !!v && v >= today; },
    };
    function check(name) {
      var el = form.elements[name], ok = rules[name](el.value);
      el.setAttribute('aria-invalid', String(!ok));
      form.querySelector('[data-error-for="' + name + '"]').classList.toggle('hidden', ok);
      return ok;
    }
    Object.keys(rules).forEach(function (n) {
      form.elements[n].addEventListener('input', function () { if (this.getAttribute('aria-invalid') === 'true') check(n); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = Object.keys(rules).map(check).every(Boolean);
      if (!valid) { form.querySelector('[aria-invalid="true"]').focus(); return; }
      var f = form.elements, sel = f.property;
      var d = new Date(f.date.value + 'T12:00:00');
      var out = {
        ref: 'V-' + Math.floor(1000 + Math.random() * 9000),
        first: f.name.value.trim().split(/\s+/)[0],
        phone: f.phone.value,
        property: sel.value ? sel.options[sel.selectedIndex].text : 'General enquiry',
        when: d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }) + ' · ' + form.querySelector('input[name=time]:checked').value,
      };
      // TODO: POST the form data to your backend / CRM here.
      Object.keys(out).forEach(function (k) { success.querySelector('[data-out="' + k + '"]').textContent = out[k]; });
      form.classList.add('hidden');
      success.classList.remove('hidden');
    });
    document.getElementById('booking-reset').addEventListener('click', function () {
      form.reset();
      if (pre) form.elements.property.value = pre;
      success.classList.add('hidden');
      form.classList.remove('hidden');
    });
  }
  // Page transitions: fade out + spinner on navigate, fade in on load
  var spinner = document.getElementById('page-spinner');
  var navigating = false;

  function hideSpinner() {
    if (spinner) spinner.classList.add('done');
    navigating = false;
  }

  function showSpinner() {
    if (spinner) spinner.classList.remove('done');
  }

  hideSpinner();

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.origin !== location.origin || e.ctrlKey || e.metaKey || e.shiftKey || navigating) return;
    e.preventDefault();
    navigating = true;
    showSpinner();
    setTimeout(function () { location.href = a.href; }, 300);
  });

  window.addEventListener('pageshow', hideSpinner);
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) hideSpinner();
  });
})();
