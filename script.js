//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  hm.classList.toggle('active');
  e.preventDefault();
  
}

//klik di luar elemen
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target)) {
    navbarNav.classList.remove('active');
    hm.classList.remove('active');
  }
});