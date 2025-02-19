// resolver el problema de las promesas encadenadas

// Simula la preparación de un café con una demora de 3 segundos
function prepararCafe() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("☕ Tu café está listo!");
        }, 3000);
    });
}

// Función asíncrona que usa await para esperar la preparación del café
async function hacerCafe() {
    console.log("🕒 Preparando café...");

    const mensaje = await prepararCafe(); // Esperamos a que la promesa se resuelva

    console.log(mensaje); // Mostramos el mensaje cuando la promesa se resuelve
}

// Llamamos a la función
hacerCafe();
