// Cuando el usuario se logea
export const iniciarConteo = () => {
    // Guarda el tiempo actual en una cookie
    var tiempoInicio = new Date().getTime();
    var fechaInicio = new Date(tiempoInicio);
    console.log("Tiempo de inicio: " + fechaInicio);
    
    document.cookie = "tiempoInicio=" + tiempoInicio;
}

// Cuando el usuario se deslogea o cierra la página
export const detenerConteo = () => {
    // Obtiene el tiempo de inicio de la cookie
    var tiempoInicio = getCookie("tiempoInicio");

    // Si se encuentra la cookie
    if (tiempoInicio) {
        tiempoInicio = parseInt(tiempoInicio);

        // Calcula la diferencia de tiempo
        var tiempoTranscurrido = new Date().getTime() - tiempoInicio;

        // Convierte el tiempo a segundos o el formato que prefieras
        var tiempoEnSegundos = Math.floor(tiempoTranscurrido / 1000);

        // Puedes enviar este valor al servidor o hacer lo que necesites con él
        console.log("El usuario estuvo logeado por " + tiempoEnSegundos + " segundos.");

        // Elimina la cookie
        document.cookie = "tiempoInicio=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}

// Función para obtener el valor de una cookie
export const getCookie = (nombre) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + nombre + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}