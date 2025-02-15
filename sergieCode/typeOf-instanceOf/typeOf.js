//SIRVER PARA VERFICAR QUE TIPO DE DATOS ESTAMOS MANIPULANDO

//STRING
let a = typeof 'myller'
console.log(a)

//NUMEROS
let b = typeof 9.81
console.log(b)

//NUMBER (Caso especial)
let c = typeof NaN
console.log(c)  //NaN es un valor especial que significa "Not-a-Number" (No es un número)

//BOOLEAN
let d = typeof true
console.log(d)

//UNDEFINED
let e = typeof undefined
console.log(e)

//OBEJTO (Caso especial)
let f = typeof [1, 2, 3] //Esto es un objeto
console.log(f)

//OBJETO
let g = typeof {nombre: 'myller', edad: 23}
console.log(g)

//OBJEETO (Caso especial Date/Set/Map/null)
let h = typeof new Date()
console.log(h)

//FUNCIONES
let i = typeof function(){} 
console.log(i)

//ESTO TAMBIEN ES INDEFINIDO
let j = typeof myller
console.log(j)


//Saber que si o si el dato es string 
let datoBakend = 'curso js'
if(typeof datoBakend === 'string'){
    console.log('el backend a enviado un string')
}else{
    console.log('el backend NO ha enviado un string, CUIDADO !!')
}