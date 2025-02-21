function consultarBdt(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 1) {
        resolve(`El id del usuario es: ${id}`)
      } else {
        reject(`El id del es menor a 1, vuelva a intentarlo`)
      }
    }, 2000);
  });
}

async function asincronia(){
    try{
        console.log('Iniciando consulta en la base de Datos...')

        const msj1 = await consultarBdt(5)
        console.log(msj1)
        const msj2 = await consultarBdt(3)
        console.log(msj2)
        const msj3 = await consultarBdt(7)
        console.log(msj3)

        console.log('Consulta Terminada con éxito.')

    }catch (error){
        console.error(error)
    }
}

asincronia()