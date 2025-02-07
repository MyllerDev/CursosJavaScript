let numero = 9


//FUNCION CLÁSICA
function funcionClasica (){
    return numero + 10
}

//FUNCION DE FLECHA //ARROW FUNCTION 
let funcionFlecha = (parametro) => parametro + 10


let respuestaFunclasic = funcionClasica(parseInt(numero))
console.log("Respuesta de la función clásica: " + respuestaFunclasic)

let respuestaFunFlecha = funcionFlecha(parseInt(numero))
console.log(`Respuesta de la funcion flecha:`,respuestaFunFlecha)