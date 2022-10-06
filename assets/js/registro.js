let nombre = document.getElementById("nombres")
let apellido = document.getElementById("apellidos")
let email = document.getElementById("correo")
let password = document.getElementById("password")
let registrar = document.getElementById("botons")
let form = document.getElementById("registrar")

registrar.addEventListener("click", function () {
    if (nombre.value && apellido.value && email.value && password.value) {
        let usuarioDB = JSON.parse(window.localStorage.getItem("usuarios"))
        if (!usuarioDB) {
            usuarioDB = []
        }
        if (usuarioDB.find(x => x.correo === email.value)) {
            showToast("El correo ya se encuantra registrado")
        } else {
            usuarioDB.push({ "nombres": nombre.value, "apellidos": apellido.value, "correo": email.value, "password": password.value })
            window.localStorage.setItem("usuarios", JSON.stringify(usuarioDB))
            form.reset()
            showToast("Guardado correctamente")
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
}