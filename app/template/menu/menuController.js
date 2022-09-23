(function(){
  angular.module('sistemaCustoLogistico').controller('MenuCtrl', [
    '$scope',
    '$http',
    '$location',
    'msgs',
    'consts',
    'urls',
    'auth',
    MenuController
  ])

  function MenuController($scope, $http, $location, msgs, consts, urls, auth) {

    $scope.menuDashboard = true
    $scope.menuIntegracao = true
    $scope.menuAutomacao = true
    $scope.menuUsuario = true
   
  }
})()
