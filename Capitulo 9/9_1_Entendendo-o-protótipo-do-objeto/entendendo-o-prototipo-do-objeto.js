var volks = {
  fabricante:'VW'
}

// 1a forma
var fox = {
  nome:'Fox',
  placa:'AAA-1111',
}

// 2a forma
var gol = Object.create(volks);
gol.nome ='Gol';
gol.placa = 'AAA-2222';

// 3a forma
var parati = {
  nome:'Parati',
  placa:'AAA-3333',
  __proto__ : volks
}


console.log('--------------------');
console.log('Fox    ',fox);
console.log('Gol    ',gol);
console.log('Parati ',parati);

console.log('--------------------');
console.log('prototype Fox    :',Object.getPrototypeOf(fox));
console.log('prototype Gol    :',Object.getPrototypeOf(gol));
console.log('prototype Parati :',Object.getPrototypeOf(parati));

console.log('fox===gol   : ',Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));
console.log('parati==gol : ',Object.getPrototypeOf(parati) === Object.getPrototypeOf(gol));

console.log('--------------------');
console.log('fox.fabricante    : ',fox.fabricante);
console.log('gol.fabricante    : ',gol.fabricante);
console.log('parati.fabricante : ',parati.fabricante);

console.log('--------------------');
console.log('Mudando prototype de fox');
Object.setPrototypeOf(fox,volks);

console.log('--------------------');
console.log('fox.fabricante    -> ',fox.fabricante);
console.log('gol.fabricante    -> ',gol.fabricante);
console.log('parati.fabricante -> ',parati.fabricante);

console.log('--------------------');
console.log('fox    : ',fox);
console.log('gol    : ',gol);
console.log('parati : ',parati);
