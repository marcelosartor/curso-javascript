var joao = {
  nome : 'Joao',
  idade : 25,
  endereco : {
    logradouro : 'Av Brasil',
    numero : 100,
    complemento : 'Apto 202',
    cidade : 'Tubarao',
    estado : 'SC'
  }
}

console.log(joao);

// acessando propriedade em objeto dentro de outro objeto
console.log('cidade do joao',joao.endereco.cidade);
console.log('estado do joao',joao['endereco']['estado']);

//mudando propriedade
console.log('cidade do joao',joao.endereco.cidade);
joao.endereco.cidade = 'Jaguaruna';
console.log('cidade do joao',joao.endereco.cidade);
