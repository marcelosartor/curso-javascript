console.log("---------------------------");
console.log("For tradicional = ao java");
console.log("---------------------------");
for(var i=0;i<5;i++){
  console.log('i',i)
}

console.log("---------------------------");
console.log("For com inicialização de duas variaveis");
console.log("---------------------------");

var s = "Familia";

for(var i=0,tamanho = s.length;i<tamanho;i++){
  console.log('i',i,s.substr(i,1));
}

console.log("---------------------------");
console.log("For com inicialização por fora");
console.log("---------------------------");

var s = "Marcelo";
var i=0,tamanho = s.length;
for( ; i<tamanho ; i++){
  console.log('i',i,s.substr(i,1));
}

console.log("---------------------------");
console.log("For com inicialização por fora e sem contador no head");
console.log("---------------------------");

var s = "Sartor";
var i=0,tamanho = s.length;
for( ; i<tamanho ; ){
  console.log('i',i,s.substr(i,1));
  i++
}

console.log("---------------------------");
console.log("For com loop infinito com break");
console.log("---------------------------");

var cont = 0;

for( ;  ; ){
  console.log('->',cont++);
  if(cont>5){
    break;
  }
}
