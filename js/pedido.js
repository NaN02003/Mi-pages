let carrito = [];
let total = 0;


function agregarAlPedido(producto, precio) {
    if (producto === 'Otro') {
        let detalle = prompt("¿Qué producto deseas agregar?");
        if (!detalle) return; // Si cancela el prompt, no agrega nada
        producto = `Otro: ${detalle}`;
        precio = parseInt(prompt("¿Qué precio tiene? (0 si no sabes)")) || 0;
    }

    // Agregamos al carrito
    carrito.push({ nombre: producto, precio: precio });
    actualizarInterfaz();
}

function eliminarDelPedido(index) {
    // Quitamos el elemento del array usando su posición
    carrito.splice(index, 1);
    actualizarInterfaz();
}

function actualizarInterfaz() {
    const lista = document.getElementById('lista-items');
    const totalTxt = document.getElementById('total-precio');
    
    lista.innerHTML = ""; // Limpiamos la lista visual
    total = 0; // Reiniciamos el total para volver a calcular

    carrito.forEach((item, index) => {
        total += item.precio;

        // Creamos el elemento de la lista con un botón de eliminar
        lista.innerHTML += `
            <li class="item-carrito">
                <span>${item.nombre} - $${item.precio}</span>
                <button class="btn-eliminar" onclick="eliminarDelPedido(${index})">
                    <i class="bi bi-trash"></i> Borrar
                </button>
            </li>
        `;
    });
    
    totalTxt.innerText = total;
}

function enviarPedido() {
    const nombre = document.getElementById('nombre-us').value;
    const direccion = document.getElementById('dire-us').value;
    
    if (carrito.length === 0) {
        alert("¡El pedido está vacío!");
        return;
    }

    if(!direccion || !nombre){
        alert("Por favor, completa tu nombre y direccion para la entrega.");
        return;
    }
    
    let mensaje = "*Hola Sofia!%0A*";
    mensaje += `Este es un pedido de: *${nombre}*.%0A`;
    mensaje += `Direccion: *${direccion}*%0A%0A`;
    
    mensaje += "Detalle del pedido:%0A";
    carrito.forEach(item => {
        mensaje += `- ${item.nombre} ($${item.precio})%0A`;
    });
    mensaje += `%0ATotal: $${total}`;
    
    window.open(`https://wa.me/5493858473418?text=${mensaje}`, '_blank');
}