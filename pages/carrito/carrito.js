const contenedorProductos = document.querySelector("#contenedor-productos")

function mostrarCarrito() {
    contenedorProductos.innerHTML = ""

    const CARRITO = JSON.parse(localStorage.getItem("carrito")) || []

    CARRITO.forEach(producto => {
        let div = document.createElement("div")
        div.classList.add("container-fluid", "d-flex", "mb-3")
        div.innerHTML = `
        <img class="w-25" src=../${producto.imagen} alt=${producto.titulo}>
        <div class=" w-100 d-flex justify-content-around align-items-center">
        <div>
        <p>PRECIO</p>
        <p>$${producto.precio}</p>
        </div>
        <div class="text-center">
        <P>TALLE</P>
        <p>${producto.talle}</p>
        </div>
        <button class="btn-borrar" id=${producto.id}>borrar</button>
        </div>
        `;
        contenedorProductos.append(div)
    })

    const botonesBorrar = document.querySelectorAll(".btn-borrar")

    botonesBorrar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const itemId = e.target.id
            eliminarItemDelCarrito(itemId)
        })
    })
}

function eliminarItemDelCarrito(itemId) {
    const CARRITO = JSON.parse(localStorage.getItem("carrito")) || []
    const newCarrito = CARRITO.filter((p) => p.id !== itemId)
    localStorage.setItem("carrito", JSON.stringify(newCarrito))
    mostrarCarrito()
}


mostrarCarrito()
