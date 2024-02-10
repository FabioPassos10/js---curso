// tipo primitivo de string

const mensagem = "Olá mundoooooooooooooo";



//tipo Objeto

const outraMensagem = new String("Baum dia");


console.log(`O tipo da variavel é ${typeof outraMensagem}`);

console.log(outraMensagem.length);


const nome = "Fabio Eloy Passos"
let tamanho = nome.length;

console.log(`A Quantidade de espaços é: ${contaEspacos(nome, tamanho)}`);

function contaEspacos(nome, tamanho) {
    let contador = 0;
    for (let i = 0; i < tamanho; i++) {
        if (nome[i] === ' ') {
            contador++;
        }
    }
    return contador;
}
console.log(`Verifica se possui a palavra 'Passos' na variavel ${nome.includes("Passos")}`);
console.log(nome.replace("Passos","Maximoff")); // substitui o nome 
console.log(nome.split(" ")); // corta a variavel pelos espaços




// Função que verifica que existem caracteres
novoNome = '    ';
let qtd = novoNome.trim().length;

function verificaString(n){
if(n > 0){
    console.log("A variavel possui caracteres");
}else{
    console.log("A variavel não possui caracteres");
}
}

verificaString(qtd);   


