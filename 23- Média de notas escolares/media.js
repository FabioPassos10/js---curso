// Exercicio nota escolar
// Obter a média a partir de um array


// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const nota = [100, 100, 90];
let tamanho = nota.length; //lingth tamanho da variavel objeto ou string
mediaNota(nota, tamanho);



function mediaNota(nota, tamanho) {
    let SomaMedia = 0;
    let media = 0;

    for (i = 0; i < tamanho; i++) {
        SomaMedia += nota[i];
    }
    media = SomaMedia / tamanho;
    if (media >= 0 && media <= 60) {
        console.log(`A Média é ${media.toFixed(2)} nota: F`);
    }
    if (media >= 60 && media <= 69) {
        console.log(`A Média é ${media.toFixed(2)} nota: D`);
    }
    if (media >= 70 && media <= 79) {
        console.log(`A Média é ${media.toFixed(2)} nota: C`);
    }
    if (media >= 80 && media <= 89) {
        console.log(`A Média é ${media.toFixed(2)} nota: B`);
    }
    if (media >= 90 && media < 101) {
        console.log(`A Média é ${media.toFixed(2)} nota: A`);
    }

}


// toFixed(2) duas casas decimais para não ficar muit grande