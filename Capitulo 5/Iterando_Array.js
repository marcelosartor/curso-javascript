var emails = [];
emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';
emails[2] = 'pedroa@email.com';

console.log('----------------------------');
console.log('Com for nomal');
console.log('----------------------------');
for(var i=0;i<emails.length;i++){
  console.log('array[',i,'] : ',emails[i] );
}

console.log('----------------------------');
console.log('Com forEach');
console.log('----------------------------');
emails.forEach(function(e){
  console.log(e);
})
