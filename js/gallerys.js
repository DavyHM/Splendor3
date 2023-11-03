const elementosCambio = document.querySelectorAll('.origen_img');
  
  // Agrega un manejador de clic genérico para todos los elementos
  elementosCambio.forEach(elemento => {
    elemento.addEventListener('click', function () {
      // Obtiene el valor de "data-src" personalizado del elemento
      const newSrc = this.getAttribute('src');
      
      // Actualiza la imagen del "mostrador" con el nuevo "data-src"
      const mostrador = document.querySelector('.mostrador');
      mostrador.src = newSrc;
    });
  });