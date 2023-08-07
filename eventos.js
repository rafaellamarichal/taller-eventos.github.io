 // Esperar a que el contenido de la página se cargue completamente
 document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el elemento div con la clase ".boton-div"
    const divElement = document.querySelector(".boton-div");

    // Agregar un manejador de eventos al div para el evento "click"
    divElement.addEventListener("click", function () {
        // Mostrar una alerta con el mensaje "Hola! Soy el div"
        alert("Hola! Soy el div");
    });
});







