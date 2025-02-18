//DESESTRUCTURACION DE OBJETOS
import { barcelona, roma, paris, londres } from "./ciudades.js";

//OBTENER LOS ELEMENTOS DEL DOM
let enlaces = document.querySelectorAll("a"); //seleccionar todos los elementos a

let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById('precio')

//agregar un evento click a cada enlace
enlaces.forEach(function (e) {
  e.addEventListener("click", function () {
    //Remover activos de los enlaces en caso de que haya
    enlaces.forEach(function (e) {
      e.classList.remove("active");
    });

    //Agregar active al que corresponda
    this.classList.add("active");

    //Obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent);

    //Mostrar el contenido en DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

//función para traer la info correcta desde ciudades.js
function obtenerContenido(e) {
  let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres,
  };
  return contenido[e];
}
