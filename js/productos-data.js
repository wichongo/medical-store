/* ==========================================================================
   CATÁLOGO DE PRODUCTOS
   --------------------------------------------------------------------------
   Este es el ÚNICO archivo que hay que editar para añadir, quitar o
   modificar equipos. Las cards del catálogo, las de la página de inicio y
   el modal de detalles se generan automáticamente desde aquí.

   Para añadir un equipo:
     1. Copia su foto a  images/productos/  (ej. images/productos/xx.webp)
     2. Copia su ficha técnica a  assets/pdf/  (ej. assets/pdf/marca-xx.pdf)
     3. Agrega un objeto nuevo en PRODUCTOS siguiendo el formato de abajo.
   ========================================================================== */

/* Categorías (clave -> nombre visible). Las claves se usan en los filtros
   y en el menú "Productos" (productos.html#clave). */
const CATEGORIAS = {
    refrigeracion: "Refrigeración",
    calentadores: "Calentadores"
};

/* true  = las cards y el modal muestran la marca (ej. "Frimed · PN45V")
   false = solo se muestra el modelo (ej. "PN45V") */
const MOSTRAR_MARCA = true;

/* IDs de los equipos que se muestran en "Productos Destacados" (inicio). */
const DESTACADOS = ["pn45v", "ft2800"];

