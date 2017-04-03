// push() -> adciona ao final
// pop()  -> retira do final
// unshift() -> adciona ao inicio
// shift() -> retira do inicio

var emails = [];
console.log(emails);

//adcionando um elemento ao final com push()
console.log('----------------------------');
console.log('adcionando um elemento ao final com push()');
console.log('----------------------------');

emails.push('email@teste1');
console.log(emails);
console.log(emails.length);

emails.push('email@teste2');
console.log(emails);
console.log(emails.length);

emails.push('email@teste3');
console.log(emails);
console.log(emails.length);

//Retirando um elemento do final com pop()
console.log('----------------------------');
console.log('Retirando um elemento do final com pop()');
console.log('----------------------------');

var emailretirado = emails.pop();
console.log(emails);
console.log('email retirado : ',emailretirado);
console.log(emails.length);


//adcionando um elemento no inicio com unshift()
console.log('----------------------------');
console.log('adcionando um elemento no inicio com unshift()');
console.log('----------------------------');

emails.unshift('email@teste0');
console.log(emails);
console.log(emails.length);

//Retirando um elemento do inicio com shift()
console.log('----------------------------');
console.log('Retirando um elemento do inicio com shift()');
console.log('----------------------------');

var emailretirado = emails.shift();
console.log(emails);
console.log('email retirado : ',emailretirado);
console.log(emails.length);
