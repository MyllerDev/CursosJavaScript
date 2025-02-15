let a = typeof {curso : 'js'}
let b = typeof ['pedro', 'juan', 'maria']
let c = typeof new Date()
let d = typeof null



//PARA DISTIGUIR CUANDO ES ARREGLO U OBJETO
let e  =  [1,2,3]
let f = new Date()
let g = new Set()
let h = new Map()
let i = null

//e es una instancia de Array? si es verdadero devuelve true
console.log(e instanceof Array)


if(e instanceof Array){
    console.log('Gracias backend por enviarme un arreglo')
}else{
    console.log('Mandame un arreglo no seas malo backend')
}
