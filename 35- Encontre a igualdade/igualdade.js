// Igualdade de Objetos(exercicio)




function endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}


const edereco1 = new endereco('a','b','c');
const edereco2 = new endereco('a','b','c');



function saoIguais(edereco1,edereco2){
    for (const a in edereco1) {
        for (const b in edereco2) {
            if(edereco1[a] === edereco2[b]){
                return true;
            }
        }
    }
}

console.log(saoIguais(edereco1,edereco2));



function temEnderecoMemoriaIgual(edereco1,edereco2){
    return edereco1 === edereco2;
}
console.log(temEnderecoMemoriaIgual(edereco1,edereco2));