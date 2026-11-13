let formulario = document.querySelector('.buscador');
let buscador = document.querySelector('input');

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


let loginForm = document.querySelector('.emaillogin');
let emailLogin = document.querySelector('#email-login');
let claveLogin = document.querySelector('#clave-login');

loginForm.addEventListener('submit', function(e) {

    if (emailLogin.value == "") {
        e.preventDefault();
        alert("El campo email es obligatorio");
    }

    else if (claveLogin.value == "") {
        e.preventDefault();
        alert("El campo contraseña es obligatorio");
    }

    else if (claveLogin.value.length < 6) {
        e.preventDefault();
        alert("La contraseña debe tener al menos 6 caracteres");
    }

});