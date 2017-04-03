var fox = { cor: 'prata', modelo: 'Fox', fabricante: 'VW' }


console.log("Fox :" ,fox);
console.log("Tipo(Fox): ",typeof fox);

// acessando uma propriedade do objeto
console.log("Cor do Fox: ",fox.cor);

// Alterando a propriedade do objeto
fox.cor = 'Branco'

console.log("Fox depois de pintado:" ,fox);

// outra forma de acessar acessando uma propriedade do objet
console.log("Modelo ",fox['modelo']);

// Adicionando uma nova propriedade depois de criado.
fox.pese = 1000;
console.log("Fox com nova propriedade peso:" ,fox);

// Adicionando uma funcao
fox.ligar = function(){
  console.log("Ligando o Fox");
}
console.log("Fox com funcao:" ,fox);
fox.ligar();


// criando um novo objeto ja com funcao
var celta = { cor: 'prata',
              modelo: 'Celta',
              fabricante: 'GM',
              peso: 990,
              ligar: function(){
                console.log("Ligando Celta");
              }
             }

console.log(celta);
