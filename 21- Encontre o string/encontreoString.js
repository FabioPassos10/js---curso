//Crie um método para ler propriedades de um objeto e 
//exibir somente as propriedades do tipo string que estão neste objeto



const filme ={
    titulo: "vingadores Ultimato",
    ano: 2019,
    diretor: "Joe Russo",
    diretor2: "Anthony Russo",
    personagem: "Capitão América",
    duracao: 3,
    bilheteria: " US$ 2,790,2 bilhões"

}

exibirPropriedades(filme);

function exibirPropriedades(filme){

for (const key in filme) {
    if (typeof filme[key] === "string") {
       console.log(key, filme[key]);
        
    }
}

}

