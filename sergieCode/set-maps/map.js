//CONJUNTO DE PARES VALOR

let mapa = new Map([
    ['computadoras', 10],
    ['celulares', 15],
    ['Tablets', 12]
])
console.log(mapa)

//PARA AGREGAR
mapa.set('Teclados', 20)
console.log(mapa)
//PARA ELIMINAR SOLO SE PONER LA CLAVE
mapa.delete('Tablets')
console.log(mapa)