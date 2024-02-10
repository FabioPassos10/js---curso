function analise() {
    let nome = document.getElementById('nome').value;
    let nomeQuemConvidou = document.getElementById('ConvNome').value;
    // console.log(nome);
    // console.log(nomeQuemConvidou);


    if (nomeQuemConvidou === "Fabio" || nomeQuemConvidou === 'fabio') {
        document.getElementById('parag').innerHTML = `Seja bem vindo(a) ${nome}, você pode entrar na festa 🎊`;
    } else {
        document.getElementById('parag').innerHTML = "Entrada não permitida🚫";
    }
}

