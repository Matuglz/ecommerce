const productosDestacados = [
    //ZAPATO
    {
        id: "zapato-0",
        titulo: "Zapato FERCHO",
        imagen: "../productos/zapatos/zapato-0.webp",
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
    // ZAPATILLA
    {
        id: "zapatilla-0",
        titulo: "Zapatilla ARRUINARSE",
        imagen: "../productos/zapatillas/zapatilla-0.webp",
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
    //BOTA
    {
        id: "botas-0",
        titulo: "Bota PERFECTA",
        imagen: "../productos/botas/botas-0.webp",
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
    }

]

const contenedorProductosDestacados = document.querySelector(".contendor-productos-destacados")
const contenedorModal = document.querySelector(".modal-comprar-body")
const alertDeseo = document.querySelector(".alert-agregado")
const alerta = false

const CARRITO = JSON.parse(localStorage.getItem("carrito")) ||  []

function cargarProductosDestacados() {
    productosDestacados.forEach(producto => {
        let div = document.createElement("div")
        div.classList.add("col")
        div.innerHTML = `
        <div class="card h-100">
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="card-body">
              <h3 class="card-title">${producto.titulo}</h3>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary"><button id=${producto.id} class="btn-comprar btn btn-sm btn-outline-dark"><i class="fa-solid fa-cart-shopping"></i></button></small>
            </div>
        `
        contenedorProductosDestacados.append(div)

    })
}
cargarProductosDestacados()


const botonesComprar = document.querySelectorAll(".btn-comprar")

// Abrir modal de los botones comprar
botonesComprar.forEach(boton => {
    contenedorModal.innerHTML=""
    boton.addEventListener("click", (e) => {
        contenedorModal.classList.remove("d-none")
        botonesComprar.forEach(b => b.classList.remove("active"))
        e.currentTarget.classList.add("active")
        let index = e.currentTarget.id
        let modal = productosDestacados.filter(producto => producto.id == index)
        let nombre = modal[0].titulo
        let imagen = modal[0].imagen;
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
            contenedorModal.innerHTML=""
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


            //SELECCIONAR TALLE
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

function mostrarAlerta() {
    if (!alerta) {
        alertDeseo.classList.remove("d-none");
        setTimeout(() => {
            alertDeseo.classList.add("d-none");
        }, 2000);
    }
}


