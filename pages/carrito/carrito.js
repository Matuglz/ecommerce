const contenedorProductos = document.querySelector("#contenedor-productos")
const contenedorTotal = document.querySelector("#contenedor-total")
const alertDeseo = document.querySelector(".alert-agregado")
const alerta = false


const CARRITO = JSON.parse(localStorage.getItem("carrito")) || []
verificarCarritoVacio()


function mostrarCarrito() {
    contenedorProductos.innerHTML = ""
    const CARRITO = JSON.parse(localStorage.getItem("carrito")) || []
    CARRITO.forEach(producto => {
        let div = document.createElement("div")
        div.classList.add("container-fluid", "d-flex", "mb-3")
        div.innerHTML = `
        <img class="w-25" src=../${producto.imagen} alt=${producto.nombre}>
        <div class=" w-100 d-flex justify-content-around align-items-center">
        <div>
        <p>PRECIO</p>
        <p class="precio">${producto.precio * producto.cantidad}</p>
        </div>
        <div class="text-center">
        <P>TALLE</P>
        <p>${producto.talle}</p>
        </div>
        <div class="text-center">
        <P>CANTIDAD</P>
        <p>${producto.cantidad}</p>
        </div>
        <button class="btn-borrar btn btn-danger" id=${producto.id}>BORRAR</button>
        </div>
        `;
        contenedorProductos.append(div)
    })

    const precios = document.querySelectorAll(".precio")
    let todosLosPrecios =[]
    precios.forEach(precio=> todosLosPrecios.push(parseInt(precio.innerHTML)))
    let total = todosLosPrecios.reduce((acc, precio)=> acc + precio)

    contenedorTotal.innerHTML = ""
    let div = document.createElement("div")
    div.classList.add("container", "d-flex", "justify-content-around", "align-items-center")
    div.innerHTML = `
        <div>
        <p>TOTAL</p>
        <P>${total}</P>
        </div>
        <button class="btn btn-success"><a  href="../datos/datos.html">COMPRAR</a></button>
    `
    contenedorTotal.append(div)
    const botonesBorrar = document.querySelectorAll(".btn-borrar")

    botonesBorrar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const itemId = e.target.id
            eliminarItemDelCarrito(itemId)
            mostrarAlerta()
            verificarCarritoVacio()
        })
    })

}

function eliminarItemDelCarrito(itemId) {
    const CARRITO = JSON.parse(localStorage.getItem("carrito")) || []
    const newCarrito = CARRITO.filter((p) => p.id !== itemId)
    localStorage.setItem("carrito", JSON.stringify(newCarrito))
    mostrarCarrito()
}

function verificarCarritoVacio() {
    const CARRITO = JSON.parse(localStorage.getItem("carrito")) || [];

    if (CARRITO.length === 0) {
        contenedorProductos.innerHTML = "";
        let div = document.createElement("div");
        div.classList.add("container-fluid", "d-flex", "mb-3");
        div.innerHTML = `
        <p>TU CARRITO ESTÁ VACÍO :(</p>
        `;
        contenedorProductos.append(div);
    } else {
        mostrarCarrito();
    }
}


function mostrarAlerta() {
    if (!alerta) {
        alertDeseo.classList.remove("d-none");
        setTimeout(() => {
            alertDeseo.classList.add("d-none");
        }, 2000);
    }
}




