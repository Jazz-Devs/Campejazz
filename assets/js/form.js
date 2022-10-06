let nombreUsuario = document.getElementById("nombreUsuario")
let producto = document.getElementById("producto")
let contacto = document.getElementById("contacto")
let pueblo = document.getElementById("pueblo")
let vereda = document.getElementById("vereda")
let observacion = document.getElementById("observacion")
let btnAgregarPublicacion = document.getElementById("btnAgregarPublicacion")
let form = document.getElementById("publicacionForm")

btnAgregarPublicacion.addEventListener("click", function () {
    if (nombreUsuario.value && producto.value && contacto.value && pueblo.value && vereda.value && observacion.value) {
        let publicacionesDB = JSON.parse(window.localStorage.getItem("publicaciones"))
        if (!publicacionesDB) {
            publicacionesDB = []
        }
        publicacionesDB.push({ "nombreUsuario": nombreUsuario.value, "producto": producto.value, "contacto": contacto.value, "pueblo": pueblo.value, "vereda": vereda.value, "observacion": observacion.value })
        window.localStorage.setItem("publicaciones", JSON.stringify(publicacionesDB))
        form.reset()
        showToast("Guardado correctamente")
    }else{
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