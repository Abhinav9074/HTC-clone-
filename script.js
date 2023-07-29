const mobile_nav = document.querySelector('.mobile-navbar-btn');
const nav_header = document.querySelector('.header');

mobile_nav.addEventListener('click', function(){
    nav_header.classList.toggle("active");
})