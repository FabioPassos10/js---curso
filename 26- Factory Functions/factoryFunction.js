const celular = {

    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log("Fazendo ligação...");
    }
}


function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {

        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...");
        }
    }
}




let cell1 = criarCelular("Motorola", 17, 5000);

console.log(cell1);