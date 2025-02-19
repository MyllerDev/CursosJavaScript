//SIMULAR LA ENTRADA POR TURNOS A UNA CITA MÉDICA 

function esperarTurno (usuario, tiempoEspera){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(tiempoEspera < 6000){
                resolve(`El usuaruio ${usuario} ha sido atentido correctamente.`)
            }else{
                reject(`El tiempo de espera con usuario ${usuario} es muy largo, vuelva pronto`)
            }
        }, tiempoEspera);
    })
}

async function cita() {
    try {
    console.log('EL doctor se está preparando...')

    try{
        const usuario1 = await esperarTurno('Myller', 5000)
        console.log(usuario1)
    } catch (error) {
        console.error(error)
    }

    try{
        const usuario2 = await esperarTurno('Jesus', 500)
        console.log(usuario2)
    } catch (error) {
        console.error(error)
    }

    try{
        const usuario3 = await esperarTurno('pepito', 4000)
        console.log(usuario3)
    } catch (error) {
        console.error(error)
    }

    console.log('EL horario de atención a terminado...')
        
        
    } catch (error) {
        console.error(error)
    }
}

cita()