// if Else

// Se a hora estiver entre 06:00 até 12:00 Bom dia
// Se estiver entr 12:00 até 18:00 Boa tarde
// Se não for nenhum destes casos Boa noite

const hoje = new Date()

if (hoje.getHours() > 6 && hoje.getHours() < 12){
    console.log("Bom dia");
}else if(hoje.getHours() >12 && hoje.getHours() <18){
    console.log("Boa Tarde");
}else{
    console.log("Boa noite");
}




