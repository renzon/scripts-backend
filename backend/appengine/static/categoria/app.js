var categoriaApp = angular.module('categoriaApp',
  ['categoria-componentes']);

categoriaApp.controller('CategoriaCtrl',
  function ($scope) {
    $scope.categorias = [
      {
        id: 1,
        nome: 'Tablet',
        creation: '12/12/12 12:12:12',
        codigo: 2345678
      },
      {
        id: 2,
        nome: 'Tablet',
        creation: '12/12/12 12:12:12',
        codigo: 2345678
      }];
  });