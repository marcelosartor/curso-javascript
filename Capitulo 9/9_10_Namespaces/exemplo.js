var Carro = function(nome,placa){
  this.nome = nome;
  this.placa = placa;
  //this.fabricante = 'VW';
}

var fox = {};
Carro.call(fox,'Fox','AAA-1111');

var gol = {};
Carro.apply(gol,['Gol','AAA-2222']);

console.log('Fox ',fox);
console.log('Gol ',gol);
