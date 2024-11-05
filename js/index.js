const PRODUCTOS_ARRAY = [
    {
        id: 1,
        nombre: "Buceo en Cancún",
        precio: 1200,
        tipo: "Buceo",
        duracion: "45 minutos",
        profundidad: "12 mts"
    },
    {
        id: 2,
        nombre: "Tour Cultural en Ciudad de México",
        precio: 500,
        tipo: "Tour",
        duracion: "8 horas",
        descripcion: "Visita los principales sitios turísticos de la ciudad"
    },
    {
        id: 3,
        nombre: "Buceo en Cozumel",
        precio: 1400,
        tipo: "Buceo",
        duracion: "50 minutos",
        profundidad: "15 mts"
    },
    {
        id: 4,
        nombre: "Tour por la Riviera Maya",
        precio: 800,
        tipo: "Tour",
        duracion: "10 horas",
        descripcion: "Explora las playas y ruinas mayas de la región"
    }
];

function mostrar_PRODUCTOS() {
    const section_productos = document.getElementById('productos');

    PRODUCTOS_ARRAY.forEach(producto => {
        const CARD_DIV = document.createElement('div');
        CARD_DIV.className = 'card-container';

        const productoHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Tipo: ${producto.tipo}</p>
            <p>Duración: ${producto.duracion}</p>
            ${producto.tipo === "Buceo" ? `<p>Profundidad: ${producto.profundidad}</p>` : `<p>${producto.descripcion}</p>`}
            <button onclick="añadirCarrito(${producto.id})">Agregar al carrito</button>
        `;

        CARD_DIV.innerHTML = productoHTML;
        section_productos.appendChild(CARD_DIV);
    });
}

function añadirCarrito(id) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
}