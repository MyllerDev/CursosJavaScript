

//PARA PEDIR UNA CANTIDAD DE NUMERO Y QUE ESE SEA EL TAMAÑO DEL ARREGLO

//variable para pedir al usuario la cantidad de datos
let cantidad = parseInt(prompt('Digite el tamaño del arreglo'));

//creamos el arreglo - vacio por quen sabemos el tamaño aun
let arreglo = []


//ciclo para almacenar la cantidad de datos hasta que sea menor a la cantidad deseada
for (let i = 0; i < cantidad; i++) {
    let valor = prompt(`ingresa el valor ${i + 1}:`);
    //agregamos el valor al arreglo
    arreglo.push(valor)
}

//mostramos los datos en una alerta
alert('Datos ingresados: ' + arreglo.join(','))