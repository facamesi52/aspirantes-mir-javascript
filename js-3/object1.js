//Crea una variable llamada pedro
let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies:["programar", "squash", "piano"],
    saluda: function() {
        console.log("Hola, me llamo "+ this.nombre)    
        }
} 
//Imprime en la consola el valor de la llave edad.
console.log(pedro.edad);
//Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;
//Elimina la propiedad con llave activo
delete pedro.activo;
//Recorre todas las propiedades e imprímelas en consola
let valores = Object.values(pedro)
let llaves =Object.keys(pedro)
for (i=0;i<valores.length;i++){
    console.log(llaves[i] + " : " + valores[i])
}
//Agrégale al objeto una función llamada saluda
//llama la función saluda
pedro.saluda()