function join(arreglo) {
    let join = arreglo.toString();  
  return join.replace(/,/g, " ");
  }
  console.log(join([1,2,3,4,5,6,7,8,9,10]))
  console.log(join([1,false,true,"Juan"]))
  console.log(join(["Fabian","Sandra",3,4,5,6,7,8,9,"Maria"]))