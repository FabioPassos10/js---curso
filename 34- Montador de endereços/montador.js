// Criar um objeto endereço que contem

//Rua
//Cidade
//Cep
//exibirEndereço(endereco)





let endereco = {
    rua: "R. Aleatoria 123",
    cidade: "Mogi-Guaçu",
    cep: 12345678
}


function exibirEndereco (endereco) {
    for (const key in endereco) {
        console.log(key, endereco[key]);
    }
}

exibirEndereco(endereco);
