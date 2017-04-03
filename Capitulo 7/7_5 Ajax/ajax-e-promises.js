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
    var comboEstado = $('#combo-estado');
    //comboEstado.empty();
    comboEstado.html('<option>Selecione o estado</option>')
    estados.forEach( function(estado){
      /*
      console.log('UF :', estado.uf);
      console.log(' - Nome :', estado.nome);
      */
        var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
        comboEstado.append(optionEstado);


    })

  })


  resposta.fail(function(){
    alert('Erro ao carregar os estados');
  })

})
