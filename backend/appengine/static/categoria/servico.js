var categoriaService = angular.module('categoria-service', []);

categoriaService.factory('CategoriaAPI', function ($http) {
  var id = 1;

  return {
    salvar: function (categoria, sucessoCallback) {
      $http.post('/categorias/rest/new', categoria).then(function(resultado){
        sucessoCallback(resultado.data);
      });

    }
  };
});