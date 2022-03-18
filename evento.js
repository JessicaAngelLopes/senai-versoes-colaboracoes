// Cadastro de evento
const date1 = new Date(); // Inicializa a data atual
//console.log (date1);
const date2 = new Date('2023-04-07 12:30:00'); // data do evento
var idadeparticipante = 21; // idade do participante
const totalparticipantes = 120; // total de participantes que querem participar do evento
// Verifica se a data do evento é maior que a data atual
if (date2.getTime() > date1.getTime()) {
	console.log('Cadastro de evento permitido');
} else { (date2.getTime() < date1.getTime()) 
	console.log('Cadastro de evento não permitido');
} 
if (idadeparticipante > 18) {
    console.log ('Cadastro de participante permitido')
    console.log ('informe o nome do participante')
} else {
    console.log ('Cadastro de participante não permitido pela idade')
} 
for (let index = 1; index <= totalparticipantes; index ++){
    if (index <= 100){
        console.log ("Cadastro permitido - participante nº:" + " " + index);
    }else {
        console.log ("Cadastro não permitido - Excedido o número de participantes")
    }
}