(function(){
  angular.module('sistemaCustoLogistico').controller('MenuCtrl', [
    '$scope',
    // '$http',
    // '$location',
    // 'msgs',
    // 'consts',
    // 'urls',
    MenuController
  ])

  function MenuController($scope) {

    $scope.menuDashboard = true
    $scope.menuIntegracao = true
    $scope.menuAutomacao = true
    $scope.menuUsuario = true
   
  }
})()
