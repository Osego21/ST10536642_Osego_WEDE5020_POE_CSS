document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });

  // Close menu when clicking a link (mobile)
  navMenu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      if(window.innerWidth <= 768){
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
      }
    });
  });

  // Reset on resize to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});