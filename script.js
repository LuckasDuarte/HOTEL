// Animator
AOS.init();

var swiper = new Swiper('.home-slider', {

    grabCursor: false,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Swipper Quartos
var swiper = new Swiper('.room-slider', {
    spaceBetween: 20,
    grabCursor: false,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        }
    }
});

// Galeria Fotos
var swiper = new Swiper('.gallery-slider', {
    spaceBetween: 10,
    grabCursor: false,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        }
    }
});


// Menu Mobile
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}



