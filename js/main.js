/* ==========================================================================
   MEDICAL HEALTHCARE - Lógica del sitio
   Requiere cargar antes:  js/productos-data.js (en todas las páginas)
   ========================================================================== */

const WHATSAPP_NUMERO = "51942736112";

/* --------------------------------------------------------------------------
   Utilidades
   -------------------------------------------------------------------------- */
function enlaceWhatsApp(mensaje) {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

function buscarProducto(id) {
    return PRODUCTOS.find((p) => p.id === id);
}

/* --------------------------------------------------------------------------
   Menú "Productos": se genera desde CATEGORIAS (js/productos-data.js),
   así una categoría nueva aparece sola en el menú de todas las páginas.
   -------------------------------------------------------------------------- */
document.querySelectorAll(".dropdown-content").forEach((menu) => {
    menu.innerHTML = '<a href="productos.html">Todos los productos</a>' + Object.entries(CATEGORIAS)
        .map(([clave, nombre]) => `<a href="productos.html#${clave}">${nombre}</a>`)
        .join("");
});

/* Menú accesible con ratón, teclado y pantalla táctil. */
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    const button = dropdown.querySelector('.dropbtn');
    const menu = dropdown.querySelector('.dropdown-content');
    const setOpen = (open) => {
        button.setAttribute('aria-expanded', String(open));
        menu.hidden = !open;
    };
    button.addEventListener('click', () => setOpen(menu.hidden));
    dropdown.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !menu.hidden) {
            setOpen(false);
            button.focus();
        }
    });
    dropdown.addEventListener('focusout', (event) => {
        if (!dropdown.contains(event.relatedTarget)) setOpen(false);
    });
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) || event.target.closest('.dropdown-content a')) setOpen(false);
    });
});

/* --------------------------------------------------------------------------
   Cards de producto
   -------------------------------------------------------------------------- */
function crearCard(p) {
    const etiqueta = MOSTRAR_MARCA ? `${p.marca} · ${p.modelo}` : p.modelo;
    return `
        <article class="card" data-category="${p.categoria}">
            <img src="${p.imagen}" alt="${p.nombre} ${p.marca} ${p.modelo}" loading="lazy">
            <p class="card-marca">${etiqueta}</p>
            <h3>${p.nombre}</h3>
            <button class="btn" type="button" data-producto="${p.id}">Ver Detalles</button>
        </article>
    `;
}

function mostrarProductos(contenedor, lista) {
    contenedor.innerHTML = lista.map(crearCard).join("");
}

/* --------------------------------------------------------------------------
   Modal de detalles
   -------------------------------------------------------------------------- */
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");

function crearModalHTML(p) {
    const specs = p.specs
        .map(([nombre, valor]) => `<tr><th>${nombre}</th><td>${valor}</td></tr>`)
        .join("");
    const caracteristicas = p.caracteristicas.map((c) => `<li>${c}</li>`).join("");
    const mensaje = `Hola, quiero cotizar el ${p.nombre} ${p.marca} ${p.modelo}`;

    return `
        <p class="modal-marca">${MOSTRAR_MARCA ? p.marca + " · " : ""}${CATEGORIAS[p.categoria]}</p>
        <h2 id="product-title">${p.nombre}</h2>
        <p class="modal-modelo">${p.modeloDetalle || "Modelo " + p.modelo}</p>
        <img class="modal-img" src="${p.imagen}" alt="${p.nombre} ${p.marca} ${p.modelo}">
        <p class="modal-resumen">${p.resumen}</p>

        <h3>Especificaciones técnicas</h3>
        <table class="spec-table"><tbody>${specs}</tbody></table>

        <h3>Características</h3>
        <ul class="feature-list">${caracteristicas}</ul>

        <div class="btn-center">
            <a href="${p.ficha}" target="_blank" rel="noopener" class="btn">
                <i class="fa-solid fa-file-pdf"></i> Ver ficha técnica (PDF)
            </a>
            <a href="${enlaceWhatsApp(mensaje)}" target="_blank" rel="noopener" class="btn secondary-dark">
                <i class="fa-brands fa-whatsapp"></i> Cotizar por WhatsApp
            </a>
        </div>
    `;
}

