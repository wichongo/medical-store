/* ==========================================================================
   MEDICAL HEALTHCARE - Lógica del sitio
   Requiere cargar antes:  js/productos-data.js (en todas las páginas)
   ========================================================================== */

const seleccionCotizacion = new Set();
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
    let closeTimer;
    const hoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const setOpen = (open) => {
        clearTimeout(closeTimer);
        button.setAttribute('aria-expanded', String(open));
        menu.hidden = !open;
    };
    // El ratón abre el menú; el toque y el teclado conservan el clic.
    dropdown.addEventListener('pointerenter', (event) => {
        if (hoverPointer.matches && event.pointerType === 'mouse') setOpen(true);
    });
    dropdown.addEventListener('pointerleave', (event) => {
        if (hoverPointer.matches && event.pointerType === 'mouse') {
            closeTimer = setTimeout(() => {
                if (!dropdown.contains(document.activeElement)) setOpen(false);
            }, 180);
        }
    });
    button.addEventListener('click', (event) => {
        const mouseClick = hoverPointer.matches && event.pointerType === 'mouse';
        setOpen(mouseClick ? true : menu.hidden);
    });
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
            <div class="card-photo">${p.enPromocion ? `<p class="promo-stock product-badge badge-promo">En promoción</p>` : p.nuevo ? `<p class="product-badge badge-new">Nuevo</p>` : ""}<button type="button" class="image-zoom" data-ampliar="${p.id}" aria-label="Ampliar foto de ${p.modelo}"><img src="${p.imagen}" alt="${p.nombre} ${p.marca} ${p.modelo}" loading="lazy"><span>Ampliar foto</span></button></div>
            ${p.notaImagen ? `<p class="product-image-note">${p.notaImagen}</p>` : ""}<p class="card-marca">${etiqueta}</p>
            <p class="card-category">${CATEGORIAS[p.categoria]}</p>
            <h3>${p.nombre}</h3>
            <div class="card-actions"><button class="btn" type="button" data-producto="${p.id}">Ver Detalles</button><button class="btn quote-toggle" type="button" data-cotizar="${p.id}" aria-pressed="${seleccionCotizacion.has(p.id)}">${seleccionCotizacion.has(p.id) ? "Quitar de cotización" : "Añadir a cotización"}</button></div>
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
        <div class="product-detail-layout"><div class="product-detail-info">
        <p class="modal-marca">${MOSTRAR_MARCA ? p.marca + " · " : ""}${CATEGORIAS[p.categoria]}</p>
        <h2 id="product-title">${p.nombre}</h2>
        <p class="modal-modelo">${p.modeloDetalle || "Modelo " + p.modelo}</p>

        ${p.notaImagen ? `<p class="product-image-note">${p.notaImagen}</p>` : ""}<p class="modal-resumen">${p.resumen}</p>

        <h3>${p.tituloSpecs || "Especificaciones técnicas"}</h3>
        <table class="spec-table"><tbody>${specs}</tbody></table>

        <h3>Características</h3>
        <ul class="feature-list">${caracteristicas}</ul>

        <div class="btn-center">
            <a href="${p.ficha}" target="_blank" rel="noopener" class="btn">
                <i class="fa-solid ${p.ficha.endsWith(".pdf") ? "fa-file-pdf" : "fa-arrow-up-right-from-square"}" aria-hidden="true"></i> ${p.etiquetaFicha || "Ver ficha técnica (PDF)"}
            </a>
            ${p.catalogo ? `<a href="${p.catalogo}" target="_blank" rel="noopener" class="btn"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> ${p.etiquetaCatalogo || "Catálogo AX-400/AX-500 (PDF)"}</a>` : ""}
            <a href="${enlaceWhatsApp(mensaje)}" target="_blank" rel="noopener" class="btn secondary-dark">
                <i class="fa-brands fa-whatsapp"></i> Cotizar por WhatsApp
            </a>
        </div>
        </div><div class="product-detail-photo">${p.enPromocion ? `<p class="promo-stock product-badge badge-promo">En promoción</p>` : p.nuevo ? `<p class="product-badge badge-new">Nuevo</p>` : ""}<button type="button" class="image-zoom" data-ampliar="${p.id}" aria-label="Ampliar foto de ${p.modelo}"><img class="modal-img" src="${p.imagen}" alt="${p.nombre} ${p.marca} ${p.modelo}"><span>Ampliar foto</span></button></div></div>
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
    if (e.key === "Escape" && !document.getElementById("foto-ampliada")?.open) cerrarModal();
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

