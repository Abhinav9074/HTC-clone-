document.addEventListener("DOMContentLoaded", function () {

    const mobile_nav = document.querySelector('.mobile-navbar-btn');
    const nav_header = document.querySelector('.header');
    const products = document.getElementById('products');
    const nav_drop_div = document.querySelector('.nav-drop-div');
    const header = document.querySelector('.header');
    const main_head = document.getElementsByClassName('header')[0]
    const navbar_link = document.getElementsByClassName('navbar-link')
    const icon = document.getElementsByClassName('search-icon')
    const search_icon = document.getElementById('searching-icon');
    const close_icon = document.getElementById('close-icon');
    const search_box = document.getElementById('searching-box');
    const tri_white = document.getElementById('tri-white');
    const drop_back = document.querySelector('.drop-background');
    const search_back = document.querySelector('.search-background');
    const video_button = document.getElementById('watch');
    const video_player = document.getElementsByClassName('frame-video')[0]
    const x_button = document.getElementById('x-button');
    const prodId = document.getElementById('prodId')
    const sitesId = document.getElementById('sitesId')
    const supportId = document.getElementById('supportId')
    const aboutId = document.getElementById('aboutId')
    const prodId_list = document.getElementById('prodId-list')
    const sitesId_list = document.getElementById('sitesId-list')
    const supportId_list = document.getElementById('supportId-list')
    const aboutId_list = document.getElementById('aboutId-list')
    var isOpen = 0

    mobile_nav.addEventListener('click', function () {
        nav_header.classList.toggle("active");
    })

    products.addEventListener('click', function () {
        const currentDisplayStyle = window.getComputedStyle(nav_drop_div).display;
        if (currentDisplayStyle === "none") {
            nav_drop_div.style.display = "block";
        } else {
            nav_drop_div.style.display = "none";
        }
    });

    products.addEventListener('mouseover', function () {
        nav_drop_div.style.display = "block";
        drop_back.style.display = "block";
    })

    products.addEventListener('mouseout', function () {
        nav_drop_div.style.display = "none";
        drop_back.style.display = "none";
    })

    header.addEventListener('mouseover', function () {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
        tri_white.style.display = "none";
        for (let i = 0; i < navbar_link.length; i++) {
            navbar_link[i].style.color = "#656565";
        }

        for (let j = 0; j < icon.length; j++) {
            icon[j].style.color = "#656565";
        }


    })

    header.addEventListener('mouseout', function () {
        if (isOpen == 0) {
            header.style.backgroundColor = "rgba(0, 0, 0, .5)"
            tri_white.style.display = "block";

            for (let i = 0; i < navbar_link.length; i++) {
                navbar_link[i].style.color = "#FFFFFF";
            }

            for (let j = 0; j < icon.length; j++) {
                icon[j].style.color = "#FFFFFF";
            }
        }
    })

    search_icon.addEventListener('click', function () {
        search_box.style.display = "block"
        close_icon.style.display = "block"
        search_back.style.display = "block"
        isOpen = 1
        console.log(isOpen)

    })

    close_icon.addEventListener('click', function () {

        search_box.value = ""
        search_box.style.display = "none"
        close_icon.style.display = "none"
        search_back.style.display = "none"
        isOpen = 0
    })

    video_button.addEventListener('click', function () {
        video_player.style.display = "block"
        x_button.style.display = "block"
    })

    x_button.addEventListener('click', function () {
        video_player.style.display = "none"
        x_button.style.display = "none"
    })


    prodId.addEventListener('click', function () {


        const currentDisplayStyle1 = window.getComputedStyle(prodId_list).display;
        if(currentDisplayStyle1 == "none"){
            prodId_list.style.display = "block"
        }else{
            prodId_list.style.display = "none"
        }

    })

    sitesId.addEventListener('click', function () {

        const currentDisplayStyle2 = window.getComputedStyle(sitesId_list).display;
        if(currentDisplayStyle2 == "none"){
            sitesId_list.style.display = "block"
        }else{
            sitesId_list.style.display = "none"
        }
        
    })

    supportId.addEventListener('click', function () {

        const currentDisplayStyle3 = window.getComputedStyle(supportId_list).display;
        if(currentDisplayStyle3 == "none"){
            supportId_list.style.display = "block"
        }else{
            supportId_list.style.display = "none"
        }
        
    })

    aboutId.addEventListener('click', function () {

        const currentDisplayStyle4 = window.getComputedStyle(aboutId_list).display;
        if(currentDisplayStyle4 == "none"){
            aboutId_list.style.display = "block"
        }else{
            aboutId_list.style.display = "none"
        }
        
    })










    /* Slider JS  */

    const sliderWrapper = document.querySelector('.slider-wrapper');
    const dotsContainer = document.querySelector('.slider-dots');
    const slides = document.querySelectorAll('.slider');
    let currentSlide = 0;

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
      updateActiveDot();
    }

    function previousSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
      updateActiveDot();
    }

    function updateActiveDot() {
      const dots = document.querySelectorAll('.slider-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Create progress dots
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      dot.addEventListener('click', () => {
        currentSlide = i;
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateActiveDot();
      });
      dotsContainer.appendChild(dot);
    }

    updateActiveDot();

    /* Slider JS END  */




});