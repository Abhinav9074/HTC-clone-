document.addEventListener("DOMContentLoaded", function() {

const mobile_nav = document.querySelector('.mobile-navbar-btn');
const nav_header = document.querySelector('.header');
const products = document.getElementById('products');
const nav_drop_div = document.querySelector('.nav-drop-div');

mobile_nav.addEventListener('click', function(){
    nav_header.classList.toggle("active");
})

products.addEventListener('click', function() {
    const currentDisplayStyle = window.getComputedStyle(nav_drop_div).display;
    if (currentDisplayStyle === "none") {
        nav_drop_div.style.display = "block";
    } else {
        nav_drop_div.style.display = "none";
    }
});

products.addEventListener('mouseover', function() {
    nav_drop_div.style.display = "block";
})

products.addEventListener('mouseout', function() {
    nav_drop_div.style.display = "none";
})

});