import { eliminarDelCarrito } from "./notifications.js"

const carritoContainer = document.getElementById('carrito')

function mostrarEnCarrito(titulo,imagen,precio){

    const cardCarrito = document.createElement('div')
    cardCarrito.classList.add('carrito-item')

    cardCarrito.innerHTML = `
        <img src="${imagen}" alt="">
        <h3>${titulo}</h3>
        <p>${precio}</p>
        <button class="eliminar-button">Eliminar</button>
        `

        carritoContainer.appendChild(cardCarrito)

        const eliminarButton = cardCarrito.querySelector('.eliminar-button')
        eliminarButton.addEventListener('click', async () => {
            await eliminarProductoDelCarrito(cardCarrito)
        })
        
}

async function eliminarProductoDelCarrito(cardCarrito){
    const eliminar = await eliminarDelCarrito()

    if (eliminar && eliminar.isConfirmed) {
        cardCarrito.remove()
        Swal.fire({
            toast: true,
            position: 'bottom-end',
            title: "Eliminado",
            text: "Tu producto se ha eliminado del carrito.",
            icon: "success",
            showConfirmButton: false,
            timer: 1000
        })
    }
}



export { mostrarEnCarrito }
