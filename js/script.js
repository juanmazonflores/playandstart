function mostrarMensajeInicial() {

    if (confirm('Este sitio esta en desarrollo, disculpe las molestias')) {
      alert('Gracias por visitarnos!');
    } else {
      alert('...');
    }
  
  }
  

var swiper=new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper=new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        }
    }
        
});

let tabInputs=document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input){

    input.addEventListener('change',function(){
        let id=input.ariaValueMax;
        let thisSwiper=document.getElementById('swiper'+id)
        thisSwiper.swiper.update();
    })
})

document.addEventListener("DOMContentLoaded", () => {

    const scrollToBottomButtom = document.getElementById('btn-ir-arriba');
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToBottomButtom.style.display = 'block';
      } else {
        scrollToBottomButtom.style.display = 'none';
      }
    });
  
    scrollToBottomButtom.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        // behavior: 'smooth'
      });
    });
  
  });