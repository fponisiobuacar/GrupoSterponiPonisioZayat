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

let registerForm = document.querySelector('.emailregister');

let email = document.querySelector('#email-register');
let clave = document.querySelector('#clave-register');
let repetirClave = document.querySelector('#repetir-clave');

if (registerForm != null) {
    registerForm.addEventListener('submit', function(e) {

        if (email.value == "") {
            e.preventDefault();
            alert("El campo email es obligatorio");
        }
        else if (clave.value == "") {
            e.preventDefault();
            alert("El campo contraseña es obligatorio");
        }
        else if (clave.value.length < 6) {
            e.preventDefault();
            alert("La contraseña debe tener al menos 6 caracteres");
        }
        else if (clave.value != repetirClave.value) {
            e.preventDefault();
            alert("Las contraseñas no coinciden");
        }

    });
}