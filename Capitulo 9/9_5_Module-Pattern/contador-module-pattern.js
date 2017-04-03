var contador = function(){
   var valor = 0;
   var incrementar = function(){
     valor++;
   };
   var reset = function(){
     console.log('Valor do contador agora : ',valor);
     valor = 0;
   };
   var view = function(){
     console.log('Valor do contador agora : ',valor);
   }

   return {
     incrementar : incrementar,
     reset : reset,
     view : view
   }
}();

//contador.valor = 'teste';

contador.incrementar();
contador.incrementar();
contador.view();
contador.incrementar();
contador.incrementar();
contador.reset();
contador.incrementar();
contador.incrementar();
contador.reset();
