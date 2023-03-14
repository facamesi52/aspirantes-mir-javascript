function maxIndex(arreglo){
    let maxIndex= 0
    for (let i=0; i<arreglo.length;i=i+1){
        if(arreglo[i]>maxIndex){
            maxIndex = arreglo[i]}       
}
return arreglo.indexOf(maxIndex)
}
// escribe la función max acá

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1