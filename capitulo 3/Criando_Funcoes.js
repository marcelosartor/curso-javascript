// function declaration
function somar(a, b) {
  console.log('Arguments ->',arguments );
	return a + b;
}

// function expression
var subtrair = function(a, b) {
	return a - b;
}

var soma = somar(2, 3);
console.log('2 + 3 =', soma);

var subtraido = subtrair(6, 2);
console.log('6 - 2 =', subtraido);

console.log('typeof subtrair', typeof subtrair);


console.log('-----------------');
var a = function teste(a,b){
  return a + b;
}

console.log(a(1,1));
