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
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();
},{passive:true});


//::::::::::::::::::::Contador:::::

animarContador('cont1',1492,3000);
animarContador('cont2',4123,3000);
animarContador('cont3',7212,3000);
animarContador('cont4',63,3000);
