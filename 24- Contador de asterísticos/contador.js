// Crie um função que exibe a Quantidade de * que aquela linha possui
exibirAsteristico(10);

function exibirAsteristico(Linhas) {

    for (let linha = 1; linha <= Linhas; linha++) {
        let stg = '';
        for (let i = 0; i < linha; i++) {
            stg += '🪲';
        }
        console.log(stg);
    }


}

