var categoriaService = angular.module('categoria-service', []);

categoriaService.factory('CategoriaAPI', function () {
  var id = 1;
  var delay = 2000;

  return {
    salvar: function (categoria, sucessoCallback) {
      // ir no servidor

      // retornando servidor


      setTimeout(function () {
          var categoriaDoServidor = {'id': id, creation: '12/12/12 12:00:00'};
          categoriaDoServidor.nome = categoria.nome;
          categoriaDoServidor.codigo = categoria.codigo;
          id++;
          if (sucessoCallback !== undefined) {
            sucessoCallback(categoriaDoServidor);
          }
        },
        delay
      );

    }
  };
});