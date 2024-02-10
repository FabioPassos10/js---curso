// Natureza dinâmica de Objetos

// Os objetos em Js são dinamicos podendo mudar seus campos adicionando um novo ou removendo um campo


const carro = {
    cor: "Vermelho",
    marca: "Hb20"
}


carro.velocidade = "5000 km";

for (const iterator in carro) {
    console.log(iterator, carro[iterator]);
}