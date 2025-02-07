

//TAMBIEN SE PUEDEN PODER ARREGLOS Y OBJETOS DENTRO DE LOS MISMOS OBJETOS ASÍ:

const vendedor = {
    nombre: 'pacho',
    apellido: "perez",
    empresa: 'Bimbo',
    Habilidades: ['carisma', 'puntualidad'],
    //tambien se pueden poner fucniones asi:
    vender: function(){
        console.log('Pedro a vendido un auto')
    },
    nombrecompleto: function (){
        return this.nombre + " " + this.apellido
    }
}

//para mostrar la función:
console.log(vendedor.nombrecompleto())

//para mostrar el array:
console.log(vendedor.Habilidades)