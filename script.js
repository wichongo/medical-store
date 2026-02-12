/* ============================
   MODAL PRODUCTOS
============================ */

function openProduct(product) {

    let content = "";

    if (product === "refrigerador") {
        content = `
        <h2>Refrigerador para Laboratorio</h2>

        <div class="carrusel-container">
            <button class="btn-carrusel prev">&#10094;</button>

            <div class="carrusel">
                <img src="https://www.frimed.it/content/images/prodotti/500x500/26_pn45-500x500.jpg" class="slide active">
                <img src="https://img.medicalexpo.com/images_me/photo-g/68527-8305029.jpg" class="slide">
                <img src="https://www.frimed.it/content/images/prodotti/500x500/28_sb10e.jpg" class="slide">
            </div>

            <button class="btn-carrusel next">&#10095;</button>
        </div>

        <p><strong>Capacidad:</strong> 450 Lt</p>
        <p><strong>Dimensiones:</strong> 180cm x 70cm x 60cm</p>
        <p><strong>Peso:</strong> 95kg</p>
        <p><strong>Temperatura:</strong> +2° +12°</p>

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

        <div class="carrusel-container">
            <button class="btn-carrusel prev">&#10094;</button>

            <div class="carrusel">
                <img src="https://biosan.lv/media/products/main/lmc-3000-_baLfTce.png.1200x1200_q85.png" class="slide active">
                <img src="https://cdn.medicalexpo.com/images_me/photo-g/69138-8478445.jpg" class="slide">
            </div>

            <button class="btn-carrusel next">&#10095;</button>
        </div>

        <p><strong>Velocidad:</strong> 4,000 RPM</p>
        <p><strong>Capacidad:</strong> 6 tubos</p>
        <p><strong>Peso:</strong> 12kg</p>

        <button class="btn">Descargar Ficha Técnica (PDF)</button>
        `;
    }

    document.getElementById("modalBody").innerHTML = content;
    document.getElementById("productModal").style.display = "flex";

    activarCarrusel(); // activar después de insertar contenido
}


function closeModal() {
    document.getElementById("productModal").style.display = "none";
}


/* ============================
   CIERRE MODAL
============================ */

window.addEventListener("click", function (event) {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


/* ============================
   CARRUSEL CON FADE
============================ */

function activarCarrusel() {

    let current = 0;

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (!slides.length || !nextBtn || !prevBtn) return;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    showSlide(current);

    nextBtn.addEventListener("click", function () {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prevBtn.addEventListener("click", function () {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });
}


/* ============================
   ANIMACIONES SCROLL
============================ */

document.addEventListener("DOMContentLoaded", function () {

    const featureBoxes = document.querySelectorAll(".feature-box");
    const counters = document.querySelectorAll(".counter");
    const faders = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (entry.target.classList.contains("feature-box")) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

                if (entry.target.classList.contains("fade-in")) {
                    entry.target.classList.add("active");
                }

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
   CONTADOR ANIMADO
============================ */

function animateCounter(counter) {

    const target = +counter.getAttribute("data-target");
    const duration = 2000;
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
