/*==================== MENU SHOW HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLink = document.querySelectorAll('.nav__link');

/*===== SHOW MENU =====*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

/*===== HIDE MENU =====*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}


/*==================== REMOVE MENU MOBILE ====================*/
function linkAction() {
  navMenu.classList.remove('show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction));


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/
