// Peças

const Listadepecas = ['Pecas de teste', 'AB', 'Peca B'];
console.log ('quantidade de caracteres')
if (Listadepecas.length <=10){
console.log ('as pecas pode ser cadastrada');
}
console.log ('Quantidade de caracteres')
for (let index = 0; index < Listadepecas.length; index ++){
    const pecaatual = Listadepecas [index];
if (pecaatual.length <3){
    console.log (pecaatual + ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
}else 
    console.log (pecaatual + ':a peça pode ser cadastrada.')
    }
    console.log ('peso da peça')
    const pesodapecaengramas = 50; 
    if (pesodapecaengramas >=100){
        console.log ('peso suficiente');
    }else 
            console.log ('Valor insuficiente');
          