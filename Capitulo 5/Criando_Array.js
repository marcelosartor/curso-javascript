var emails = [];
emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

console.log('----------------------------');
console.log('mostra conteudo do array');
console.log('----------------------------');
for(var i=0;i<emails.length;i++){
  console.log('array[',i,'] : ',emails[i] );
}

console.log('----------------------------');
console.log('mostra conteudo do array com estouro');
console.log('----------------------------');
for(var i=0;i<=emails.length;i++){
  console.log('array[',i,'] : ',emails[i] );
}

console.log('----------------------------');
console.log('Acrescentando item a frente -> 2,3 e 4 não existem');
console.log('----------------------------');
emails[5] = 'teste@mail.com';

for(var i=0;i<emails.length;i++){
  console.log('array[',i,'] : ',emails[i] );
}
