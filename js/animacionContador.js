export function animarContador(idSpan, valorFinal, duracionAnimacion) {
    const contadorSpan = document.getElementById(idSpan);
    let tiempoInicio;
    let contadorIniciado = false;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !contadorIniciado) {
                contadorIniciado = true;
                observer.unobserve(contadorSpan);
                iniciarContador();
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(contadorSpan);

    function iniciarContador() {
        tiempoInicio = performance.now();
        contadorSpan.style.opacity = 1;
        actualizarContador();
    }

    function actualizarContador() {
        const tiempoActual = performance.now();
        const tiempoTranscurrido = tiempoActual - tiempoInicio;

        if (tiempoTranscurrido >= duracionAnimacion) {
            contadorSpan.textContent = valorFinal;
        } else {
            const valorActual = Math.round((valorFinal / duracionAnimacion) * tiempoTranscurrido);
            contadorSpan.textContent = valorActual;
            requestAnimationFrame(actualizarContador);
        }
    }
}
