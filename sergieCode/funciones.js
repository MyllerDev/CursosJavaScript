


let a = 4
let b = 9
function suma(x,y){
    return x+y
}
let respuesta = suma(a,b)
console.log(`La respuesta de ${a} + ${b} es igual a:`, respuesta)




//PASANDO DE FAHRENHEIT A CELCIUS
const temperaturaF = 76
function transformarACelcios(FAHRENHEIT){
    return (FAHRENHEIT-32) * (5/9)
}
const respuesta2 = transformarACelcios(temperaturaF)
console.log(`El equivalente de ${temperaturaF} en Celcius es: ${parseInt(respuesta2)}`)

