function max(arreglo){
    let max= 0
    if(arreglo.length===0){
        return undefined
    }
    for (let i=0; i<arreglo.length;i=i+1){
        if(arreglo[i]>max){
            max = arreglo[i]}       
}
return max
}

// escribe la función max acá

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined