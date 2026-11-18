let formulario = document.querySelector(".buscador");
let buscador = document.querySelector(".buscador input");

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
            <article>
                <img src="${productos.thumbnail}" alt="${productos.title}">
                <p>${productos.brand ? productos.brand : ""}</p>
                <h2>${productos.title}</h2>
                <p>${productos.description}</p>
                <a href="./product.html?id=${productos.id}">
                    <span class="precios">$ ${productos.price}</span>
                    <div>
                        <p>Ver detalle</p>
                    </div>
                </a>
            </article>`;
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
            <article>
                <img src="${productos.thumbnail}" alt="${productos.title}">
                <h2>${productos.title}</h2>
                <p>${productos.description}</p>
                <a href="./product.html?id=${productos.id}">
                    <span class="precios">$ ${productos.price}</span>
                    <div>
                        <p>Ver detalle</p>
                    </div>
                </a>
            </article>`;
        }
    })
    .catch(function(error) {
        console.log("el error es: " + error);
    })

let listaCategorias = document.querySelector("#lista-categorias");


fetch("https://dummyjson.com/products/categories/")
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


let parametros = new URLSearchParams(window.location.search);
let categoria = parametros.get("categoria");

if (categoria != null) {

    tituloCategoria.innerText = categoria;

    fetch("https://dummyjson.com/products/category/" + categoria + "?limit=10")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            cantidadproductos.innerText = data.products.length + " productos";

            for (let i = 0; i < data.products.length; i++) {

                let productos = data.products[i];

                productosCategoria.innerHTML += `
                    <article>
                        <img src="${productos.thumbnail}" alt="${productos.title}">
                        <p>${productos.brand ? productos.brand : ""}</p>
                        <h2>${productos.title}</h2>
                        <p>${productos.description}</p>

                        <a href="./product.html?id=${productos.id}">
                            <span class="precios">$ ${productos.price}</span>
                            <div>
                                <p href="./product.html?id=${productos.id}">Ver detalle</p>
                            </div>
                        </a>
                    </article>
                `;
            }

            if (data.products.length == 0) {
                productosCategoria.innerText = "No hay productos en esta categoría";
            }

        })
        .catch(function(error) {
            console.log("El error es: " + error);
        });

}
