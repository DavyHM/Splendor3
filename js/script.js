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


