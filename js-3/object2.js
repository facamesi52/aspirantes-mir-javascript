//Crea un objeto literal llamado "persona"
let persona = {
    nombre: "Fabian",
    edad: "26",
    ciudad: "Duitama",
    profesion: "ingeniero",
    presentacion: function() {
        console.log("Hola, me llamo "+ this.nombre+" mi edad es "+this.edad+ " años y soy de "+this.ciudad)    
        }
}
//Imprime en la consola el objeto "persona" completo.
console.log(persona);
//Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
persona.presentacion();
let mensaje= persona.presentacion();
//Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.
persona.hobbies = ["leer","caminar","correr"]

//Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
  let hobbies = Object.values(persona.hobbies)
  for (i=0;i<persona.hobbies.length;i++){
    console.log(hobbies[i])
}