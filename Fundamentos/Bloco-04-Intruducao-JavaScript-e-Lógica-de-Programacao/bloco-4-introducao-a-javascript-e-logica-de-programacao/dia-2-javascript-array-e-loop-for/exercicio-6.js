
let numbers = [2, 2, 3, 2, 70, 8, 100, 2, 2, 2];
const impar =[];

for (let index = 0 ; index < numbers.length ; index += 1){
    if ( numbers[index] % 2 !== 0 ) {
      impar.push(numbers[index]);

    } 
}

 if (impar.length === 0 ) {

 console.log("nenhum valor ímpar encontrado");
}else{

console.log(impar)

} 
