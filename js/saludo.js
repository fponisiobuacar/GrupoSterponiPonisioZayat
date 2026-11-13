let formulario = document.querySelector('.buscador');
let buscador = document.querySelector('.buscador input');

formulario.addEventListener('submit', function(e) {

    if (buscador.value == "") {
        e.preventDefault();
        alert("El campo de búsqueda está vacío");
    }

    else if (buscador.value.length < 3) {
        e.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres");
    }

});


window.addEventListener("load", function () {

    let usuario = localStorage.getItem("usuario");

    if (usuario != null) {
        let liLogin = document.querySelector("#li-login");
        let liRegistro = document.querySelector("#li-registro");
        let menu = document.querySelector(".navul");

        liLogin.style.display = "none";
        liRegistro.style.display = "none";

        let bienvenida = document.createElement("li");
        bienvenida.id = "bienvenida";
        bienvenida.innerHTML = "Bienvenido: " + usuario;

        let liLogout = document.createElement("li");
        liLogout.id = "li-logout";
        liLogout.innerHTML = '<a href="#" id="logout">Logout</a>';

        menu.appendChild(bienvenida);
        menu.appendChild(liLogout);
    }

});