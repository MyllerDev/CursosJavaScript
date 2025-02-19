function nombreFuncion (parametro, ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('mensaje de resolve: ' + parametro + ' -msj 2do param -  Esperé ' + ms + ' milisegundos')
        }, ms)
    })
}

const otrafuncion = async () =>{
    console.log('iniciando el programa...')

    const mensaje = await nombreFuncion('info del primer parametro',3000)
    console.log(mensaje)

    console.log('programa finalizado.')
}

otrafuncion()