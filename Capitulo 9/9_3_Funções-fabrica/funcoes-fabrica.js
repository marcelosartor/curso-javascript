var criarCarro=function(nome,placa,fabricante){
  return {
    nome:nome,
    placa:placa,
    fabricante:fabricante
  }
}


fox = criarCarro('Fox','AAA-1111','VW');
gol = criarCarro('gol','AAA-1111','VW');

console.log(fox);
console.log(gol);
