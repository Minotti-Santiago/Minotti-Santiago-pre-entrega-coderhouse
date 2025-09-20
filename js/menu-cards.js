import { mostrarEnCarrito } from "./carrito.js"
import { agregadoAlCarrito } from "./notifications.js"

const menu = document.getElementById('menu')

function showProducts(){
    fetch ('productos.json')
    .then(Response => Response.json())
    .then(productos => {

        productos.forEach(producto => {

            const card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = `
            <div class="img--food-container">
                        <img src="${producto.imagen}" alt="">
                    </div>
                    <div class="card--food-container">
                        <h3 class="card--food-name">${producto.nombre}</h3>
                        <p class="card--food-price">${producto.precio}</p>
                        <p class="card--food-description">${producto.descripcion}</p>
                    </div>
                    <a class="card--food-button" href="#">AGREGAR AL CARRITO</a>
            `
            
            const agregarAlCarritoButton = card.querySelector('.card--food-button')

            agregarAlCarritoButton.addEventListener('click', () =>{
                const agregado = agregadoAlCarrito()

                mostrarEnCarrito(producto.nombre,producto.imagen,producto.precio)
            })

            menu.appendChild(card)
        })
    })
}

export {showProducts}
