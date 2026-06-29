document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (e) {

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "") {
            alert("Por favor ingrese su nombre.");
            e.preventDefault();
            return;
        }

        if (correo === "") {
            alert("Por favor ingrese su correo electrónico.");
            e.preventDefault();
            return;
        }

        let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresion.test(correo)) {
            alert("Ingrese un correo electrónico válido.");
            e.preventDefault();
            return;
        }

        if (mensaje === "") {
            alert("Por favor escriba un mensaje.");
            e.preventDefault();
            return;
        }

        let confirmar = confirm("¿Está seguro de enviar la consulta?");

        if (!confirmar) {
            e.preventDefault();
            return;
        }

        alert("¡Consulta enviada correctamente!");
    });

});