(function () {
  angular.module('sistemaCustoLogistico').controller('DashboardCtrl', [
    '$scope',
    '$http',
    // 'msgs',
    // 'tabs',
    // 'consts',
    // 'urls',
    // 'formatField',
    DashboardController
  ])

  function DashboardController($scope, $http) {
    //declara variavel principal
    $scope.dashboard = {}
    $scope.tabDashboard = true

    $scope.getDashCadastros = function () {

      const url = `http://localhost:5000/entrega/entregas`
      $http.get(url).then(function (resp) {
        $scope.entregas = resp.data
        $scope.grafico = { lucro: {} }

        //declaracao para soma do lucro
        $scope.countLucro = 0
        $scope.countValorBruto = 0
        for(let lucro of $scope.entregas){
          $scope.countLucro += lucro.LUCRO_NOTA
          $scope.countValorBruto += lucro.VALOR_BRUTO
        }

        //transforma label em formato BRl
        $scope.grafico.options = {
          scales: {
            yAxes: [{
              ticks: {
                userCallback: function (value, index, values) {
                  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                }
              }
            }
            ]
          }
        }

        //declaracao de variaveis para o grafico de linha
        $scope.grafico.lucro.series = ['Valor']
        $scope.grafico.lucro.data = [
          [1510.97, 
          3058, 
          3134.01, 
          932.65]
        ]
        $scope.grafico.lucro.labels = ['01/11', '02/11', '03/11', '04/11']

        //declaracao de variaveis para o grafico de barras
        $scope.countEntregas = 0
        $scope.countEntregasOtimas = 0
        $scope.countEntregasBoas = 0
        $scope.countEntregasMedias = 0
        $scope.countEntregasRuins = 0
        //objeto curva
        $scope.scores = {
          data2: [0, 2, 1, 3, 2, 1, 2, 3, 1],
          labels: ["0", "2.5", "5.25", "6", "6,5", "6.75", "7", "8", "10"]
        }
        for (let entrega of $scope.entregas) {
          if(entrega.SCORE_TOTAL == 10) {
            $scope.countEntregasOtimas++
          } else if (entrega.SCORE_TOTAL >= 8 && entrega.SCORE_TOTAL < 10) {
            $scope.countEntregasBoas++
          } else if (entrega.SCORE_TOTAL >= 4 && entrega.SCORE_TOTAL < 8) {
            $scope.countEntregasMedias++
          } else {
            $scope.countEntregasRuins++
          }
          $scope.countEntregas++
        }
      }).catch(err => {
        console.log(err)
      })
    }

    //chama rotinas principais
    $scope.getDashCadastros()
  }
})()
