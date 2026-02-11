/* ============================
   MODAL PRODUCTOS
============================ */

function openProduct(product) {

    let content = "";

    if (product === "refrigerador") {
        content = `
        <h2>Refrigerador RL-500</h2>
        <div class="gallery">
            <img src="https://www.frimed.it/content/images/prodotti/500x500/82_500x500-pn45v-es-rev02.jpg">
        </div>
        <p><strong>Capacidad:</strong> 450 Lt </p>
        <p><strong>Dimensiones:</strong> 180cm x 70cm x 60cm</p>
        <p><strong>Peso:</strong> 95kg</p>
        <p><strong>Temperatura:</strong> +2° + 12°</p>
        <a href="assets/pdf/Refrigerador Frimed.pdf"
        target="_blank"
        class="btn">
        Descargar Ficha Técnica (PDF)
        </a>
        `;
    }

    if (product === "centrifuga") {
        content = `
        <h2>Centrifugadora CF-3000</h2>
        <div class="gallery">
            <img src="https://biosan.lv/media/products/main/lmc-3000-_baLfTce.png.1200x1200_q85.png">
        </div>
        <p><strong>Velocidad:</strong> 4,000 RPM</p>
        <p><strong>Capacidad:</strong> 6 tubos</p>
        <p><strong>Peso:</strong> 12kg</p>
        <button class="btn">Descargar Ficha Técnica (PDF)</button>
        `;
    }

    document.getElementById("modalBody").innerHTML = content;
    document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

/* Cerrar modal haciendo click afuera */
window.addEventListener("click", function (event) {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

/* Cerrar con tecla ESC */
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


/* ============================
   ANIMACIONES SCROLL (OPTIMIZADO)
============================ */

document.addEventListener("DOMContentLoaded", function () {

    const featureBoxes = document.querySelectorAll(".feature-box");
    const counters = document.querySelectorAll(".counter");
    const faders = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                /* Animación Feature Boxes */
                if (entry.target.classList.contains("feature-box")) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

                /* Animación Fade-in */
                if (entry.target.classList.contains("fade-in")) {
                    entry.target.classList.add("active");
                }

                /* Animación Contador */
                if (entry.target.classList.contains("counter")) {
                    animateCounter(entry.target);
                }

                observer.unobserve(entry.target);
            }
        });

    }, { threshold: 0.3 });

    featureBoxes.forEach(box => observer.observe(box));
    faders.forEach(el => observer.observe(el));
    counters.forEach(counter => observer.observe(counter));

});


/* ============================
   FUNCIÓN CONTADOR
============================ */

function animateCounter(counter) {

    const target = +counter.getAttribute("data-target");
    const duration = 2000; // duración total animación
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    let current = 0;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            counter.innerText = target;
            clearInterval(timer);
        } else {
            counter.innerText = Math.ceil(current);
        }

    }, stepTime);
}
