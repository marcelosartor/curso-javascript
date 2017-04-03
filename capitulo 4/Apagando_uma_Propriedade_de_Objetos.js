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
delete joao.idade;
console.log('1->',joao);
delete joao['endereco'].estado;
console.log('2->',joao);
