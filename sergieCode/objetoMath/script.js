Math.E              //Devuelve el número de Euler                    
Math.PI             //Devuelve el el valor de PI
Math.SQRT2          //Devuelve la raíz cuadrada de 2
Math.SQRT1_2        //Devuelve la raíz cuadrada de 1/2 
Math.LN2            //Devuelve el logaritmo natural de 2
Math.LN10           //Devuelve el logaritmo natural de 10
Math.LOG2E          //Devuelve el logaritmo en base 2 de E
Math.LOG10E         //Devuelve el logaritmo en base 10 de E


//redondear un número hacia donde está mas cerca
const numero = 5.6
const redondeo = Math.round(numero)
console.log(`El numero ${numero} se redondeo a: `,redondeo)

//redondear un número hacia arriba
const redondeoArriba = Math.ceil(numero)
console.log(`El numero ${numero} se redondeo hacia arriba a: `,redondeoArriba)

//redondear un número hacia abajo
const redondeoAbajo = Math.floor(numero)
console.log(`EL numero ${numero} se redondeo hacia abajo a:`,redondeoAbajo)

//Para crear numero aleatorios random con Math.random()
console.log(`Numero random del o al 1: `, Math.random())
console.log(`Numero random del o al 100: `, Math.trunc(Math.random()*100))