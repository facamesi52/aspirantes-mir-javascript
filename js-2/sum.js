function sum(arreglo){
let sum = 0;
for (let i=0; i<arreglo.length;i=i+1){
    sum = sum+arreglo[i]
    }    
    return sum
}
// escribe la función sum acá

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0