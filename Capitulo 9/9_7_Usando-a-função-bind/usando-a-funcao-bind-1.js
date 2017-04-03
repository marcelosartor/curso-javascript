var estado = function(){
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


  return {
    iniciar : iniciar
  }


}();


estado.iniciar();

/*

$(function(){
  var resposta = $.ajax({
    url:'http://localhost:8080/estados',
    method: 'GET',
    dataType: 'jsonp',
    success: function(estados){
      console.log(estados);
    }
  });

  resposta.done( function(estados){
    //var comboEstado = $('#combo-estado');
    //comboEstado.empty();
    comboEstado.html('<option>Selecione o estado</option>')
    estados.forEach( function(estado){
        var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
        comboEstado.append(optionEstado);


    })

  })


  resposta.fail(function(){
    alert('Erro ao carregar os estados');
  })

})

*/
