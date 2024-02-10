// Escreva uma função que usa 2 números e retorna o maior entre eles

let n1 = prompt(" Digite o valor de n1");
let n2 = prompt("Digite o valor de n2");

function maiorNum(n1,n2){
return  n1 > n2 ? n1 : n2;
}

document.write(`O maior numero é ${maiorNum(n1,n2)}`);