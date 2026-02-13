/* ============================
   MODAL PRODUCTOS - v1.5
============================ */

function openProduct(product) {
    let content = "";

    if (product === "refrigerador") {
        content = `
            <h2>Refrigerador para Laboratorio</h2>
            <div class="carrusel-container">
                <button class="btn-carrusel prev">&#10094;</button>
                <div class="carrusel">
                    <img src="https://www.frimed.it/content/images/prodotti/500x500/26_pn45-500x500.jpg" class="slide active" alt="Refrigerador vista frontal">
                    <img src="https://img.medicalexpo.com/images_me/photo-g/68527-8305029.jpg" class="slide" alt="Refrigerador interior">
                    <img src="https://www.frimed.it/content/images/prodotti/500x500/28_sb10e.jpg" class="slide" alt="Refrigerador detalle">
                </div>
                <button class="btn-carrusel next">&#10095;</button>
            </div>
            <p><strong>Capacidad:</strong> 450 Lt</p>
            <p><strong>Dimensiones:</strong> 180cm x 70cm x 60cm</p>
            <p><strong>Peso:</strong> 95kg</p>
            <p><strong>Temperatura:</strong> +2° a +12°</p>
            <div class="btn-center">
                <a href="assets/pdf/Refrigerador Frimed.pdf" target="_blank" class="btn">Descargar Ficha Técnica (PDF)</a>
            </div>
        `;
    }

    if (product === "centrifuga") {
        content = `
            <h2>Centrifugadora CF-3000</h2>
            <div class="carrusel-container">
                <button class="btn-carrusel prev">&#10094;</button>
                <div class="carrusel">
                    <img src="https://biosan.lv/media/products/main/lmc-3000-_baLfTce.png.1200x1200_q85.png" class="slide active" alt="Centrifugadora vista principal">
                    <img src="https://cdn.medicalexpo.com/images_me/photo-g/69138-8478445.jpg" class="slide" alt="Centrifugadora en uso">
                </div>
                <button class="btn-carrusel next">&#10095;</button>
            </div>
            <p><strong>Velocidad:</strong> 4,000 RPM</p>
            <p><strong>Capacidad:</strong> 6 tubos</p>
            <p><strong>Peso:</strong> 12kg</p>
            <div class="btn-center">
                <a href="assets/pdf/Centrifugadora_CF-3000.pdf" target="_blank" class="btn">Descargar Ficha Técnica (PDF)</a>
            </div>
        `;
    }

    if (product === "monitor") {
        content = `
            <h2>Monitor Multiparámetro MP-500</h2>
            <div class="carrusel-container">
                <button class="btn-carrusel prev">&#10094;</button>
                <div class="carrusel">
                    <img src="https://www.somatechnology.com/spanish/wp-content/uploads/sites/2/2018/08/monitores-multiparametros-Philips-IntelliVue-MX500.jpg" class="slide active" alt="Monitor multiparámetro principal">
                </div>
                <button class="btn-carrusel next">&#10095;</button>
            </div>
            <p><strong>Pantalla:</strong> 12.1" TFT color táctil</p>
            <p><strong>Parámetros:</strong> ECG, SPO2, NIBP, Temp, Resp, EtCO2 (opcional)</p>
            <p><strong>Batería:</strong> Hasta 4 horas</p>
            <div class="btn-center">
                <a href="assets/pdf/Monitor_MP-500.pdf" target="_blank" class="btn">Descargar Ficha Técnica (PDF)</a>
            </div>
        `;
    }

    if (product === "sangre") {
        content = `
            <h2>Refrigerador de Sangre y Componentes 300L</h2>
            <div class="carrusel-container">
                <button class="btn-carrusel prev">&#10094;</button>
                <div class="carrusel">
                    <img src="https://img.medicalexpo.es/images_me/photo-g/95441-20611662.jpg" class="slide active" alt="Refrigerador de sangre principal">
                </div>
                <button class="btn-carrusel next">&#10095;</button>
            </div>
            <p><strong>Capacidad:</strong> 300 Litros</p>
            <p><strong>Temperatura:</strong> +2°C a +6°C</p>
            <p><strong>Sistema:</strong> Compresor ecológico, alarma</p>
            <div class="btn-center">
                <a href="assets/pdf/Refrigerador_Sangre_300L.pdf" target="_blank" class="btn">Descargar Ficha Técnica (PDF)</a>
            </div>
        `;
    }

    if (product === "espectro") {
        content = `
            <h2>Espectrofotómetro UV-Vis DR-3900</h2>
            <div class="carrusel-container">
                <button class="btn-carrusel prev">&#10094;</button>
                <div class="carrusel">
                    <img src="https://i0.wp.com/hachfeld.co.ke/wp-content/uploads/2022/03/DR3900-VIS-by-hachfeld-2.jpg?resize=300%2C300&ssl=1" class="slide active" alt="Espectrofotómetro DR-3900">
                </div>
                <button class="btn-carrusel next">&#10095;</button>
            </div>
            <p><strong>Rango:</strong> 190–1100 nm</p>
            <p><strong>Ancho de banda:</strong> 5 nm</p>
            <p><strong>Métodos:</strong> +220 preprogramados</p>
            <div class="btn-center">
                <a href="assets/pdf/Espectrofotometro_DR-3900.pdf" target="_blank" class="btn">Descargar Ficha Técnica (PDF)</a>
            </div>
        `;
    }

    if (product === "hematologico") {
        content = `
            <h2>Analizador Hematológico BC-6200</h2>
            <div class="carrusel-container">
                <button class="btn-carrusel prev">&#10094;</button>
                <div class="carrusel">
                    <img src="https://labymed.com.gt/wp-content/uploads/2025/02/BC6200MINDRAY.jpg" class="slide active" alt="Analizador hematológico BC-6200">
                </div>
                <button class="btn-carrusel next">&#10095;</button>
            </div>
            <p><strong>Parámetros:</strong> 29 parámetros + histogramas</p>
            <p><strong>Velocidad:</strong> Hasta 110 muestras/hora</p>
            <p><strong>Volumen:</strong> 80 µL</p>
            <div class="btn-center">
                <a href="assets/pdf/Analizador_BC-6200.pdf" target="_blank" class="btn">Descargar Ficha Técnica (PDF)</a>
            </div>
        `;
    }

    document.getElementById("modalBody").innerHTML = content;
    document.getElementById("productModal").style.display = "flex";
    activarCarrusel();
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

/* Cierre modal por clic fuera o Esc */
window.addEventListener("click", (event) => {
    const modal = document.getElementById("productModal");
    if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
});

/* ============================
   CARRUSEL CON FADE (sin duplicados)
============================ */

function activarCarrusel() {
    const slides = document.querySelectorAll("#modalBody .slide");
    let nextBtn = document.querySelector("#modalBody .next");
    let prevBtn = document.querySelector("#modalBody .prev");

    if (!slides.length || !nextBtn || !prevBtn) return;

    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    showSlide(current);

    // Clonar botones para evitar listeners duplicados
    const nextClone = nextBtn.cloneNode(true);
    const prevClone = prevBtn.cloneNode(true);
    nextBtn.replaceWith(nextClone);
    prevBtn.replaceWith(prevClone);

    nextClone.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prevClone.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });
}

/* ============================
   ANIMACIONES SCROLL + CONTADOR
============================ */

document.addEventListener("DOMContentLoaded", () => {
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

/* ============================
   FILTROS DE PRODUCTOS
============================ */

const filtroBtns = document.querySelectorAll(".filtro-btn");
const cards = document.querySelectorAll(".card");

filtroBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filtroBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        cards.forEach(card => {
            const category = card.getAttribute("data-category")?.toLowerCase().trim();
            card.style.display = (filter === "all" || category === filter) ? "block" : "none";
        });
    });
});