//Object.assign é um método em JavaScript que é usado para copiar os valores de todas as propriedades enumeráveis
// de um ou mais objetos de origem para um objeto de destino.


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

const novoObjeto = Object.assign({ 
bateria: 4000
},celular);

console.log(novoObjeto);

//Com o Object.assign é possivel juntar dois objetos

const par ={a:2,b:4,c:8};
const impar ={d:3,e:5,f:9};
const destino ={};


Object.assign(destino,par,impar); // Forma 1 de clonar um objeto usuando Object.assign 
console.log(destino);

const obj = {...celular}; // Forma 2 usando object spread {...}
console.log(obj);