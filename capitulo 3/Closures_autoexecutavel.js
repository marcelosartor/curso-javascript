var incrementar = (function() {
  var conta = 0;

  return function(){
      return ++conta;
  }
})()

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
