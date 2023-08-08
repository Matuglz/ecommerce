// Array con todos los producos
const productos = [
    //ZAPATOS
    {
        id: "zapato-0",
        titulo: "Zapato FERCHO",
        imagen: "../../productos/zapatos/zapato-0.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 22500
    },
    {
        id: "zapato-1",
        titulo: "Zapato MERCHO",
        imagen: "../../productos/zapatos/zapato-1.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 27000
    },
    {
        id: "zapato-2",
        titulo: "Zapato OZUNA",
        imagen: "../../productos/zapatos/zapato-2.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 20000
    },
    {
        id: "zapato-3",
        titulo: "Zapato YSY-A",
        imagen: "../../productos/zapatos/zapato-3.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 16000
    },
    {
        id: "zapato-4",
        titulo: "Zapato C-R-O",
        imagen: "../../productos/zapatos/zapato-4.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 25000
    },
    {
        id: "zapato-5",
        titulo: "Zapato DUKI",
        imagen: "../../productos/zapatos/zapato-5.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 20500
    },
    {
        id: "zapato-6",
        titulo: "Zapato NEO-PISTEA",
        imagen: "../../productos/zapatos/zapato-6.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 23700
    },
    {
        id: "zapato-7",
        titulo: "Zapato ASAN",
        imagen: "../../productos/zapatos/zapato-7.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 33000
    },
    {
        id: "zapato-8",
        titulo: "Zapato MIDEL",
        imagen: "../../productos/zapatos/zapato-8.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 15000
    },
    {
        id: "zapato-9",
        titulo: "Zapato TOBI",
        imagen: "../../productos/zapatos/zapato-9.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 14500
    },
    // ZAPATILLAS
    {
        id: "zapatilla-0",
        titulo: "Zapatilla ARRUINARSE",
        imagen: "../../productos/zapatillas/zapatilla-0.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 29000
    },
    {
        id: "zapatilla-1",
        titulo: "Zapatilla LOCA",
        imagen: "../../productos/zapatillas/zapatilla-1.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 33000
    },
    {
        id: "zapatilla-2",
        titulo: "Zapatilla BEAUTIFUL",
        imagen: "../../productos/zapatillas/zapatilla-2.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 30000
    },
    {
        id: "zapatilla-3",
        titulo: "Zapatilla CLARAMENTE",
        imagen: "../../productos/zapatillas/zapatilla-3.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 40000
    },
    {
        id: "zapatilla-4",
        titulo: "Zapatilla CARNAVALITO",
        imagen: "../../productos/zapatillas/zapatilla-4.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 35000
    },
    {
        id: "zapatilla-5",
        titulo: "Zapatilla DOMINGUICIDIO",
        imagen: "../../productos/zapatillas/zapatilla-5.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 32000
    },
    {
        id: "zapatilla-6",
        titulo: "Zapatilla PERDIDA",
        imagen: "../../productos/zapatillas/zapatilla-6.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 41000
    },
    {
        id: "zapatilla-7",
        titulo: "Zapatilla ELLA",
        imagen: "../../productos/zapatillas/zapatilla-7.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 37500
    },
    {
        id: "zapatilla-8",
        titulo: "Zapatilla PETALOS",
        imagen: "../../productos/zapatillas/zapatilla-8.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 33700
    },
    {
        id: "zapatilla-9",
        titulo: "Zapatilla CHICA BIONICA",
        imagen: "../../productos/zapatillas/zapatilla-9.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 38900
    },
    //BOTAS
    {
        id: "botas-0",
        titulo: "Bota PERFECTA",
        imagen: "../../productos/botas/botas-0.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 55000
    },
    {
        id: "botas-1",
        titulo: "Bota MENTIA",
        imagen: "../../productos/botas/botas-1.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 57500
    },
    {
        id: "botas-2",
        titulo: "Bota ENAMORADA",
        imagen: "../../productos/botas/botas-2.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 60000
    },
    {
        id: "botas-3",
        titulo: "Bota DON",
        imagen: "../../productos/botas/botas-3.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 62500
    },
    {
        id: "botas-4",
        titulo: "Bota DOS",
        imagen: "../../productos/botas/botas-4.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 65000
    },
    {
        id: "botas-5",
        titulo: "Bota PERFECTA",
        imagen: "../../productos/botas/botas-5.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 67500
    },
    {
        id: "botas-6",
        titulo: "Bota UNO los DOS",
        imagen: "../../productos/botas/botas-6.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 88000
    },
    {
        id: "botas-7",
        titulo: "Bota PRISIONERO",
        imagen: "../../productos/botas/botas-7.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 52000
    },
    {
        id: "botas-8",
        titulo: "Bota NAVIDAD",
        imagen: "../../productos/botas/botas-8.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 48000
    },
    {
        id: "botas-9",
        titulo: "Bota TRAICION",
        imagen: "../../productos/botas/botas-9.webp",
        talles: {
            31: 10,
            32: 10,
            33: 10,
            34: 10,
            35: 10,
            36: 10,
            37: 10,
            38: 10,
        },
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 180000
    }
]
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

const CARRITO = JSON.parse(localStorage.getItem("carrito")) ||  []



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
            botonCarritoModal.addEventListener("click",()=>{
                
                contenedorModal.classList.add("d-none")
                botonesComprar.forEach(boton => boton.classList.remove("active"))
                contenedorModal.innerHTML = ""
                
                //SELECCIONAR TALLE Y EVNIAR PRODUCTO AL CARRITO
                let botonesArray = Array.from(botonesTalle)
                let botonSeleccionado = botonesArray.find((boton) => boton.classList.contains("active"))
                let talle = botonSeleccionado.innerHTML
                let cantidad = 1
                let productoPreparado = {nombre,imagen,precio, talle, cantidad,id}
                CARRITO.push(productoPreparado)
                localStorage.setItem("carrito",JSON.stringify(CARRITO))
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

