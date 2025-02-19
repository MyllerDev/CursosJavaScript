// las promesas son objetos que representan la terminación o el fracaso de una operación asíncrona


// Ejemplo de promesa para verificar puntualidad
// Función para verificar si llegaste a tiempo usando una Promesa
const verificarLlegada = (horaLlegada) => {
    return new Promise((resolve, reject) => {
        // Convertimos la hora límite a un objeto Date
        const horaLimite = new Date(`2024-01-01T08:00:00`);

        // Convertimos la hora de llegada a un objeto Date
        const horaUsuario = new Date(`2024-01-01T${horaLlegada}`);

        // Comparamos las horas correctamente
        if (horaUsuario <= horaLimite) {
            resolve(`Recibiste un bono por puntualidad. Llegaste a las ${horaLlegada}`);
        } else {
            reject(`Usted llegó tarde a la jornada. Llegaste a las ${horaLlegada}`);
        }
    });
};

// Llamamos a la función con una hora de llegada
verificarLlegada('08:00:00') // Cambia este valor para probar diferentes escenarios
    .then((respuesta) => {
        console.log(respuesta); // Mensaje si llegaste a tiempo
    })
    .catch((error) => {
        console.error(error); // Mensaje si llegaste tarde
    });
