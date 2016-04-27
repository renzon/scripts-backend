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

      $scope.salvar = function () {
        CategoriaAPI.salvar($scope.categoria, function(categoriaDoServidor){
          console.log(categoriaDoServidor);
        });
      };

      $scope.alternarVisibilidade = function () {
        $scope.formVisivelFlag = !$scope.formVisivelFlag;
      };

    }
  };
});


