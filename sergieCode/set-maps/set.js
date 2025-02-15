//PARA ELIMINAR ARCHIVOS DUPLICADOS DE UN ARREGLO 

let conjunto = new Set (['myller', 'pepe', 'juan', 'myller', 'myller', 'juan'])
console.log('conjuto original ',conjunto)

//AGREGAR UN DATO
conjunto.add('María')
console.log('conjuto con un nuevo dato agregado ',conjunto)

//ELIMINAR UN DATO
conjunto.delete('juan')
console.log('conjuto con un nuevo dato eliminado ',conjunto)

//COMPRAR PRODUCTOS DE FORMA NORMAL

let array = ['mouse', 'teclado', 'pantalla','cpu', 'mouse' ]
function comprar(elementos){
    console.log('comprar original: ',elementos)
}
comprar(array)

//COMPRAR PRODUCTO SIN DUPLICADOS
function comprarSoloUnaUnidad(element){
    let unicaUnidad = new Set (element)
    console.log('Compra sin duplicados: ',unicaUnidad)
}
comprarSoloUnaUnidad(array)


//PASAR LOS DATOS DE UN SET SIN DUPLICAR A UN ARREGLO NUEVAMENTE
let arregloSetArray = [1,1,2,2,3,3,3,4,4]
let unico = new Set (arregloSetArray)
let nuevoArray = [...unico]
console.log(nuevoArray)