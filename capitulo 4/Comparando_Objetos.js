var joao = {
  nome : 'Joao',
  idade : 25,
  email : 'teste@email.com',
  igualA : function(obj){
    return this.email === obj.email;
  }
}
var maria = {
  nome : 'Maria',
  idade : 27,
  email : 'teste@email.com'
  igualA : function(obj){
    return this.email === obj.email;
  }
}

  console.log('Joao é igual a Maria ? :', joao.igualA(maria));
