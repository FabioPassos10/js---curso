// Javascript Objeto postagem

//Crie um objeto de postagem de blog que vai conter as seguintes propriedades

/*

titulo
mensagem
autor
visualizações
comentarios{autor,mensagem}
estaAoVivo
*/


let postagem ={
    titulo: "Persistência",
    mensagem: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    autor: "Robert Collier",
    visualizacoes: 300,
    comentarios : [
        {autor: "Fabio Eloy", mensagem: "Cada pequeno esforço que fazemos, por menor que seja, contribui para o progresso em direção aos nossos sonhos e aspirações"},
        {autor: "Angelica", mensagem: "não subestime o poder dos passos pequenos e consistentes que você dá em direção aos seus objetivos. "}
    ],
    estaAoVivo: true
}

console.log(postagem);