const PRODUCTOS = [
    /* ---------------------------- FRIMED ---------------------------- */
    {
        id: "pn45v",
        categoria: "refrigeracion",
        marca: "Frimed",
        modelo: "PN45V",
        nombre: "Refrigerador para Laboratorio y Farmacia de 450 Litros",
        imagen: "images/productos/pn45v.webp",
        ficha: "assets/pdf/frimed-pn45v.pdf",
        resumen: "Refrigerador de alta capacidad con puerta de vidrio y control digital de temperatura, ideal para laboratorios y farmacias que requieren una conservación uniforme y estable.",
        specs: [
            ["Capacidad", "450 litros"],
            ["Rango de temperatura", "+2 °C a +12 °C (preajustado a +4 °C)"],
            ["Estantes", "3 de acero inoxidable, regulables en altura"],
            ["Dimensiones externas (A×P×H)", "700 × 800 × 1840 mm"],
            ["Peso neto", "124 kg"],
            ["Voltaje", "230 V / 50 Hz"],
            ["Potencia", "271 W"],
            ["Gas refrigerante", "R290, libre de CFC/HCFC"]
        ],
        caracteristicas: [
            "Puerta de vidrio doble autocerrante con cerradura de llave",
            "Iluminación LED con encendido automático al abrir la puerta",
            "Refrigeración por aire forzado para máxima uniformidad de temperatura",
            "Desescarche totalmente automático",
            "Panel de control con sistema de alarmas y memoria de últimas alarmas",
            "Data logger con puerto USB para descargar registros de temperatura"
        ]
    },
    {
        id: "fs15v",
        categoria: "refrigeracion",
        marca: "Frimed",
        modelo: "FS15V",
        nombre: "Refrigerador para Farmacia de 150 Litros",
        imagen: "images/productos/fs15v.webp",
        ficha: "assets/pdf/frimed-fs15v.pdf",
        resumen: "Refrigerador compacto para farmacia con puerta de vidrio y panel de control full touch, pensado para espacios reducidos sin sacrificar control ni seguridad.",
        specs: [
            ["Capacidad", "150 litros"],
            ["Rango de temperatura", "+2 °C a +12 °C (preajustado a +4 °C)"],
            ["Estantes", "2 de acero inoxidable, regulables en altura"],
            ["Dimensiones externas (A×P×H)", "600 × 600 × 1360 mm"],
            ["Peso neto", "78 kg"],
            ["Voltaje", "230 V / 50 Hz"],
            ["Potencia", "150 W"],
            ["Gas refrigerante", "R290, libre de CFC/HCFC"]
        ],
        caracteristicas: [
            "Panel de control TP-1 full touch con sistema de alarmas",
            "Puerta de vidrio doble autocerrante con cerradura de llave",
            "Iluminación LED con encendido automático al abrir la puerta",
            "Refrigeración por aire forzado y desescarche automático",
            "Data logger con puerto USB para descargar registros",
            "Contacto remoto libre de tensión para alarma"
        ]
    },
    {
        id: "fs20v",
        categoria: "refrigeracion",
        marca: "Frimed",
        modelo: "FS20V",
        nombre: "Refrigerador para Farmacia de 200 Litros",
        imagen: "images/productos/fs20v.webp",
        ficha: "assets/pdf/frimed-fs20v.pdf",
        resumen: "Refrigerador de tamaño intermedio para farmacia, con puerta de vidrio, tres estantes y panel de control full touch.",
        specs: [
            ["Capacidad", "200 litros"],
            ["Rango de temperatura", "+2 °C a +12 °C (preajustado a +4 °C)"],
            ["Estantes", "3 de acero inoxidable, regulables en altura"],
            ["Dimensiones externas (A×P×H)", "600 × 600 × 1560 mm"],
            ["Peso neto", "86 kg"],
            ["Voltaje", "230 V / 50 Hz"],
            ["Potencia", "155 W"],
            ["Gas refrigerante", "R290, libre de CFC/HCFC"]
        ],
        caracteristicas: [
            "Panel de control TP-1 full touch con sistema de alarmas",
            "Puerta de vidrio doble autocerrante con cerradura de llave",
            "Iluminación LED con encendido automático al abrir la puerta",
            "Refrigeración por aire forzado y desescarche automático",
            "Data logger con puerto USB para descargar registros",
            "Contacto remoto libre de tensión para alarma"
        ]
    },
    {
        id: "af140v",
        categoria: "refrigeracion",
        marca: "Frimed",
        modelo: "AF140V",
        nombre: "Refrigerador para Farmacia de 1,400 Litros",
        imagen: "images/productos/af140v.webp",
        ficha: "assets/pdf/frimed-af140v.pdf",
        resumen: "Refrigerador de gran capacidad con dos puertas de vidrio, diseñado para farmacias hospitalarias y almacenes que manejan grandes volúmenes de medicamentos.",
        specs: [
            ["Capacidad", "1,400 litros"],
            ["Rango de temperatura", "+2 °C a +12 °C (preajustado a +4 °C)"],
            ["Puertas", "2 de vidrio doble autocerrantes"],
            ["Estantes", "8 de acero inoxidable, regulables en altura"],
            ["Dimensiones externas (A×P×H)", "1400 × 800 × 1990 mm"],
            ["Peso neto", "226 kg"],
            ["Voltaje", "230 V / 50 Hz"],
            ["Potencia", "230 W"],
            ["Gas refrigerante", "R290, libre de CFC/HCFC"]
        ],
        caracteristicas: [
            "Panel de control TP-1 full touch con sistema de alarmas",
            "Cerradura de llave y sellado magnético en los cuatro lados",
            "Iluminación LED con encendido automático al abrir la puerta",
            "Refrigeración por aire forzado y desescarche automático",
            "Data logger con puerto USB para descargar registros",
            "Ruedas con patas estabilizadoras ajustables"
        ]
    },
    {
        id: "fp30v2",
        categoria: "refrigeracion",
        marca: "Frimed",
        modelo: "FP30V/2",
        nombre: "Refrigerador Combinado de 150 / 150 Litros",
        imagen: "images/productos/fp30v2.webp",
        ficha: "assets/pdf/frimed-fp30v2.pdf",
        resumen: "Refrigerador de dos compartimentos independientes (superior e inferior), cada uno con su propio compresor, control de temperatura y puerta de vidrio.",
        specs: [
            ["Capacidad", "150 L superior + 150 L inferior"],
            ["Rango de temperatura", "+2 °C a +15 °C en cada compartimento (preajustado a +4 °C)"],
            ["Estantes", "3 por compartimento, regulables en altura"],
            ["Dimensiones externas (A×P×H)", "600 × 700 × 2030 mm"],
            ["Peso neto", "125 kg"],
            ["Voltaje", "230 V / 50 Hz"],
            ["Potencia", "150 W + 150 W"],
            ["Gas refrigerante", "R290, libre de CFC/HCFC"]
        ],
        caracteristicas: [
            "Dos compartimentos totalmente independientes, con dos compresores",
            "Dos puertas de vidrio doble autocerrantes con cerraduras de llave",
            "Panel de control LGK-2 digital o TP-1 full touch, a elección",
            "Data logger con puerto USB para ambos compartimentos",
            "Desescarche totalmente automático en ambos compartimentos",
            "Iluminación LED con encendido automático al abrir la puerta"
        ]
    },

    /* ---------------------------- KEEWELL --------------------------- */
    {
        id: "qw618",
        categoria: "calentadores",
        marca: "Keewell",
        modelo: "QW618",
        nombre: "Calentador de Sangre e Infusión",
        imagen: "images/productos/qw618.webp",
        ficha: "assets/pdf/keewell-qw618.pdf",
        resumen: "Calentador seco de sangre e infusiones para aplicaciones clínicas rutinarias y de gran volumen: transfusiones durante o después de una cirugía, emergencias y nutrición enteral/parenteral.",
        specs: [
            ["Temperatura", "37 °C a 42 °C"],
            ["Precisión de temperatura", "± 0.5 °C"],
            ["Capacidad de calentamiento", "Hasta 6000 ml/hora"],
            ["Tiempo de calentamiento", "Menos de 45 s (de 20 °C a 36 °C)"],
            ["Alarma de baja temperatura", "36 °C"],
            ["Alimentación", "AC 230 V ± 10 % / 50-60 Hz, máx. 250 VA"],
            ["Protección contra líquidos", "IPX4 (a prueba de salpicaduras)"],
            ["Dimensiones (A×P×H)", "100 × 170 × 210 mm"],
            ["Peso neto", "1.3 kg"]
        ],
        caracteristicas: [
            "Control por microprocesador con autochequeos permanentes y alarmas de falla",
            "Cilindro de calentamiento seco acanalado: usa extensiones o vías IV estándar de bajo costo",
            "Tres sensores de temperatura independientes con display numérico en 0.1 °C",
            "Protección contra sobrecalentamiento y alarma por falla de sensor",
            "Función de prueba de la alarma de alta temperatura, útil para el mantenimiento",
            "Operación continua las 24 horas. Soporte de infusión no incluido"
        ]
    },
    {
        id: "ft70",
        categoria: "calentadores",
        marca: "Keewell",
        modelo: "FT70",
        nombre: "Calentador de Fluidos",
        imagen: "images/productos/ft70.webp",
        ficha: "assets/pdf/keewell-ft70.pdf",
        resumen: "Calentador de fluidos económico y compacto para infusión rutinaria a flujo lento o medio, nutrición enteral y parenteral, e infusión en niños y neonatos.",
        specs: [
            ["Temperatura", "39 °C (ajuste de fábrica)"],
            ["Precisión de temperatura", "± 2.0 °C"],
            ["Tiempo de calentamiento", "Aprox. 3 min (de 20 °C a 39 °C)"],
            ["Protección contra sobrecalentamiento", "42 °C"],
            ["Alarma de baja temperatura", "37 °C"],
            ["Alimentación", "AC 100-240 V / 50-60 Hz, máx. 50 VA"],
            ["Protección contra líquidos", "IPX2"],
            ["Perfil de calentamiento", "1000 mm, para tubo IV de 3.5 a 5.0 mm de D.E."],
            ["Dimensiones (A×P×H)", "70 × 25 × 90 mm"],
            ["Peso neto", "0.7 kg"]
        ],
        caracteristicas: [
            "Control de temperatura automático con operación de un solo toque",
            "Sistema abierto: acepta tubo IV estándar, sin descartables especiales",
            "Calienta hasta el paciente: el tubo IV queda envuelto, sin pérdida de calor",
            "Puede usarse solo o junto a bombas de infusión o de alimentación",
            "Parte aplicada tipo BF, protegida contra desfibrilación",
            "Tamaño compacto y operación continua"
        ]
    },
    {
        id: "ft2800",
        categoria: "calentadores",
        marca: "Keewell",
        modelo: "FT2800",
        nombre: "Calentador de Sangre e Infusión de 2 Canales",
        imagen: "images/productos/ft2800.webp",
        ficha: "assets/pdf/keewell-ft2800.pdf",
        resumen: "Calentador seco de alto rendimiento con dos canales independientes para fluidos de infusión, sangre y hemoderivados, líquidos de diálisis y soluciones de nutrición o enjuague.",
        specs: [
            ["Canales", "2, independientes o combinables"],
            ["Temperatura", "33 °C a 41 °C"],
            ["Precisión de temperatura", "± 1.0 °C"],
            ["Tiempo de calentamiento", "Aprox. 2 min (de 20 °C a 36 °C)"],
            ["Alarma de baja temperatura", "32 °C"],
            ["Alimentación", "AC 100-240 V / 50-60 Hz, máx. 180 VA"],
            ["Protección contra líquidos", "IPX2"],
            ["Perfil de calentamiento", "1400 mm, para tubo IV de 3.5 a 5.0 mm de D.E."],
            ["Dimensiones (A×P×H)", "200 × 130 × 250 mm"],
            ["Peso neto", "2.3 kg"]
        ],
        caracteristicas: [
            "Cada canal funciona con su propia temperatura y control, o se combinan para mayor capacidad",
            "Doble protección independiente contra sobrecalentamiento con corte automático",
            "Alarma visual y acústica por alta temperatura, baja temperatura o falla de sensor",
            "Pantalla LED grande: temperatura programada, temperatura real, tiempo y fallas",
            "Sistema abierto: acepta tubo IV estándar, sin descartables especiales",
            "Autochequeos permanentes y operación continua las 24 horas. Soporte de infusión no incluido"
        ]
    }
];
