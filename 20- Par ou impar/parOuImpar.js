// Verifica se o numero é par ou ímpar

//let numero = parseInt(prompt("Digite o numero do intervalo: "));
verificaParOuImpar(10);


function verificaParOuImpar(numero){

for (let i = 0; i < numero +1; i++) {
   if(i % 2 ==0){
console.log(`O número ${i} é Par`);
   } else{
    console.log(`O número ${i} é Ímpar`);
   }
}

}