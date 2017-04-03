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

for(var propriedade in joao){
  console.log(propriedade,' : ',joao[propriedade]);
}
