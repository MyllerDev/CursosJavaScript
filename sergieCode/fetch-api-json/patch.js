//PATCH SIRVE PARA MODIFICAR SOLO UNA PARTE DE UN RECURSO: EJ EL TITULO

let partialUpdatePost = {
    title: 'Título actualizado con PATCH' // Solo actualizamos el título
}

fetch(`${urlBase}/posts/1`, { // Editamos el post con ID 1){
    method: 'PATCH', // Le indicamos que actualizamos un recurso
    headers: {
        'Content-Type': 'application/json; charset=UTF-8' // Indicamos que enviamos JSON
    },

    body: JSON.stringify(partialUpdatePost) // Convertimos el objeto a JSON
})

    .then(response => response.json())
    .then(data => console.log("PATCH - Post actualizado:", data))   
    .catch(error => console.error("Error:", error));
    