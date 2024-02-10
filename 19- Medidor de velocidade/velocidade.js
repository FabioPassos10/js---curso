// Velocidade maxima de 70 km
// a cada 5km acima do limite você ganha 1 ponto
// math.floor

// caso os pontos sejam maior que 12 carteira suspendida

function verificaFormulario() {
    const velocidade = parseInt(document.getElementById('velocidade').value);
    verificaVelocidade(velocidade);
    return false; 
}


function verificaVelocidade(velocidade){
    const parag = document.getElementById('parag');
    const paragBoaVel = document.getElementById('paragBoaVel');
    paragBoaVel.textContent = ``;
    parag.textContent = ``;
if(velocidade >70){
    
    let vel = velocidade - 70;
    let resp = Math.floor(vel / 5); // Math.floor arredondo pro valor mais baixo exemplo 1.5 ele retorna 1

    if(resp > 12){
        parag.textContent = `Sua carta foi suspença! Você está com mais de ${resp} pontos na carteira por ultrapassar o limite de velocidade`;
    }else{
        parag.textContent = `Você está com ${resp} pontos na carteira por ultrapassar o limite de velocidade`;
    }

    

}else{
    
    paragBoaVel.textContent = `Você está dentro do limite de velocidade`;
}
}



