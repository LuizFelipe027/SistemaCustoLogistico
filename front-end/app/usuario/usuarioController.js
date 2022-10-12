(function () {
  angular.module('sistemaCustoLogistico').controller('UsuarioCtrl', [
    '$scope',
    '$http',
    //'$location',
    'msgs',
    'tabs',
    usuarioController
  ])

  function usuarioController($scope, $http, msgs, tabs) {
    const urlPadrao = 'http://localhost:5000'

    $scope.getUsuarios = function () {
      //const url = `${urls.apiUrl}/usuario?skip=${skip}&limit=${limit}&filter=${$scope.filter}`
      const url = `${urlPadrao}/usuario/List`
      $http.get(url).then(function (resp) {
        $scope.usuarios = resp.data
        $scope.usuario = {}
        tabs.show($scope, { tabList: true, tabCreate: true })
      }).catch(function (error) {
        msgs.addError(error)
      })
    }

    $scope.createUsuario = function () {
      const url = `${urlPadrao}/usuario/create`
      $http.post(url, $scope.usuario).then(function (response) {
        $scope.usuario = {}
        $scope.getUsuarios()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function (error) {
        msgs.addError(error)
      })
    }

    $scope.cancel = function() {
      tabs.show($scope, { tabList: true, tabCreate: true })
      $scope.usuario = {}
    }

    $scope.showTabUpdate = function (usuario) {
      initUsuario(usuario)
      tabs.show($scope, { tabUpdate: true })
    }

    $scope.updateUsuario = function() {
      const url = `${urlPadrao}/usuario/update/${$scope.usuario.ID}`
      $http.put(url, $scope.usuario).then(function(response) {
        $scope.usuario = {}
        $scope.getUsuarios()
        tabs.show($scope, {tabList: true})
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(error) {
        msgs.addError(error)
      })
    }

    $scope.showTabDelete = function (usuario) {
      initUsuario(usuario)
      tabs.show($scope, { tabDelete: true })
    }

    $scope.deleteUsuario = function() {
      const url = `${urlPadrao}/usuario/delete/${$scope.usuario.ID}`
      $http.delete(url, $scope.usuario).then(function(response) {
         $scope.usuario = {}
         $scope.getUsuarios()
         tabs.show($scope, {tabList: true})
         msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function(error) {
         msgs.addError(error)
      })
    }

    const initUsuario = function (usuario) {
      if (usuario) {
        const url = `${urlPadrao}/usuario/getOne/${usuario.ID}`
        $http.get(url).then(function (resp) {
          $scope.usuario = resp.data
        }).catch(function (error) {
          msgs.addError(error)
        })
      } else {
        $scope.usuario = {}
      }
    }

    $scope.getUsuarios()
  }
})()
