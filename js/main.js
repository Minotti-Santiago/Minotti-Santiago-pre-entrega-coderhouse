import {showProducts} from './menu-cards.js'


document.addEventListener('DOMContentLoaded', function(){
    showProducts()
})

const abrirCarrito = document.getElementById('abrir-carrito')
const carritoSection = document.getElementById('carrito-section')
const cerrarCarrito = document.getElementById('cerrar-carrito')

abrirCarrito.addEventListener('click', function(){
    carritoSection.style.width = '500px'
    carritoSection.style.backgroundColor = 'red'
    cerrarCarrito.style.width = '50px'
})

cerrarCarrito.addEventListener('click', function(){
    carritoSection.style.width = '0'
    carritoSection.style.backgroundColor = 'transparent'
    cerrarCarrito.style.width = '0px'
})






