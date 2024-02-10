// Introdução a Arrays



// add novos elementos
// encontrar elementos
// remover elementos
// dividir elementos
// combinar Arrays

const numeros = [1,2,3,4,5];

//ADD element

//Inicio

numeros.unshift(0); // adiciona 0 no inicio do array
console.log(numeros);

//Meio

numeros.splice(1,0,'a'); // Adiciona no meio do array
console.log(numeros);

//final

numeros.push(5); // Adiciona no final do array
console.log(numeros);
