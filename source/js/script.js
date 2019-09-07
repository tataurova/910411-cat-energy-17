var navMain = document.querySelector('.page-header__row');
var navToggle = document.querySelector('.toggle');

navMain.classList.remove('page-header__row--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__row--closed')) {
    navMain.classList.remove('page-header__row--closed');
    navMain.classList.add('page-header__row--opened');
  } else {
    navMain.classList.add('page-header__row--closed');
    navMain.classList.remove('page-header__row--opened');
  }
});
