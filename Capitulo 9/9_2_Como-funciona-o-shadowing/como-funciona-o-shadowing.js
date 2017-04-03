var volks = {
  fabricante:'VW'
}

// 1a forma
var fox = {
  nome:'Fox',
  placa:'AAA-1111',
}


console.log('--------------------');
console.log('toString fox    : ',fox);

console.log('--------------------');
console.log('prototype Fox    :',Object.getPrototypeOf(fox));

console.log('--------------------');
console.log('fox.fabricante    : ',fox.fabricante);

console.log('--------------------');
console.log('Mudando prototype de fox');
Object.setPrototypeOf(fox,volks);
fox.fabricante = 'GM';

console.log('--------------------');
console.log('Iterando Propriedade');
for(propriedade in fox){
  console.log(propriedade , ' é do fox : ', fox.hasOwnProperty(propriedade) );
}


console.log('--------------------');
console.log('fox.fabricante    -> ',fox.fabricante);

console.log('--------------------');
console.log('toString fox    : ',fox);

console.log('--------------------');
console.log('apagando a propriedade Fabricante');
delete fox.fabricante
console.log('fox.fabricante    -> ',fox.fabricante);
console.log('toString fox    : ',fox);

console.log('--------------------');
console.log('Iterando Propriedade apos exclusao');
for(propriedade in fox){
  console.log(propriedade , ' é do fox : ', fox.hasOwnProperty(propriedade) );
}
