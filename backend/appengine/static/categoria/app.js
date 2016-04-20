var categoriaApp = angular.module('categoriaApp',
  ['categoria-componentes']);

categoriaApp.controller('CategoriaCtrl',
  function ($scope) {
    $scope.nome = 'Renzo';
  });