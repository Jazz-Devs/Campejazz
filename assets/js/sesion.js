/*
let email = document.getElementById("correo")
let password = document.getElementById("password")
let registrar = document.getElementById("botons")
let form = document.getElementById("registrar")

password.addEventListener("click", function () {
    if ( email.value && password.value) {
        let passwordDB = JSON.parse(window.localStorage.getItem("password"))
        if (!passwordDB) {
            passwordDB = []
        }
        if (passwordDB.find(x != x.password === password.value)) {
            showToast("Contraseña Incorrecta")
        } else {
            passwordDB.push({ "correo": email.value, "password": password.value })
            window.localStorage.setItem("password", JSON.stringify(passwordDB))
            form.reset()
            showToast("Inicio de Sesion Exitosa")
        }

    } else {
        showToast("Debe llenar todos los campos")
    }
})

function showToast(msg) {
    let spanMsg = document.getElementById("msg")
    spanMsg.innerHTML = msg
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}*/

let email = document.getElementById("correo")
let password = document.getElementById("password")
let btnLogin = document.getElementById("btnLogin")
function login() {
    let usuario = JSON.parse(window.localStorage.getItem("usuarios")).find(x =>x.correo === email.value)
     if (usuario) {
       if (email.value == usuario.correo && password.value == usuario.password) {
            console.log("Bienvenido")
            window.location.href = ("./index1.html")
        } else {
            console.warn("No son las credenciales correctas")
        }
    } else {
        console.warn("El correo no esta registrado")
    }
}

btnLogin.addEventListener("click", login)