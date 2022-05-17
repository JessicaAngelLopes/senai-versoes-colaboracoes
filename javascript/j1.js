// alert ("Seja bem Vindo!"); // cacha de pop-up

//document.write ("Bem vindo ao Javascript");

//prompt ("Digite seu nome");

//resp = confirm ("Será que vai chover?");

/*alert ("Um retorno de carro\bem no meio desta lina");
alert ("\" Isto não saiu como deveria!\" disse ela");
alert ("esta linha tem tabulação\taqui");*/

/*var a,b;
a= 5;
b = "5 kg de açucar";
document.write(" O valor da variável A é:"+a);
document.write ("<p>" + "O valor da variável B é:"+ b + "<p>");
document.write ("<p>" + "O valor da variável A dividido por 2 é:"+ a/2 + "</p>");
document.write("<p>" + "O valor da variável B dividido po 2 é:" + b/2 + "</p>");*/

/*var a,inteiro,flutuante;
a = "45.78 Kg de açucar";
inteiro =parseInt (a);
flutuante = parseFloat (a);
document.write( + "O valor numérico inteiro da variável é:" + inteiro+ "</p>");
document.write ("<p>" + "O valor da variavel A dividido por 2 é:" + inteiro/2 + "</p>");
document.write("<p>" + "O valor da variavel decimal da variavel é:" + flutuante +"</p>");*/

/*var a,b,c;
a = "Olá pessoal!";
b = "Sejam bem vindos ao JavaScript";
c = a+b;
alert (c);*/


/*a = 50;
b = 2;
c = 100;
d = 5;
e = 25;
document.write ("O valor da variavel A dividido pela variavel B é igual:" + a/b);
document.write ("<p>" + " O valor da variavel C multiplicado pela variavel D é igual:" + c*d + "<p>");
document.write ("<p>" + "O valor da variavel E multiplicado pela variavel B é igual:" + e*b + "</p>" );
document.write ("<p>" + "O valor da variavel A subtraido pela variavel A é"  + a-a + "</p>");
document.write( "<p>" + "O  resto da divisão da variavel A pela variavel B é:" + a%b + "</p>");*/

/*hoje = new Date();
xDia = hoje.getDay();
diaSemana = new Array(7);
diaSemana[0] ="domingo";
diaSemana[1] ="Segunda-feira";
diaSemana[2] ="Terça-feira";
diaSemana[3] ="Quarta-feira";
diaSemana[4] ="Quinta-feira";
diaSemana[5] ="Sexta-feira";
diaSemana[6] ="Sabado";
document.write ("O número da semana é:" +" "+ (xDia +1));
document.write("<p><b>" + "hoje é:" + diaSemana [xDia]);*/


//Dia da semana com o prato da semana e o preço
/*hoje = new Date();
xDia = hoje.getDay();
diaSemana = new Array(7);
pratodoDia = new Array (7);
precoDia = new Array(7);



diaSemana[0] ="domingo";
diaSemana[1] ="Segunda-feira";
diaSemana[2] ="Terça-feira";
diaSemana[3] ="Quarta-feira";
diaSemana[4] ="Quinta-feira";
diaSemana[5] ="Sexta-feira";
diaSemana[6] ="Sabado";


//Prato do dia

pratodoDia[0] ="Lasanha";
pratodoDia[1] ="Macarronada";
pratodoDia[2] ="Feijoada";
pratodoDia[3] ="Costela no bafo";
pratodoDia[4] ="Bacalhau";
pratodoDia[5] ="Bife com fritas";
pratodoDia[6] ="Ensopado";


//Preço do dia


precoDia[0]= "R$ 24.99";
precoDia[1]= "R$ 22.99";
precoDia[2]= "R$ 35.90";
precoDia[3]= "R$ 45.90";
precoDia[4]= "R$ 60.00";
precoDia[5]= "R$ 42.99";
precoDia[6]= "R$ 20.99";

document.write ("O número da semana é:" +" "+ (xDia +1));
document.write("<p><b>" + "hoje é:" + diaSemana[xDia]);
document.write("<p><b>" + "Prato do dia é:" + pratodoDia[xDia]);
document.write ("O preço do dia é:" + precoDia[xDia]);*/

//  For
/*for (i = 1; i<5; i++){
    document.write("Esta é a linha" , i, "<br>");
}*/

//Loop while
valor = new Array (3,2,4,1,5);
i=0;
total = 0;
while(total <10){
    total += valor[i]; i++;
}
document.write("Total="+ total); // resultado : total = 10


















                                                                                                                                                                                                    




