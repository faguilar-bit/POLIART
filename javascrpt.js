// ============================

// PRODUCTOS

// ============================

const productos = [

{

id:1,

nombre:"Figura Geométrica Lobo",

precio:25000,

stock:15,

imagen:"https://picsum.photos/300/220?random=1"

},

{

id:2,

nombre:"Figura Geométrica León",

precio:28000,

stock:12,

imagen:"https://picsum.photos/300/220?random=2"

},

{

id:3,

nombre:"Figura Geométrica Águila",

precio:32000,

stock:8,

imagen:"https://picsum.photos/300/220?random=3"

},

{

id:4,

nombre:"Arte Personalizado",

precio:35000,

stock:20,

imagen:"https://picsum.photos/300/220?random=4"

}

];

// ============================

let carrito = [];

// ============================

const listaProductos = document.getElementById("listaProductos");

const productosCarrito = document.getElementById("productosCarrito");

const cantidadCarrito = document.getElementById("cantidadCarrito");

const total = document.getElementById("total");

// ============================

function mostrarProductos(){

listaProductos.innerHTML="";

productos.forEach(producto=>{

listaProductos.innerHTML += `

<div class="producto">

<img src="${producto.imagen}">

<h3>${producto.nombre}</h3>

<div class="estrellas">

★★★★★

</div>

<p class="precio">

$${producto.precio.toLocaleString()}

</p>

<p class="stock">

Stock: ${producto.stock}

</p>

<button onclick="agregarCarrito(${producto.id})">

Agregar al carrito

</button>

</div>

`;

});

}

// ============================

function agregarCarrito(id){

const producto = productos.find(p=>p.id===id);

if(producto.stock<=0){

alert("No hay stock disponible.");

return;

}

producto.stock--;

carrito.push(producto);

actualizarCarrito();

mostrarProductos();

}

// ============================

function actualizarCarrito(){

productosCarrito.innerHTML="";

let suma=0;

carrito.forEach(producto=>{

productosCarrito.innerHTML += `

<p>

${producto.nombre}

-

$${producto.precio.toLocaleString()}

</p>

`;

suma += producto.precio;

});

cantidadCarrito.innerHTML = carrito.length;

total.innerHTML = suma.toLocaleString();

}

// ============================

document.getElementById("comprar").addEventListener("click",()=>{

if(carrito.length==0){

alert("El carrito está vacío.");

return;

}

alert("¡Gracias por comprar en Poliart!");

carrito=[];

cantidadCarrito.innerHTML=0;

total.innerHTML=0;

productosCarrito.innerHTML="No hay productos.";

});

// ============================

mostrarProductos();