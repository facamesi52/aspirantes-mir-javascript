//Crear una variable llamada receta e inicialízalo con un objeto literal vacío
let receta ={
}
//Agrégale una propiedad nombre con valor “Sandwich”
receta.nombre= "Sandwich"
//Agrégale una propiedad ingredientes con un arreglo vacío
receta.ingredientes= []
//Agrega un objeto al arreglo ingredientes con las siguientes propiedades:
//nombre: “Pan”
//cantidad: 2
receta.ingredientes.primeringrediente={
    nombre: "Pan",
    cantidad: 2
}
//Agrega otro ingrediente al arreglo con las siguientes propiedades:
//nombre: “Queso”
//cantidad: 1
receta.ingredientes.segundoingrediente={
    nombre: "Queso",
    cantidad: 1
}
//imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".
console.log(receta.ingredientes.primeringrediente.nombre)

//Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
let ingredienteuno= receta.ingredientes.primeringrediente.nombre
let cantidaduno= receta.ingredientes.primeringrediente.cantidad
let ingredientedos= receta.ingredientes.segundoingrediente.nombre
let cantidaddos= receta.ingredientes.segundoingrediente.cantidad

console.log(`Los ingredientes que se necesitan son ${cantidaduno} de ${ingredienteuno} y ${cantidaddos} de ${ingredientedos}`)