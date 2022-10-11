(function () {
  angular.module('sistemaCustoLogistico').controller('UsuarioCtrl', [
    '$scope',
    '$http',
    //'$location',
    //'msgs',
    //'tabs',
    usuarioController
  ])

  function usuarioController($scope, $http) {

    $scope.getUsuarios = function() {
      //const url = `${urls.apiUrl}/usuario?skip=${skip}&limit=${limit}&filter=${$scope.filter}`
      const url = 'http://localhost:5000/usuario/List'
      $http.get(url).then(function(resp) {
        
        $scope.usuarios = resp.data
        console.log($scope.usuarios)
        $scope.usuario = {}
        //tabs.show($scope, {tabList: true})
      }).catch(function(error) {
        msgs.addError(error)
      })
    }

    $scope.create = function () {
      const url = 'http://localhost:5000/usuario/create'
      console.log($scope.usuario);
      const usuario = {
        nome: "LuizPaixao",
        email: "lp@teste.com",
        senha: "password1223" 
      }
      $http.post(url, usuario).success(function (response) {
        $scope.usuario = {}
        console.log('Funcionou');
      })
    }

    $scope.getUsuarios()
  }
})()
