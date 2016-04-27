var categoriaComponentes = angular.module('categoria-componentes', []);

categoriaComponentes.directive('categoriaForm', function () {
  return {
    restrict: 'E',
    templateUrl:'/static/categoria/form.html',
    replace: true,
    scope:{},
    controller:function($scope){
      $scope.categoria={nome:'Notebook', codigo:1};
      $scope.formVisivelFlag=true;

      $scope.salvar=function(){
        console.log($scope.categoria);
      };

      $scope.alternarVisibilidade=function(){
        $scope.formVisivelFlag=!$scope.formVisivelFlag;
      };

    }
  };
});


