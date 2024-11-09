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
        CARD_DIV.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Tipo: ${producto.tipo}</p>
            <p>Duración: ${producto.duracion}</p>
            ${producto.tipo === "Buceo" ? `<p>Profundidad: ${producto.profundidad}</p>` : `<p>${producto.descripcion}</p>`}
            <button onclick="añadirCarrito(${producto.id})">Agregar al carrito</button>
        `;
        section_productos.appendChild(CARD_DIV);
    });
}

function añadirCarrito(id) {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = PRODUCTOS_ARRAY.find(prod => prod.id === id);
    const productoEnCarrito = CARRITO.find(prod => prod.id === id); 
    
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        CARRITO.push({...producto, cantidad: 1});
    }

    localStorage.setItem('carrito', JSON.stringify(CARRITO));
    mostrarCarrito(); 
}

function mostrarCarrito() {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoList = document.getElementById('carrito');
    carritoList.innerHTML = '';  

    let total = 0;

    CARRITO.forEach((producto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio} x ${producto.cantidad} 
            <button onclick="eliminarDelCarrito(${index})">Eliminar del carrito</button>
        `;
        carritoList.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    document.getElementById('total').textContent = `Total: $${total}`;
}

function eliminarDelCarrito(index) {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    CARRITO.splice(index, 1);  
    localStorage.setItem('carrito', JSON.stringify(CARRITO));  
    mostrarCarrito();  
}

document.addEventListener('DOMContentLoaded', () => {
    mostrar_PRODUCTOS();
    mostrarCarrito();
});
