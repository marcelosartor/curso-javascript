var Carro = function(nome,placa){
  this.nome = nome;
  this.placa = placa;
  //this.fabricante = 'VW';
}

Carro.prototype.fabricante = 'VW';
Carro.prototype.ligar = function(){
  console.log('Ligando o carro...',this.nome);
}

var fox = new Carro('Fox','AAA-1111');
console.log('fox',fox);

var gol = new Carro('Gol','AAA-2222');
console.log('gol',gol);

console.log('gol.fabricante',gol.fabricante);
console.log('fox.fabricante',fox.fabricante);

fox.ligar();
gol.ligar();
