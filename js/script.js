import {animarContador} from './animacionContador.js';

const btnNav = document.getElementById("btn-nav");
btnNav.addEventListener("click", () => {
    const iopen = document.getElementById("i-open");
    const iclose = document.getElementById("i-close");
    iopen.classList.toggle("d-none");
    iclose.classList.toggle("d-none");
})


function cierraVentana() {
    if (window.innerWidth <= 991) {
            btnNav.click();
        }
}

const linksDelMenu = document.querySelectorAll('.navbar-nav .nav-item');
linksDelMenu.forEach(function(link) {
    link.addEventListener('click', cierraVentana);
});

document.addEventListener('DOMContentLoaded', function() {
    const images0 = document.querySelectorAll('.fade-in');
    const images1 = document.querySelectorAll('.fade-in-left');
    const images2 = document.querySelectorAll('.fade-in-right');

    function ponerDefault(images) {
        images.forEach(image => {
          const imageTop = image.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;
          if (imageTop < windowHeight) {
            image.classList.add("default");
          }
          if (imageTop > windowHeight || imageTop < 200) {
            image.classList.remove("default");
          }
        });
      }

      
      window.addEventListener('scroll', ()=> {
        ponerDefault(images0);
        ponerDefault(images1);
        ponerDefault(images2);
    },{passive:true});
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('exampleModal')
  if(modal === null){

  }else{
    var myModal = new bootstrap.Modal(modal);
    myModal.show();
  }

},{passive:true});


//::::::::::::::::::::Contador:::::

animarContador('cont1',1400,2000);
animarContador('cont2',4123,3000);
animarContador('cont3',7212,3000);
animarContador('cont4',63,3000);

//::::::::SAHRE

document.getElementById('whatsapp-button').addEventListener('click', function() {
  // Obtén el número de teléfono del atributo "data-number"
  var phoneNumber = 51990274852;

  // Abre el enlace de WhatsApp con el número de teléfono
  window.open('https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=Hola,%20quisiera%20ayudar!%20%F0%9F%98%8A', '_blank');
});