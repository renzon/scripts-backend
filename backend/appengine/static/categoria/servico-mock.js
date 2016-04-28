var categoriaService = angular.module('categoria-service', []);

categoriaService.factory('CategoriaAPI', function ($rootScope) {
  var id = 1;
  var delay = 2000;

  return {
    salvar: function (categoria, sucessoCallback, erroCallback, alwaysCallback) {
      setTimeout(function () {
          if (categoria.nome !== '' && categoria.codigo !== '') {
            var categoriaDoServidor = {'id': id, creation: '12/12/12 12:00:00'};
            categoriaDoServidor.nome = categoria.nome;
            categoriaDoServidor.codigo = categoria.codigo;
            id++;
            if (sucessoCallback !== undefined) {
              sucessoCallback(categoriaDoServidor);

            }
          } else {
            var erros = {};
            if (categoria.nome === '') {
              erros.nome = 'Campo Obrigatório';
            }
            if (categoria.codigo === '') {
              erros.codigo = 'Campo Obrigatório';
            }

            if (erroCallback !== undefined) {
              erroCallback(erros);
            }

          }

          if (alwaysCallback) {
            alwaysCallback();
          }

          $rootScope.$digest();
        },
        delay
      );

    },
    listar: function (sucessoCallback, erroCallback, alwaysCallback) {
      setTimeout(function () {
          var categorias = [
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

          sucessoCallback(categorias);
          if (alwaysCallback) {
            alwaysCallback();
          }

          $rootScope.$digest();
        },
        delay
      );

    }
  };
});