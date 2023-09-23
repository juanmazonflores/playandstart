
//BOTON ARRIBA
function mostrarMensajeInicial() {

    if (confirm('Este sitio esta en desarrollo, disculpe las molestias')) {
      alert('Gracias por visitarnos!');
    } else {
      alert('...');
    }
  
  }
  

//DESLIZAMIENTO DE BANNER 
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

//DESLIZAMIENTO DE PELICULAS 
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
        750:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        }
    }
        
});

//BOTON ARRIBA

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

//RECUPERAR INFORMACION DE FORMULARIO
const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  alert('Gracias por contactarnos - Nombre: ' + nombre + '- Email: ' + email + '- Mensaje: ' + mensaje);

  contactoForm.reset();
});
