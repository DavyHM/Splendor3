const btnNav = document.getElementById("btn-nav");
btnNav.addEventListener("click", () => {
    const iopen = document.getElementById("i-open");
    const iclose = document.getElementById("i-close");
    iopen.classList.toggle("d-none");
    iclose.classList.toggle("d-none");
})




window.addEventListener('load', cierraVentana);

function cierraVentana() {
    if (window.innerWidth <= 991) {
        var listaItems = document.querySelectorAll(".navbar-collapse li");
        for (var i = 0; i < listaItems.length; i++) {
            listaItems[i].addEventListener("click", () => {
                btnNav.click();
            });
        }
    }
}

