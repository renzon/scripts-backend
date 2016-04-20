var categoriaComponentes = angular.module('categoria-componentes', []);

categoriaComponentes.directive('categoriaForm', function () {
  return {
    restrict: 'E',
    templateUrl:'/static/categoria/form.html'
  };
});


