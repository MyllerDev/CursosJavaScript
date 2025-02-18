//ESTRUCTURA BASICA DE UN TRY CATCH

try {
    // LLAMAA AL BACKEND (a trevés de un API)
    console.log('Conectando con el backend');
    throw('Este cliente no esta apto para la compra'); //el throw es para oblibar a que se ejecute el catch
    console.log('Conexión exitosa');
} catch (error) {    
    //TOMAMOS EL ERROR Y LO MOSTRAMOS
    console.log('Error de conexión');
}finally{
    // SE EJECUTA SIEMPRE POR MÁS QUE HAYA UN ERROR
    console.log('Conexión finalizada');
}
