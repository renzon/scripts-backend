var categoriaService = angular.module('categoria-service', []);

categoriaService.factory('CategoriaAPI', function ($http) {
  var id = 1;
  var delay = 2000;

  return {
    salvar: function (categoria, sucessoCallback) {
      $http.post('/categorias/rest/new', categoria).then(function(resultado){
        sucessoCallback(resultado.data);
      });

    }
  };
});