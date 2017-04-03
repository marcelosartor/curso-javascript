function incrementar(){
  var conta = 0;

  return function(){
      return ++conta;
  }
}

console.log("tipo ", typeof incrementar());

var fn = incrementar();

console.log(fn());
console.log(fn());
console.log(fn());

fn = incrementar();

console.log(fn());
console.log(fn());
console.log(fn());
