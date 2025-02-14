//Ejemplo sencillo de como funciona un condicional if


//Verificar si un chico puede entrar a la disco
let edad = 61;

if(edad >=18){
    console.log('Ingreso Aceptado')
}else{
    console.log('ingreso Denegado')
}

console.log('*****************************************')

//solo pueden entrar personas mayores de edad y menores de 60 años
if(edad >= 18 && edad < 60){
    console.log('Puede ingresar')
}else if(edad < 18){
    console.log('Es menor de edad, no puede ingresar')
}else{
    console.log('Adulto manor, no puede ingresar')
}



console.log('*****************************************')


//IF ANIDADOS
//entrada a estados unidos dependiendo el pais, edad y pasaporte
let años = 20
let nacion = 'Colombia'
let passport = false

if(años >= 18){
    console.log('Mayor de edad, requisito 1 aprobado...')
    if(nacion == 'Colombia'){
        console.log('Es Colombiano, requisito 2 aprobado...')
        if(passport == true){
            console.log('Tiene passport, requisito 3 aprobado ...\nVisa Aceptada')
        }else{
            console.log('No tiene pasaporte, requisito 3 Reprobado...\nVisa Denegada')
        }
    }else{
        console.log('Nacionalidad no apta, requisito 2 Reprobado...\nVisa Denegada')
    }
}else{
    console.log('Es menor de edad, requisito 1 Reprobado...\nVisa Denegada')
}





console.log('*****************************************')
  



//CUANDO HAY MUCHAS OPCIONES POSIBLE SE UTILIZA EL SWITCH CASE
let gustomusical = 'Salsa'

switch (gustomusical) {
    case 'vallenato':
        console.log('Te recomiendo Diomedez')
        break;
    case 'Champeta':
        console.log('Te recomiendo El imperio')
        break;
    case 'Salsa':
        console.log('Te recomiendo Maelo Ruiz')
        break;
    case 'Meregenge':
        console.log('Te recomiendo Grupo Bananas')
        break;
    case 'Reggeton':
        console.log('Te recomiendo Ban Bunny')
        break;

    default:
        console.log('No reconocido')
        break;
}