(function(){
    angular.module('sistemaCustoLogistico').controller('DashboardCtrl', [
      '$scope',
      '$http',
      'msgs',
      'tabs',
      'consts',
      'urls',
      'formatField',
      DashboardController
    ])
  
    function DashboardController($scope,$http, msgs, tabs, consts, urls,formatField) {
  
      //declara variavel principal
      $scope.dashboard = {}
      //$scope.tabDashboard = true
  
      $scope.formatDateTime = function(datetime) {
        return formatField.formatDateTime(datetime)
      }
  
      $scope.formatDate = function(datetime) {
        return formatField.formatDate(datetime)
      }
  
      $scope.getDashCadastros = function() {
        //kpi quantidade de entregas
        $http.get(`${urls.apiUrl}/empresa/count`).then(function(resp) {
          $scope.counEntregas = resp.data.value
        })
        //kpi quantidade de entregas boas
        $http.get(`${urls.apiUrl}/produto/total`).then(function(resp) {
          $scope.counEntregasBoas = resp.data
        })
        //kpi quantidade de entregas ruins
        $http.get(`${urls.apiUrl}/produtoempresa/count`).then(function(resp) {
          $scope.countEntregasRuins = resp.data.value
        })
      }
  
      
  
      //chama rotinas principais
      $scope.getDashCadastros()
      $scope.getDashMovimentacoes()
  
    }
  })()
  