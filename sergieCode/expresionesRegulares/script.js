
// /patter/modificadores

let texto = 'Esto es un texto ejemplo del curso de javascrip de Myller'
let busqueda = texto.search(/myller/i)
console.log(busqueda)

//MODIFICADORES 
// i = Ignorar mayusculas y minusculas
// g = Busca todas las coincidencias en el texto 
// m = Busqueda multilinea Multilinea


//se puede buscar al reves

let patter = /myller/i
let resultado = patter.test(texto) //está la palabra en el texto?
let resultado2 = patter.exec(texto) //devuelve el texto encontrado
console.log(resultado)
console.log(resultado2)

//VALIDAR UN EMAIL
let patternEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
console.log(patternEmail.test('ejemplo@gmail.com'))//si el correo es valido marca true de lo contrario, false