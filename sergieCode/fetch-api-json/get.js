let urlBase = 'https://jsonplaceholder.typicode.com';
let query = 'posts/1'; // ID del post que queremos obtener

fetch(`${urlBase}/${query}`, {
  method: 'GET' // Especificamos que queremos obtener datos (GET)
})
  .then(response => response.json()) // Convertimos la respuesta en JSON
  .then(data => console.log("GET - Datos obtenidos:", data)) // Mostramos los datos
  .catch(error => console.error("Error:", error));
