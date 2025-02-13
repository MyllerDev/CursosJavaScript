
//para ver la fecha actual
const fecha = new Date()
console.log(fecha)

//FROMA DE PONER LA FECHA
const fechamanual = new Date("2025-02-12")
console.log(fechamanual)

//treer el año actual
const fecha2 = new Date()
console.log("año actual: "+fecha.getFullYear())

//fecha completa de forma mejorada
let fecha3 = new Date()
//para poder mostrar los meses
let meses = ['Enero', 'Febrero', 'Marzo', 'Junio', 'Julio', '...']
//imprimir el resultado
let resultado = fecha3.getDate() + " " + meses[fecha3.getMonth()] + " " + fecha3.getFullYear()
console.log(resultado)