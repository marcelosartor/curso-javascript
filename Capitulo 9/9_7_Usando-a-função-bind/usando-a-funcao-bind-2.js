var Estado = function(){

  function Estado(){
    this.comboEstado = $('#combo-estado');
  }

  Estado.prototype.iniciar = function () {
    console.log('Iniciando o estado...',this);
    $.ajax({
      url:'http://localhost:8080/estados',
      method: 'GET',
      dataType: 'jsonp',
      success: onEstadosRetornados.bind(this),
      error: onError
    });
  };

  function onEstadosRetornados(estados){
    console.log('onEstadosRetornados ',this);
    this.comboEstado.html('<option>Selecione o estado</option>');

    estados.forEach( function(estado){
        console.log('this no forEach',this);
        var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
        this.comboEstado.append(optionEstado);
    }.bind(this));
  }

  function onError(){
    alert('Erro ao carregar os estados');
  }

  /*
  var comboEstado = $('#combo-estado');

  function iniciar(){
    console.log('iniciando o estado');
    $.ajax({
      url:'http://localhost:8080/estados',
      method: 'GET',
      dataType: 'jsonp',
      success: onEstadosRetornados,
      error: onError
    });
  }

  function onEstadosRetornados(estados){
    comboEstado.html('<option>Selecione o estado</option>');
    estados.forEach( function(estado){
        var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
        comboEstado.append(optionEstado);
    });
  }

  function onError(){
    alert('Erro ao carregar os estados');
  }

  */

  return Estado;


}();

$(function(){
  var estado = new Estado();
  estado.iniciar();

  //var cidade = new Cidade(estado);
  //cidade.iniciar();

})
