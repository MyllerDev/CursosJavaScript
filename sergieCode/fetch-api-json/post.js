let requestBody = {
    title: 'Myller comenta sobre tu foto',
    body: 'Que bonita foto, disfruta tu día',
    userId: 1 // ID del usuario que crea el post
  };
  
  fetch(`${urlBase}/posts`, {
    method: 'POST', // Creamos un nuevo recurso
    headers: {
      'Content-Type': 'application/json; charset=UTF-8' // Indicamos que enviamos JSON
    },
    body: JSON.stringify(requestBody) // Convertimos el objeto a JSON
  })
    .then(response => response.json()) // Convertimos la respuesta en JSON
    .then(data => console.log("POST - Nuevo post creado:", data)) // Mostramos el post creado
    .catch(error => console.error("Error:", error));
    // POST - Nuevo post creado: {userId: 1, id: 101, title: "Myller comenta sobre tu foto", body: "Que bonita foto, disfruta tu día"}