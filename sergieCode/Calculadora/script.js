

//Agregar a la pantalla el valor del botón de la calculadora que toquemos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//para borrar todo lo que esté en la pantalla de la calculadora
function borrar(valor){
    document.getElementById('pantalla').value = ""
}

//realizar los calculos realizados en la pantalla
function calcular (){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}