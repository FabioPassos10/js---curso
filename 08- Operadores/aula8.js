// Operadores Aritiméticos(matemático)
// Operadores Atribuição
// Operadores de comparação
// Operadores Bitwise




// Operadores Aritimético


let salario = 100;


// + - * / **

console.log(`Soma: ${salario} + ${salario} = ${salario+salario}`);

console.log(`Subtração: ${salario} - ${salario} = ${salario-salario}`);

console.log(`Multiplicação: ${salario} x ${salario} = ${salario*salario}`); // usa o * coloquei o x só para string de simbologia mesmo

console.log(`Divisão: ${salario} / ${salario} = ${salario/salario}`);

console.log(`Exponencial: ${5} ^ ${5} = ${5**5}`);


// ++ -- Incremento e decremento

let idade = 18;

console.log(++idade); // incremento 


console.log(--idade);// decremento


// Operadores de atribuição (=)

let valorTecladoGamer = 100;
console.log(valorTecladoGamer);

// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
valorTecladoGamer += valorTecladoGamer;

// valorTecladoGamer = valorTecladoGamer - valorTecladoGamer

valorTecladoGamer -= valorTecladoGamer;

// Operadores de igualdade

// 1. Igualdade estrita
console.log(1 === 1); // compara valor e tipo da variavel retorna true ou false
console.log('1' === 1);

// 2. Igualdade solta

console.log(1 == 1); // compara apenas o valor e não o tipo
console.log('1' == 1);

// dica: use sempre comparação com === iguais para evitar problemas de tipos diferentes e erros

// Operador Ternário

// tem um cliente, se ele tiver mais que 100 pontos ele é premium caso contrario comum

let pontos = 100;

let tipo = pontos > 100 ? 'premium' : 'comum'

console.log(tipo);

//Operadores Lógicos

// operador lógico E (&&)

//retorna true se os dois operandos forem true



let idadeDaPessoa = false;
let possuiCarteira = true;

let situacao = idadeDaPessoa && possuiCarteira;

console.log(`F + V = ${situacao}`);


// operador lógico OU (||)

//basta 1 ser true para retornar true



let idadeDaPessoa2 = false;
let possuiCarteira2 = true;

let situacao2 = idadeDaPessoa2 || possuiCarteira2;

console.log(`V + F = ${situacao2}`);



// Operador not (!)

let candidatoRecusado = !situacao;

console.log(`O canditado foi recusado ? ${candidatoRecusado}`);


// Comparações não booleanas


// Falsy

//Undefined
//null
//0
//false
// ''
// NaN - not a number

//truthy

let corPersonalizado = '';
let corPadrao = 'azul';
let corPerfil = corPersonalizado || corPadrao;

console.log(corPerfil);