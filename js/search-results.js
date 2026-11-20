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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let termino = queryStringObj.get('buscar');

let titulo = document.querySelector('.titulo-busqueda');
let contenedor = document.querySelector('.lista-productos');

titulo.innerText = "Resultados de búsqueda para: " + termino;

let url = "https://dummyjson.com/products/search?q=" + termino;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let productos = data.products;

        if (productos.length == 0) {
            titulo.innerText = "No hay resultados para el término: " + termino;
        }

        else {
            let html = "";

            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i];
                let marca = "";

                if (producto.brand) {
                marca = producto.brand;
                }
                html += `
                <article>
                    <img src="${producto.thumbnail}" alt="${producto.title}">
                    <p>${marca}</p>
                    <h2>${producto.title}</h2>
                    <p>${producto.description}</p>
                    <a href="./product.html?id=${producto.id}">
                        <span class="precios">$ ${producto.price}</span>
                        <div>
                            <p>Ver detalle</p>
                        </div>
                    </a>
                </article>`;
            }

            contenedor.innerHTML = html;
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });

    let listaCategorias = document.querySelector("#lista-categorias");

fetch("https://dummyjson.com/products/categories")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        for (let i = 0; i < data.length; i++) {

            listaCategorias.innerHTML += `
                <li>
                    <a href="./category.html?categoria=${data[i].slug}">
                        ${data[i].name}
                    </a>
                </li>
            `;
        }

    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });