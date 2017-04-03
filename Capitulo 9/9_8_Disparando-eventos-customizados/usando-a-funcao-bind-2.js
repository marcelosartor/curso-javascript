/*
Objeto Estado
*/

var Estado = function(){

  function Estado(){
    this.comboEstado = $('#combo-estado');

    // Para criar um evento personalizado crie as linhas abaixo.
    // utilize ele para dar o trigger no evento desejado.
    this.emitter = $({});
    // quem quiser utilizar deve se atachar no on (ver prototype de Cidade)
    this.on = this.emitter.on.bind(this.emitter);
  }

  Estado.prototype.iniciar = function () {

    $.ajax({
      url:'http://localhost:8080/estados',
      method: 'GET',
      dataType: 'jsonp',
      success: onEstadosRetornados.bind(this),
      error: onError
    });

    // Evendo desejado - a funcao onEstadoAlterado chama o emmiter criado
    // no construtor Estado
    this.comboEstado.on('change',onEstadoAlterado.bind(this) );

  };


  function onEstadoAlterado(){
      // chama o emitter criado no construtor Estado
      this.emitter.trigger('alterado',this.comboEstado.val());
  } ;

  function onEstadosRetornados(estados){

    this.comboEstado.html('<option value="">Selecione o estado</option>');

    estados.forEach( function(estado){
        var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
        this.comboEstado.append(optionEstado);
    }.bind(this));

  }

  function onError(){
    alert('Erro ao carregar os estados');
  }

  return Estado;

}();

/*
Objeto Cidade
*/

var Cidade = function(){

  function Cidade(estado){
    this.estado = estado;
    this.comboCidade = $('#combo-cidade');
  }

  Cidade.prototype.iniciar = function(){
    // Escutando evento personalizado de Estado.
    this.estado.on('alterado',onEstadoSelecionado.bind(this));

  }

  function onEstadoSelecionado(evento,uf){
    if(uf){
      $.ajax({
        url:'http://localhost:8080/cidades',
        method: 'GET',
        dataType: 'jsonp',
        data :{
          uf:uf
        },
        success: onCidadesRetornadas.bind(this),
        error: onError
      });
    }else{
      this.comboCidade.html('');
      this.comboCidade.attr('disabled','disabled');
    }
  }

  function onCidadesRetornadas(cidades){
    this.comboCidade.removeAttr('disabled');
    this.comboCidade.html('<option>Selecione a Cidade</option>')
    cidades.forEach(function(cidade){
      var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
      this.comboCidade.append(optionCidade)
    }.bind(this));
  }

  function onError(){
    alert('Erro ao buscar cidades');
  }


  return Cidade;

}();

/*
Chama função apos carregar a pagina.
*/

$(function(){
  var estado = new Estado();
  estado.iniciar();

  var cidade = new Cidade(estado);
  cidade.iniciar();

})
