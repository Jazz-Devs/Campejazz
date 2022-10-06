document.getElementById("add-alert").addEventListener("click", function () {
    window.location.href = ("./form.html?")
});

(function crearListaPublicaciones() {
    var html = '';
    let publicacionesDB = JSON.parse(window.localStorage.getItem("publicaciones"))
    for (var i = 0; i <= publicacionesDB.length-1; i++) {
        html += 
        `<label class="list-group-item d-flex gap-3"> 
            <span class="pt-1 form-checked-content">
                <strong>Publicacion</strong>
                <small class="d-block text-muted">
                    <svg class="bi me-1" width="1em" height="1em">
                       <use xlink:href="#calendar-event" />
                    </svg>
                    <br>
                    <span>
                    Nombre Usuario : ${publicacionesDB[i].nombreUsuario}
                    </span>
                    <br>
                    <span>
                    Producto : ${publicacionesDB[i].producto}
                    </span>
                    <br>
                    <span>
                    Contacto : ${publicacionesDB[i].contacto}
                    <span>
                    <br>
                    <span>
                    Pueblo : ${publicacionesDB[i].pueblo}
                    <span>
                    <br>
                    <span>
                    Vereda : ${publicacionesDB[i].vereda}
                    <span>
                    <br>
                    Observacion : ${publicacionesDB[i].observacion}
                    </span>
                    </span>
                </small>
            </span>
        </label>`
    }
    document.getElementById('container-list').innerHTML += html;
})()