(function () {
  var header = document.getElementById('siteHeader');
  var navToggle = document.getElementById('navToggle');
  var headerNav = document.getElementById('headerNav');
  var lastScroll = 0;

  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = scrollTop;
  });

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      headerNav.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }
})();
