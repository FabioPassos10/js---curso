// Criar função somar que retorna a soma 
//de todos os multiplos de 3 e 5 dentro de um interval


somarMultiplos(10);

function somarMultiplos(intervalo){
let mult3 = 0;
let mult5 = 0;

for(i=0; i<=intervalo; i++){
if(i % 3 === 0)
 mult3 += i;

if(i % 5 === 0)
    mult5 += i;

}
console.log(mult3+mult5);

}