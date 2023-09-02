const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = document.getElementById('email')
    let calle = document.getElementById('calle')
    let altura = document.getElementById('altura')
    let ciudad = document.getElementById('ciudad')
    let provincia = document.getElementById('provincia')

    if (email.value !== "" &&
        calle.value !== "" &&
        altura.value !== "" &&
        ciudad.value !== "" &&
        provincia.value !== "") {
            let datos= []
        
         onsubmit(
            datos.push(email.value, calle.value,altura.value,ciudad.value,provincia.value),
            sessionStorage.setItem('datos', JSON.stringify(datos)),
             window.location.href = "../final/final.html",)
    } else {
        console.log("object");
    }
})

