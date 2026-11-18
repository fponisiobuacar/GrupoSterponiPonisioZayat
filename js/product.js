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


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idproducto = queryStringObj.get("id");

if (idproducto != null) {

    fetch("https://dummyjson.com/products/" + idproducto)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            document.querySelector("#product-image").src = data.thumbnail;
            document.querySelector("#product-image").alt = data.title;

            document.querySelector("#product-title").innerText = data.title;

            document.querySelector("#product-brand").innerText =
                data.brand ? data.brand : "Sin marca";

            document.querySelector("#product-description").innerText =
                data.description;

            document.querySelector("#product-price").innerText =
                "$ " + data.price;

            document.querySelector("#product-stock").innerText =
                "Stock: " + data.stock;

            let categoria = document.querySelector("#product-category");

            categoria.innerText = data.category;
            categoria.href = "./category.html?categoria=" + data.category;

            let tags = document.querySelector("#product-tags");

        for (let i = 0; i < data.tags.length && i < 3; i++) {

        tags.innerHTML += `<li>${data.tags[i]}</li>`;
        }

        let reviews = document.querySelector("#lista-reviews");

        for (let i = 0; i < data.reviews.length; i++) {

        reviews.innerHTML += `
        <article class="review">

            <div class="reviewheader">

                <h3 class="reviewusuario">${data.reviews[i].reviewerName}</h3>

                <p class="reviewfecha">${data.reviews[i].date}</p>

            </div>

            <p class="reviewrating">Rating: ${data.reviews[i].rating}/5</p>

            <p class="reviewtexto">${data.reviews[i].comment}</p>

        </article>`;
        }

        })
        .catch(function(error) {
            console.log("El error es: " + error);
        });

} else {
    document.querySelector("#product-title").innerText =
        "No se seleccionó ningún producto";
}

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

