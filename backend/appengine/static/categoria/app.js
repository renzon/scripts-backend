var categoriaApp = angular.module('categoriaApp',
  ['categoria-componentes', 'categoria-service']);

categoriaApp.controller('CategoriaCtrl',
  function ($scope, CategoriaAPI) {
    $scope.categorias = [];
    CategoriaAPI.listar(function(categoriasDoServidor){
      $scope.categorias=categoriasDoServidor;
    });
  });