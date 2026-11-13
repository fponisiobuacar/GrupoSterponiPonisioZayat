window.addEventListener("load", function () {

    let logout = document.querySelector("#logout");

    if (logout == null) {
        return;
    }

    logout.addEventListener("click", function (evento) {
        evento.preventDefault();

        localStorage.removeItem("usuario");

        document.querySelector("#bienvenida").style.display = "none";
        document.querySelector("#li-logout").style.display = "none";

        document.querySelector("#li-login").style.display = "";
        document.querySelector("#li-registro").style.display = "";
    });

});