const buscadorEquipos = document.getElementById("buscar-equipo");
let categoriaActual = "all";
const normalizarBusqueda = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
function aplicarFiltro(categoria) {
    categoriaActual = categoria;
    const palabras = normalizarBusqueda(buscadorEquipos?.value || "").split(/\s+/).filter(Boolean);
    const lista = PRODUCTOS.filter((p) => {
        const texto = normalizarBusqueda([p.nombre, p.marca, p.modelo, CATEGORIAS[p.categoria]].join(" "));
        return (categoria === "all" || p.categoria === categoria) && palabras.every((palabra) => texto.includes(palabra));
    });
    mostrarProductos(contenedorCatalogo, lista);
    const estado = document.getElementById("resultados-busqueda");
    if (estado) estado.textContent = `${lista.length} ${lista.length === 1 ? "producto encontrado" : "productos encontrados"}${categoria !== "all" ? " en " + CATEGORIAS[categoria] : ""}`;
    const vacio = document.getElementById("sin-resultados");
    if (vacio) vacio.hidden = lista.length !== 0;
    contenedorFiltros.querySelectorAll(".filtro-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.filter === categoria);
        btn.setAttribute("aria-pressed", String(btn.dataset.filter === categoria));
    });
}

if (contenedorCatalogo && contenedorFiltros) {
    buscadorEquipos?.addEventListener("input", () => aplicarFiltro(categoriaActual));
    document.getElementById("limpiar-busqueda")?.addEventListener("click", () => {
        buscadorEquipos.value = "";
        aplicarFiltro(categoriaActual);
        buscadorEquipos.focus();
    });
    document.getElementById("restablecer-catalogo")?.addEventListener("click", () => {
        buscadorEquipos.value = "";
        aplicarFiltro("all");
        history.replaceState(null, "", location.pathname + location.search);
        buscadorEquipos.focus();
    });
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

/* Apariciones suaves sin ocultar contenido si JavaScript no está disponible. */
const movimientoReducido = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !movimientoReducido.matches) {
    const apariciones = new IntersectionObserver((entradas) => {
        entradas.forEach(({isIntersecting, target}) => {
            if (!isIntersecting) return;
            if (!movimientoReducido.matches) target.animate([
                {opacity: .45, transform: 'translateY(12px)'},
                {opacity: 1, transform: 'translateY(0)'}
            ], {duration: 420, easing: 'ease-out'});
            apariciones.unobserve(target);
        });
    }, {threshold: .08});
    document.querySelectorAll('.section-heading, .line-grid, .digital-grid, .faq-layout, .vm-card').forEach(el => apariciones.observe(el));
    movimientoReducido.addEventListener('change', ({matches}) => {
        if (matches) document.getAnimations().forEach(animation => animation.cancel());
    });
}

