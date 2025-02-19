
//SIMULACIÓN DE UNA DESCARGA DE ARCHIVSO

//1. creamos una funcion con una promesa y con setTimeOut() para simular la espera

function descargarArchivo(nombreArchivo, tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`✅ Archivo ${nombreArchivo} descargado.`);
        }, tiempo);
    });
}


// función asincrona
async function gestionarDescarga() {
    console.log("📥 Descargando archivo1.pdf...");
    const archivo1 = await descargarArchivo("archivo1.pdf", 2000); // Espera 2s
    console.log(archivo1);

    console.log("📥 Descargando archivo2.jpg...");
    const archivo2 = await descargarArchivo("archivo2.jpg", 3000); // Espera 3s
    console.log(archivo2);

    console.log("📥 Descargando archivo3.mp3...");
    const archivo3 = await descargarArchivo("archivo3.mp3", 1500); // Espera 1.5s
    console.log(archivo3);

    console.log("🎉 Todos los archivos han sido descargados.");
}


gestionarDescarga()