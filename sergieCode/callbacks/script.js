
// los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que alguna tarea se haya completado.

// En otras palabras, es una función que se le pasa como argumento de otra función y se ejecuta después de que la función principal haya terminado de ejecutarse, así:

function mostrarConsola(num){
    console.log(num)
}

function calcular(num1, num2, callback){
    let suma = num1 + num2
    callback(suma)
}

calcular(5,9,mostrarConsola);