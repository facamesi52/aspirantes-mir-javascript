
 //Tomando los elementos
 let inputTarea = document.getElementById("tarea");
 let btn = document.getElementById("agregar");
 let listado = document.getElementById("listado");
 let cantidad = document.getElementById("cantidad");
 
 
 // Variable que lleva la cantidad de tareas 
 let total = 0;
 
 //funcion que agrega la tarea al listado
 let i = 0
 let tareas = [];
 btn.onclick = function agregarTarea(event) {
     //si el campo esta vacio
     if (inputTarea.value == ""){
         return;
     }
     //detener la actualizacion de la pagina 
     event.preventDefault();
     //tomando el valor del campo
     let elemento = inputTarea.value;
     //creando elemento li
     let li = document.createElement("li");
     li.textContent = elemento;
     //agregando el li al listado
     listado.appendChild(li);
     //incremento la cantidad de tareas
     total++;
     cantidad.innerHTML = total;
     inputTarea.value= ""
     //agregamos el boton eliminar 
     let btnEliminar = document.createElement("span");
     btnEliminar.textContent = "\u00d7";
     li.appendChild(btnEliminar); 
     //agregar funcion que elimina
     btnEliminar.onclick = function(){
     li.remove();
     total--;
     cantidad.innerHTML = total;
     }
     
 
 
     const checkbox = document.createElement('input');
     checkbox.type = 'checkbox';
     checkbox.addEventListener('change', () => {
         if (checkbox.checked){
             li.classList.add('completed');
         } else{
             li.classList.remove('completed')
         }
     });
 
 
     li.appendChild(checkbox)
 
 }
     
 
 // boton borrar 
 function remove_child() {
     const list = document.getElementById('listado');
     const children = [].slice.call(list.children);
     const childrenToRemove = [];
     for(let i =0;i < children.length; i++) {
       console.dir(children[i])
         if (children[i].className== "completed") {
           childrenToRemove.push(children[i])
         }
     }
     
     for(let i =0;i < childrenToRemove.length; i++) {
       list.removeChild(childrenToRemove[i]);
       total--;
     }
     
 
     cantidad.innerHTML = total;
   }
 
 