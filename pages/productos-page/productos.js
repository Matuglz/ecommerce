// Array con todos los producos
let productos
async function leerProductos() {
    await fetch('../../data/data.json')
        .then(results => results.json())
        .then(data => productos = data)
}
await leerProductos()
// Array con todos los links de los img utilizados en los filtros
const imgFiltros = [
    {
        nombre: "menor",
        link: "https://img.shields.io/badge/X  Precio%20%E2%86%91-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    },
    {
        nombre: "mayor",
        link: "https://img.shields.io/badge/X  Precio%20%E2%86%93-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    },
    {
        nombre: "zapato",
        link: "https://img.shields.io/badge/X%20%20Zapatos-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    },
    {
        nombre: "zapatilla",
        link: "https://img.shields.io/badge/X%20%20Zapatillas-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    },
    {
        nombre: "bota",
        link: "https://img.shields.io/badge/X%20%20Botas-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    }]
// Array vacio para poder cargar los filtros que luego se convierten en img`s
const arrayDeFiltros = []

// Llamado al dom necesario
const contenedorProductos = document.querySelector("#contenedor-productos")
const contenedorFiltrosAplicados = document.querySelector(".filtros-aplicados")
const filtroAplicado = document.querySelector(".filtro-aplicado")
const botonesFiltros = document.querySelectorAll(".boton-filtro")
const botonesOrdenar = document.querySelectorAll(".dropdown-item-ordenar")
const buscador = document.querySelector("#buscador")
const contenedorModal = document.querySelector(".modal-comprar-body")
const alertDeseo = document.querySelector(".alert-agregado")
const alerta = false

const CARRITO = JSON.parse(localStorage.getItem("carrito")) || []



// Variable para mantener el filtro activo
let filtroActivo = null

// Funcion para cargar los productos
function cargarProductos(productoSeleccionado) {
    contenedorProductos.innerHTML = ""
    productoSeleccionado.forEach(producto => {
        let div = document.createElement("div")
        div.classList.add("col")
        div.innerHTML = `
        <div class="card h-100">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
          <div class="card-body text-center">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">$${producto.precio}</p>
            <span>3 cuotas sin interes de $${Math.round(producto.precio / 3)}</span>
           <div class="botones">
            <a  class="w-100 btn btn-sm btn-outline-dark btn-comprar" id="${producto.id}">AGREGAR AL CARRITO</a>
           </div>
          </div>
        </div>
        `
        contenedorProductos.append(div)
    });

    const botonesComprar = document.querySelectorAll(".btn-comprar")

    // Abrir modal de los botones comprar
    botonesComprar.forEach(boton => {
        contenedorModal.innerHTML = ""
        boton.addEventListener("click", (e) => {
            contenedorModal.classList.remove("d-none")
            botonesComprar.forEach(b => b.classList.remove("active"))
            e.currentTarget.classList.add("active")
            let index = e.currentTarget.id
            let modal = productos.filter(producto => producto.id == index)
            let nombre = modal[0].titulo
            let imagen = modal[0].imagen
            let id = modal[0].id
            let precio = modal[0].precio
            let talles = modal[0].talles
            let div = document.createElement("div")
            div.classList.add("position-modals")
            div.innerHTML = `
            <div class="position-modals">
            <div><button type="button" class="btn-close boton-cerrar-modal"></button></div>
            <div class="modal-comprar">
              <img src="${imagen}" alt="${nombre}">
              <div class="modal-text text-center">
                <h2>${nombre}</h2>
                <ul class="lista-talles">

                </ul>
                </p>
                <div class="d-flex justify-content-around align-items-baseline gap-3">
                  <p>
                    Precio: $${precio}
                  </p>
                  <button class="btn btn-outline-dark btn-sm boton-agregar-carrito btn-agregar-carrito-modal"><i class="fa-solid fa-cart-shopping"></i></button></button>
                </div>
              </div>
            </div>
          </div>
            `
            contenedorModal.append(div)
            // Se agrega funcion al boton cerrar del modal
            const botonCerrarModal = document.querySelector(".boton-cerrar-modal")

            botonCerrarModal.addEventListener("click", () => {
                contenedorModal.classList.add("d-none")
                contenedorModal.innerHTML = ""
                botonesComprar.forEach(boton => boton.classList.remove("active"))
            })
            // Se crean los botones de los talles
            const listaTalles = document.querySelector(".lista-talles")
            let clavesTalle = Object.keys(talles)
            clavesTalle.forEach(clave => {
                let li = document.createElement("li")
                li.classList.add("btn-talle", "btn", "btn-outline-primary", "btn-sm")
                li.setAttribute("id", clave)
                li.textContent = clave
                listaTalles.append(li)
            })
            // Se selecciona a todos los botones de talle
            const botonesTalle = document.querySelectorAll(".btn-talle")
            botonesTalle.forEach(boton => {
                boton.addEventListener("click", (e) => {
                    botonesTalle.forEach(boton => boton.classList.remove("active"))
                    e.currentTarget.classList.add("active")
                })
            })

            // Se agrega funcion al boton carrito del modal
            const botonCarritoModal = document.querySelector(".btn-agregar-carrito-modal")
            botonCarritoModal.addEventListener("click", () => {

                contenedorModal.classList.add("d-none")
                botonesComprar.forEach(boton => boton.classList.remove("active"))
                contenedorModal.innerHTML = ""

                //SELECCIONAR TALLE Y EVNIAR PRODUCTO AL CARRITO
            let copiaCarrito = [...CARRITO]
            let botonesArray = Array.from(botonesTalle)
            let botonSeleccionado = botonesArray.find((boton) => boton.classList.contains("active"))
            let talle = botonSeleccionado.innerHTML
            let cantidad = 1
            let productoPreparado = { nombre,imagen,precio, talle, cantidad,id }
            let enCarrito = copiaCarrito.find(prod=> prod.id == productoPreparado.id && prod.talle == productoPreparado.talle)
            if (enCarrito){
                enCarrito.cantidad = enCarrito.cantidad +1
            }else{
                CARRITO.push(productoPreparado)
            }
            localStorage.setItem("carrito",JSON.stringify(CARRITO))

            contenedorModal.classList.add("d-none")
            botonesComprar.forEach(boton => boton.classList.remove("active"))
            contenedorModal.innerHTML=""
            mostrarAlerta()
            })
        })
    })
}
cargarProductos(productos)

// Se hace el filtro segun que boton se seleccione
botonesFiltros.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesFiltros.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
        filtroActivo = e.currentTarget.id
        if (filtroActivo !== "todos") {
            let productosBoton = productos.filter(producto => producto.categoria.id === filtroActivo)
            cargarProductos(productosBoton)
            arrayDeFiltros.splice(0, 1, filtroActivo)
            cargarImgFiltros()
        } else {
            arrayDeFiltros.shift()
            cargarImgFiltros()

            cargarProductos(productos)
        }
    })
})

// Función de comparación para ordenar por precio
function compararPorPrecio() {
    if (filtroActivo != null) {
        let productosFiltrados = productos.filter(producto => producto.categoria.id === filtroActivo)
        return productosFiltrados.sort((productoA, productoB) => productoA.precio - productoB.precio)
    } else {
        return productos.sort((productoA, productoB) => productoA.precio - productoB.precio)
    }
}

// Aca ponemos en funcionamiennto el boton de ordenar
botonesOrdenar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id == "menor") {
            cargarProductos(compararPorPrecio(productos))
            arrayDeFiltros.splice(1, 1, e.currentTarget.id)
            if (arrayDeFiltros.includes("mayor")) {
                let index = arrayDeFiltros.indexOf("mayor")
                arrayDeFiltros.splice(index, 1)
            }
            cargarImgFiltros()
        }
        else {
            arrayDeFiltros.splice(1, 1, e.currentTarget.id)
            if (arrayDeFiltros.includes("menor")) {
                let index = arrayDeFiltros.indexOf("menor")
                arrayDeFiltros.splice(index, 1)
            }
            cargarImgFiltros()
            cargarProductos(compararPorPrecio(productos).reverse())
        }
    })
})