function abrirModal(id) {
    const producto = buscarProducto(id);
    if (!producto || !modal) return;

    modalBody.innerHTML = crearModalHTML(producto);
    modal.showModal();
    modal.querySelector(".modal-content").scrollTop = 0;
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    if (!modal || !modal.open) return;
    modal.close();
    document.body.style.overflow = "";
}

if (modal) {
    modal.addEventListener('close', () => { document.body.style.overflow = ''; });
}

/* Un solo listener para todos los botones "Ver Detalles" (presentes y futuros) */
document.addEventListener("click", (e) => {
    const boton = e.target.closest("[data-producto]");
    if (boton) abrirModal(boton.dataset.producto);

    if (e.target === modal || e.target.closest(".close")) cerrarModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
});

/* --------------------------------------------------------------------------
   Página de inicio: productos destacados
   -------------------------------------------------------------------------- */
const contenedorDestacados = document.getElementById("productos-destacados");

if (contenedorDestacados) {
    const destacados = DESTACADOS.map(buscarProducto).filter(Boolean);
    mostrarProductos(contenedorDestacados, destacados);
}

/* --------------------------------------------------------------------------
   Página de productos: catálogo + filtros por categoría
   -------------------------------------------------------------------------- */
const contenedorCatalogo = document.getElementById("catalogo");
const contenedorFiltros = document.getElementById("filtros");

function aplicarFiltro(categoria) {
    const lista = categoria === "all"
        ? PRODUCTOS
        : PRODUCTOS.filter((p) => p.categoria === categoria);

    mostrarProductos(contenedorCatalogo, lista);

    contenedorFiltros.querySelectorAll(".filtro-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.filter === categoria);
        btn.setAttribute("aria-pressed", String(btn.dataset.filter === categoria));
    });
}

if (contenedorCatalogo && contenedorFiltros) {
    /* Botones generados desde CATEGORIAS */
    const botones = [["all", "Todos"], ...Object.entries(CATEGORIAS)]
        .map(([clave, nombre]) => `<button class="filtro-btn" type="button" data-filter="${clave}">${nombre}</button>`)
        .join("");
    contenedorFiltros.innerHTML = botones;

    contenedorFiltros.addEventListener("click", (e) => {
        const btn = e.target.closest(".filtro-btn");
        if (!btn) return;

        aplicarFiltro(btn.dataset.filter);
        /* Mantiene la URL sincronizada para que el menú "Productos" siempre funcione */
        const hash = btn.dataset.filter === "all" ? "" : `#${btn.dataset.filter}`;
        history.replaceState(null, "", window.location.pathname + window.location.search + hash);
    });

    /* Filtro inicial según el menú (productos.html#calentadores); también
       reacciona si se cambia el enlace estando ya en la página. */
    const filtroDesdeURL = () => {
        const hash = window.location.hash.replace("#", "");
        aplicarFiltro(Object.hasOwn(CATEGORIAS, hash) ? hash : "all");
    };
    filtroDesdeURL();
    window.addEventListener("hashchange", filtroDesdeURL);
}

/* --------------------------------------------------------------------------
   Contadores animados (sección de estadísticas)
   -------------------------------------------------------------------------- */
function animarContador(elemento) {
    const meta = Number(elemento.dataset.target);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elemento.textContent = meta;
        return;
    }
    const duracion = 2000;
    const paso = 20;
    const incremento = meta / (duracion / paso);
    let actual = 0;

    const timer = setInterval(() => {
        actual += incremento;
        if (actual >= meta) {
            elemento.textContent = meta;
            clearInterval(timer);
        } else {
            elemento.textContent = Math.ceil(actual);
        }
    }, paso);
}

const contadores = document.querySelectorAll(".counter");

if (contadores.length) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                animarContador(entrada.target);
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.3 });

    contadores.forEach((c) => observador.observe(c));
}
