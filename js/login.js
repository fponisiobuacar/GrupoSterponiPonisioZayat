let loginForm = document.querySelector('.emaillogin');
let emailLogin = document.querySelector('#email-login');
let claveLogin = document.querySelector('#clave-login');

if (loginForm != null) {
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
        else {
            localStorage.setItem("usuario", emailLogin.value);
        }
    });
}