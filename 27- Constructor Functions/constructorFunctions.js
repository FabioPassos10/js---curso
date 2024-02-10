

// Pascal Case -UmDoisTresQuatro 1 letra sempre maiuscula
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
this.marcaCelular = marcaCelular,
this.tamanhoTela = tamanhoTela,
this.capacidadeBateria = capacidadeBateria,
this.ligar = function(){
    console.log("Fazendo a ligação...");
}
}

const celular = new Celular("Motorola", 5.5,5000);

console.log(celular);




function Pessoa(nomeCompleto,idade,cpf,endereco){
this.nomeCompleto = nomeCompleto,
this.idade = idade,
this.cep = cpf,
this.endereco = endereco, 
this.saudacao = function(){
    console.log("Olá mundooooooo");
}
}

const pessoa1 = new Pessoa("Fabio Eloy Passos", 19, '111.111.111-11','R.Aleatoria N°111');

console.log(pessoa1);