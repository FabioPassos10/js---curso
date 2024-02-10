const pessoa = {
    nome: "fabio",
    idade: 19
}

for(let chave in pessoa){
    console.log(chave);
}

const cores = ['Azul','Vermelho','Preto','Verde','Cinza','Amarelo','Laranja'];
for(let indice in cores){
    console.log(indice, cores[indice]);
}