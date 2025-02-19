const esperar = (tipo, tiempo) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(tiempo > 1000){
                resolve(`El café ${tipo} ya está listo.`)
            }else{
                reject(`¡¡ ERROR, El tiempo para el café ${tipo} es invalido !!`)
            }
        },tiempo)
    })
}

const prepararCafe = async () =>{
    try{
        console.log('Encendiendo cafetera...')

        const cafe1 = await esperar('Capuccino', 3000)
        console.log(cafe1)
        const cafe2 = await esperar('artesanal', 500)
        console.log(cafe2)
        const cafe3 = await esperar('Negro', 5000)
        console.log(cafe3)
        console.log('¡ Apagando cafetera !')

        //para que no se pare al ver un erro hay que poner un try catch en cada mensaje
    } catch(error){
        console.error(error)
    }
}

prepararCafe()