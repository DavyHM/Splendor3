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
    });
});

document.addEventListener('DOMContentLoaded', function() {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();
});

//:::::::::::::::::

function aplicarMargenes() {
  const contenedores = document.querySelectorAll(".vh-80");

  contenedores.forEach(function(contenedor) {
    if (contenedor.scrollHeight > (0.8 * window.innerHeight) && window.innerWidth > 991) {
      contenedor.style.marginBottom = "24px";
      contenedor.style.marginTop = "8px";
    } else {
      // Si no se cumplen las condiciones, eliminar los márgenes
      contenedor.style.marginBottom = "";
      contenedor.style.marginTop = "";
    }
  });
}

// Ejecutar la función al cargar la página
window.addEventListener("load", aplicarMargenes);

// Ejecutar la función al redimensionar la ventana
window.addEventListener("resize", aplicarMargenes);
