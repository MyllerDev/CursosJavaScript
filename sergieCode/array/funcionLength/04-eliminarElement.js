//PARA ELIMINAR Y ACTUALIZAR ELEMENTOS DE UN ARREGLO

let nombres = ["Ana", "Carlos", "Luis", "Elena"];
console.log("Lista inicial:", nombres, "→ Longitud:", nombres.length);

nombres.pop(); // Elimina el último con .pop
console.log("Después de pop:", nombres, "→ Longitud:", nombres.length);

nombres.shift(); // Elimina el primero con .shift
console.log("Después de shift:", nombres, "→ Longitud:", nombres.length);