// Funcion para cargar los filtros en su contenedor
function cargarImgFiltros() {
    contenedorFiltrosAplicados.innerHTML = ""
    arrayDeFiltros.forEach(filtro => {
        let index = imgFiltros.findIndex(i => i.nombre === filtro)
        let img = document.createElement("img")
        img.classList.add("filtro-aplicado")
        img.setAttribute("id", filtro)
        img.src = imgFiltros[index].link
        contenedorFiltrosAplicados.append(img)
    })
    // Evento para eliminar un filtro cuando se hace clic en una imagen de filtro
    contenedorFiltrosAplicados.addEventListener("click", (e) => {
        if (e.target.classList.contains("filtro-aplicado")) {
            const filtroRemovido = e.target.id
            const index = arrayDeFiltros.indexOf(filtroRemovido)
            if (index !== -1) {
                arrayDeFiltros.splice(index, 1)
                cargarImgFiltros()
                // Volver a aplicar los filtros después de eliminar el filtro
                if (filtroRemovido == "mayor" || filtroRemovido == "menor" && filtroActivo == null) {
                    cargarProductos(productos)
                }
                else if (filtroRemovido == "mayor" || filtroRemovido == "menor" && filtroActivo != null) {
                    let arrayProductosConFiltroActivo = productos.filter(producto => producto.categoria.id == filtroActivo)
                    cargarProductos(arrayProductosConFiltroActivo)
                }
                else if (filtroRemovido == filtroActivo) {
                    cargarProductos(productos)
                    botonesFiltros.forEach(boton => boton.classList.remove("active"))
                    filtroActivo = null
                    console.log("culo")
                }
            }
        }
    })
}

// Funcion para filtrar productos por titulo
function filtrarPorTitulo(textoBusqueda) {
    if (filtroActivo !== null) {
        return productos.filter(producto =>
            producto.categoria.id === filtroActivo && producto.titulo.toLowerCase().includes(textoBusqueda.toLowerCase())
        )
    } else {
        return productos.filter(producto =>
            producto.titulo.toLowerCase().includes(textoBusqueda.toLowerCase())
        )
    }
}

// Evento oninput del buscador
buscador.oninput = (e => {
    e.preventDefault()
    const textoBusqueda = e.target.value

    if (textoBusqueda === "") {
        cargarProductos(filtrarPorTitulo(""))
    } else if (textoBusqueda.length > 1) {
        const productosFiltrados = filtrarPorTitulo(textoBusqueda)
        cargarProductos(productosFiltrados)
    }
});

function mostrarAlerta() {
    if (!alerta) {
        alertDeseo.classList.remove("d-none");
        setTimeout(() => {
            alertDeseo.classList.add("d-none");
        }, 2000);
    }
}
