// Divissivel por 3 => Fizz
// Divissivel por 5 => Buzz
// Divissivel por 3 e 5 => fizzBuzz
// Não divissivel por 3 ou 5 => entrada
// Não é um numero => 'Não é um numero'


const retorno = fizzBuzz(9);

console.log(retorno);

function fizzBuzz(numero) {
    if (typeof numero !== 'number') {
        return "Não é um número";
    }
    if (numero % 3 === 0) {
        return 'Fizz';
    }
    if (numero % 5 === 0) {
        return 'Buzz';
    }
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz"
    }
    return numero;
}