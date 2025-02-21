fetch(`${urlBase}/posts/1`, { // Eliminamos el post con id = 1
    method: 'DELETE' // Método para borrar
  })
    .then(response => {
      if (response.ok) console.log("DELETE - Post eliminado correctamente");
      else console.log("Error al eliminar el post");
    })
    .catch(error => console.error("Error:", error));
    // DELETE - Post eliminado correctamente  