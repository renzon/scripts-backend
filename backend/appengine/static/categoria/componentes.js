var categoriaComponentes = angular.module('categoria-componentes',
  ['categoria-service']);

categoriaComponentes.directive('categoriaForm', function () {
  return {
    restrict: 'E',
    templateUrl: '/static/categoria/form.html',
    replace: true,
    scope: {},
    controller: function ($scope, CategoriaAPI) {
      $scope.categoria = {nome: 'Notebook', codigo: 1};
      $scope.formVisivelFlag = true;
      $scope.salvandoFlag = false;
      $scope.erros = {};
    

      $scope.salvar = function () {
        $scope.salvandoFlag = true;
        $scope.erros = {};
        CategoriaAPI.salvar($scope.categoria, function (categoriaDoServidor) {
          $scope.categoria = {nome: '', codigo: ''}
        }, function (erros) {
          $scope.erros = erros;
        }, function () {
          $scope.salvandoFlag = false;
        });
      };

      $scope.alternarVisibilidade = function () {
        $scope.formVisivelFlag = !$scope.formVisivelFlag;
      };

    }
  };
});


