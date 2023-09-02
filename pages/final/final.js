let boton = document.querySelector("#confetti")

confetti({
    particleCount: 500
});

setTimeout(() => {
    confetti()
}, 1000);

const contenedorFinal = document.querySelector("#final")

function final() {
    contenedorFinal.innerHTML=""
    const datos = JSON.parse(sessionStorage.getItem('datos'))
    let div = document.createElement("div")
    div.classList.add("text-center","my-5")
    div.innerHTML = `
Gracias por tu compra! <br>
en instantes te vamos a enviar un mail a ${datos[0]} <br>
Tus productos seran enviados a ${datos[1]} ${datos[2]}
`
   contenedorFinal.append(div)

   localStorage.removeItem("carrito")
}

final()