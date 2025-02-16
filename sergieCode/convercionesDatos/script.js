//CONVERSIÓN DE STRING A NUMBRE
console.log('************* DE STRING A NUMERO ***************')
let a = Number('3.14')
console.log('número normal: ',a)
console.log(typeof a)

//DE STRING A UN NUMERO ENTERO
let b = parseInt('3.14')
console.log('numero entero: ',b)
console.log(typeof b)

console.log('************* DE NUMERO A STRING ***************')
let c = String( 123)
console.log(c)
console.log(typeof c)


console.log('************* FECHASA A NUMERO ***************')
let d = new Date()
console.log(d)
console.log(Number(d))

console.log('************* NUMERO A BOOLEANO ***************')
let e = Boolean(0)
console.log(e)
console.log(typeof e)