$(document).ready(function () {
    $('.icon-menu').click(function () {
        $('.icon-menu').toggleClass('bx-x')
    })
})

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: false,
    spaceBetween: 30,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },  
    navigation: {
        nextEl: ".bxs-chevron-left-circle",
        prevEl: ".bxs-chevron-right-circle",
      },
  });

  const navbar = document.getElementsByTagName('nav')[0];
  window.addEventListener('scroll', function() {
      console.log(window.scrollY);
      if (window.scrollY > 1) {
          navbar.classList.replace('bg-transparent', 'nav-color');
      } else if (this.window.scrollY <= 0){
          navbar.classList.replace('nav-color', 'bg-transparent')
      }
  });