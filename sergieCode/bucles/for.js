

//SE UTILIZAN MAYOR MENTE PARA RECORRER ARREGLOS

let arrayTecnologias = ['HTML', 'CSS', 'JAVASCRIP', 'REACT', 'ANGULAR']
let seleccionable = document.getElementById('seleccionable')
let texto = ''

for (let i = 0; i < arrayTecnologias.length; i++){
    texto += arrayTecnologias[i] 
    if(i < arrayTecnologias.length -1){
        texto += ', '
    }
    seleccionable.textContent = texto
}