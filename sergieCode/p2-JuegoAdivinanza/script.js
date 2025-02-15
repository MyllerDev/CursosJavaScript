
//Aquí se genera un numero al azar para que pueda ser adivinado por el usuario
let numeroAzar = Math.floor(Math.random()*100)+1
console.log(numeroAzar)

//guardamos el numero de entrada digitado por el usuario
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0;


//Funcion para ejercutar el boton Comprobar 
function verResultado(){
    intentos ++
    intento.textContent = intentos

    let numeroIngresado = parseInt(numeroEntrada.value)
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor introduce un numero válido entre 1 y 100'
        mensaje.style.color = 'black'
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '!Felicidades¡ !El numero es Correcto¡\n' + 'Lo haz logrado en ' + intentos + ' intentos'
        //poner el texto de verde
        mensaje.style.color = 'green'
        //Deshabilita el input para que el usuario no pueda modificar el número
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '!Es Mayor ¡ El numero es mayor al que dijiste'
        //poner el texto en rojo
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = '!Es Menor ! El numero es menor al que dijiste'
        //poner el texto en rojo
        mensaje.style.color = 'red'
    }

}