/* Visor de fotos y selección para cotización; nunca envía automáticamente. */
const visorFoto = document.createElement('dialog');
visorFoto.id = 'foto-ampliada';
visorFoto.setAttribute('aria-label', 'Foto ampliada del equipo');
visorFoto.innerHTML = '<button type="button" class="btn" data-cerrar-foto>Cerrar foto</button><img alt=""><p></p>';
document.body.append(visorFoto);
let focoFoto;
visorFoto.addEventListener('close', () => {
    document.body.style.overflow = modal?.open ? 'hidden' : '';
    focoFoto?.focus();
});
const resumenCotizacion = document.createElement('section');
resumenCotizacion.className = 'quote-summary';
resumenCotizacion.id = 'tu-cotizacion';
const accesoCotizacion = document.createElement('a');
accesoCotizacion.className = 'quote-access btn';
accesoCotizacion.href = '#tu-cotizacion';
accesoCotizacion.addEventListener('click', e => { e.preventDefault(); resumenCotizacion.scrollIntoView({behavior:'auto'}); resumenCotizacion.querySelector('a').focus({preventScroll:true}); });
accesoCotizacion.hidden = true;
document.body.append(accesoCotizacion);
resumenCotizacion.setAttribute('aria-label', 'Tu cotización');
resumenCotizacion.hidden = true;
resumenCotizacion.innerHTML = '<div class="container"><h2>Tu cotización</h2><p role="status" aria-live="polite" class="quote-count"></p><ul></ul><div class="quote-actions"><a class="btn" target="_blank" rel="noopener">Consultar por WhatsApp</a><button type="button" class="btn" data-vaciar>Vaciar selección</button></div><p>Se abrirá WhatsApp con tu lista. Revisa el mensaje antes de enviarlo.</p></div>';
(document.querySelector('main') || document.body).append(resumenCotizacion);
function actualizarCotizacion() {
    const productos = [...seleccionCotizacion].map(buscarProducto).filter(Boolean);
    resumenCotizacion.hidden = productos.length === 0;
    accesoCotizacion.hidden = productos.length === 0;
    accesoCotizacion.textContent = `Ver cotización (${productos.length})`;
    resumenCotizacion.querySelector('.quote-count').textContent = `${productos.length} equipo(s) seleccionado(s)`;
    resumenCotizacion.querySelector('ul').innerHTML = productos.map(p => `<li><span>${p.nombre} · ${p.marca} ${p.modelo}</span><button type="button" data-cotizar="${p.id}" aria-label="Quitar ${p.modelo}">Quitar</button></li>`).join('');
    resumenCotizacion.querySelector('a').href = enlaceWhatsApp('Hola, quisiera una cotización de estos equipos:\n' + productos.map((p,i) => `${i+1}. ${p.nombre} — ${p.marca} ${p.modelo}`).join('\n') + '\nPor favor, indíquenme disponibilidad y condiciones de entrega.');
    document.querySelectorAll('.quote-toggle').forEach(b => {
        const elegido = seleccionCotizacion.has(b.dataset.cotizar);
        b.setAttribute('aria-pressed', String(elegido));
        b.textContent = elegido ? 'Quitar de cotización' : 'Añadir a cotización';
    });
}
document.addEventListener('click', e => {
    const ampliar = e.target.closest('[data-ampliar]');
    if (ampliar) {
        const p = buscarProducto(ampliar.dataset.ampliar);
        focoFoto = ampliar;
        visorFoto.querySelector('img').src = p.imagen;
        visorFoto.querySelector('img').alt = `${p.nombre} ${p.marca} ${p.modelo}`;
        visorFoto.querySelector('p').textContent = `${p.nombre} · ${p.marca} ${p.modelo}${p.notaImagen ? " — " + p.notaImagen : ""}`;
        visorFoto.showModal();
        document.body.style.overflow = 'hidden';
    }
    if (e.target === visorFoto || e.target.closest('[data-cerrar-foto]')) visorFoto.close();
    const elegir = e.target.closest('[data-cotizar]');
    if (elegir) {
        const id = elegir.dataset.cotizar;
        if (!buscarProducto(id)) return;
        seleccionCotizacion.has(id) ? seleccionCotizacion.delete(id) : seleccionCotizacion.add(id);
        actualizarCotizacion();
    }
    if (e.target.closest('[data-vaciar]')) { seleccionCotizacion.clear(); actualizarCotizacion(); }
});