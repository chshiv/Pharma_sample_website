let searchForm=document.querySelector('.search-form')
document.querySelector("#search-btn").onclick=() =>{
    searchForm.classList.toggle('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

// login click

let loginForm=document.querySelector('.login-form')
document.querySelector("#login-btn").onclick=() =>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    navbar.classList.remove('active')
}

// Navbar click 
let navbar=document.querySelector('.navbar')
document.querySelector("#menu-btn").onclick=() =>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    loginForm.classList.remove('active')
}

window.onscroll=() =>{
    searchForm.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}


var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    centerSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    centerSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
