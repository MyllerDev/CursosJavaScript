let updatePost = {
    title: 'Nuevo título actualizado',
    body: 'Contenido actualizado',
    userId: 1
};

fetch(`${urlBase}/posts/1`, { //editamos el post con ID 1
    method: 'PUT', // Le indicamos que Actualizamos un recurso
    headers: {
        'Content-Type': 'application/json; charset=UTF-8' // Indicamos que enviamos JSON
    },
    body: JSON.stringify(updatePost) // Convertimos el objeto a JSON
})
    .then(response => response.json())
    .then(data => console.log("PUT - Post actualizado:", data))
    .catch(erro => console.error("Error:", error));
// PUT - Post actualizado: {userId: 1, id: 1, title: "Nuevo título actualizado", body: "Contenido actualizado"}