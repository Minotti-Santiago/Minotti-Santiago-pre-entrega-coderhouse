function agregadoAlCarrito(){

    return Swal.fire({
        toast: true,
        position: 'bottom-end',
        title: "Tu producto se agrego al carrito",
        icon: "success",
        confirmButtonText: false,
        confirmButtonColor: "#fff",
        timer: 2500
    });
}
    
function eliminarDelCarrito(){

    return Swal.fire({
        title: "¿Estas seguro de eliminar el producto?",
        text: "No podras revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminarlo!"
    });
}

export {agregadoAlCarrito, eliminarDelCarrito}
