window.addEventListener("load", function () {


    let formularioBuscador = document.querySelector('.buscador');
    let inputBuscador = document.querySelector('.buscador input');

    if (formularioBuscador != null) {
        formularioBuscador.addEventListener('submit', function (e) {

            if (inputBuscador.value == "") {
                e.preventDefault();
                alert("El campo de búsqueda está vacío");
            }

            else if (inputBuscador.value.length < 3) {
                e.preventDefault();
                alert("La búsqueda debe tener al menos 3 caracteres");
            }

        });
    }

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