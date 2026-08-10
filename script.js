const productos = [
    {
        id: 1,
        nombre: "Figura geometrica Lobo",
        precio: 25000,
        stock: 15,
        fondo: "linear-gradient(135deg, #d8e7ff, #f8fbff)",
        forma: "linear-gradient(135deg, #3483fa, #17202f)"
    },
    {
        id: 2,
        nombre: "Figura geometrica Leon",
        precio: 28000,
        stock: 12,
        fondo: "linear-gradient(135deg, #fff1b8, #fffaf0)",
        forma: "linear-gradient(135deg, #ff8500, #ffe600)"
    },
    {
        id: 3,
        nombre: "Figura geometrica Aguila",
        precio: 32000,
        stock: 8,
        fondo: "linear-gradient(135deg, #e8f7ed, #f8fffb)",
        forma: "linear-gradient(135deg, #00a650, #3483fa)"
    },
    {
        id: 4,
        nombre: "Arte personalizado",
        precio: 35000,
        stock: 20,
        fondo: "linear-gradient(135deg, #f2eaff, #fff8f2)",
        forma: "linear-gradient(135deg, #6a45d8, #ff8500)"
    }
];

let carrito = [];

const listaProductos = document.getElementById("listaProductos");
const productosCarrito = document.getElementById("productosCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const total = document.getElementById("total");
const busqueda = document.getElementById("busqueda");

function mostrarProductos(lista = productos) {
    listaProductos.innerHTML = "";

    lista.forEach((producto) => {
        listaProductos.innerHTML += `
            <article class="producto">
                <div class="producto-arte" style="--arte-bg: ${producto.fondo}; --arte-shape: ${producto.forma};">
                    <span></span>
                </div>
                <h3>${producto.nombre}</h3>
                <div class="estrellas">★★★★★</div>
                <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
                <p class="stock">Stock: ${producto.stock}</p>
                <button onclick="agregarCarrito(${producto.id})">Agregar al carrito</button>
            </article>
        `;
    });
}

function agregarCarrito(id) {
    const producto = productos.find((item) => item.id === id);

    if (!producto || producto.stock <= 0) {
        alert("No hay stock disponible.");
        return;
    }

    producto.stock--;
    carrito.push(producto);
    actualizarCarrito();
    filtrarProductos();
}

function actualizarCarrito() {
    productosCarrito.innerHTML = "";

    if (carrito.length === 0) {
        productosCarrito.innerHTML = "No hay productos.";
        cantidadCarrito.textContent = "0";
        total.textContent = "0";
        return;
    }

    let suma = 0;

    carrito.forEach((producto) => {
        productosCarrito.innerHTML += `
            <p>
                <span>${producto.nombre}</span>
                <strong>$${producto.precio.toLocaleString("es-AR")}</strong>
            </p>
        `;
        suma += producto.precio;
    });

    cantidadCarrito.textContent = String(carrito.length);
    total.textContent = suma.toLocaleString("es-AR");
}

function filtrarProductos() {
    const texto = busqueda.value.toLowerCase();
    const filtrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(texto));
    mostrarProductos(filtrados);
}

document.getElementById("comprar").addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("El carrito esta vacio.");
        return;
    }

    alert("Gracias por comprar en Poliart. Nos comunicaremos para coordinar tu pedido.");
    carrito = [];
    actualizarCarrito();
    mostrarProductos();
});

busqueda.addEventListener("input", filtrarProductos);

mostrarProductos();
