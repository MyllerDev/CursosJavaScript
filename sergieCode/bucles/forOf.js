console.log('**************** FOR  *OF********************')
//forma mas facil de recorrer arreglos
let arrayTecnologias = ['HTML', 'CSS', 'JAVASCRIP', 'REACT', 'ANGULAR']
for(indice of arrayTecnologias){
    console.log(indice)
}




console.log('**************** FOR IN *********************')
//RECORRER OBJETOS CON FOR IN
const estudiante = {
    nombre : 'Myller',
    edad: 20,
    skills: ['html', 'css', 'JavaScript']
}
for (const key in estudiante) {
    console.log(estudiante[key])
}

console.log('**************** FOR EACH *********************')

let numeros = [2, 4,5,6,7]
numeros.forEach(element => {
    console.log(element)
});