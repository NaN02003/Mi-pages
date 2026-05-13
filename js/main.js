document.addEventListener('DOMContentLoaded', () => {

    const boton = document.getElementById('btnMenu');
    const menu = document.getElementById('header');
    const linea = document.querySelector('.linea');
    const contenido = document.querySelector('.contenido-principal');

    boton.addEventListener('click', () => {

        menu.classList.toggle('cerrado');
        linea.classList.toggle('cerrado');

        // Ajustar contenido
        contenido.classList.toggle('expandido');

        // Cambiar icono
        if(menu.classList.contains('cerrado')){
            boton.innerHTML = '☰';
        } else {
            boton.innerHTML = '✕';
        }

    });

});