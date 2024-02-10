
// Função que soma dois numeros

let n1 = 5;

let n2 = 6;

function somarNumeros(n1, n2){
return n1 + n2;
}

let result = somarNumeros(n1,n2);
console.log(result);

// função que reseta o valor da variavel corSite

let corSite = "azul";

console.log(corSite);

function resetaCor(cor, tonalidade){
    corSite = cor + ` ` + tonalidade;
}

let cor = prompt(" Digite a nova cor");
let tonalidade = prompt(" Digite a tonalidade");

resetaCor(cor, tonalidade);

console.log(corSite);
