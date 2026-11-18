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

let celulares = document.querySelector("#productos-celulares");
let computadoras = document.querySelector("#productos-computadoras");  

fetch("https://dummyjson.com/products/category/smartphones?limit=10")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.products.length; i++) {
            let productos = data.products[i];
            celulares.innerHTML += `
                <div class="producto">
                    <img src="${productos.images[i]}" alt="${productos.title}">
                    <h3>${productos.title}</h3>
                    <p>${productos.description}</p>
                    <p>$${productos.price.toFixed(2)}</p>
                </div>
            `;
        }       
    })
    .catch(function(error) {
        console.log("el error es: " + error);
    })

fetch("https://dummyjson.com/products/category/laptops?limit=10")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (let i = 0; i < data.products.length; i++) {
            let productos = data.products[i];
            computadoras.innerHTML += `
                <div class="producto">
                    <img src="${productos.images[i]}" alt="${productos.title}">
                    <h3>${productos.title}</h3>
                    <p>${productos.description}</p>
                    <p>$${productos.price.toFixed(2)}</p>
                </div>
            `;
        }
    })
    .catch(function(error) {
        console.log("el error es: " + error);
    });
