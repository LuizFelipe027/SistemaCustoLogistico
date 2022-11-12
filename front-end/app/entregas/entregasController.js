(function () {
  angular.module('sistemaCustoLogistico').controller('entregasCtrl', [
    '$scope',
    '$http',
    'msgs',
    'tabs',
    //'consts',
    //'urls',
    //'formatField',
    entregasController
  ])

  function entregasController($scope, $http,  msgs, tabs) {

    $scope.page = 1
    $scope.filter = ''
    // $scope.cbStentrega = consts.cbStentrega
    // $scope.cbTipoDoc = consts.cbTipoDoc
    $scope.cbSCORES = [ { codigo: 1, nome: '1' },
                        { codigo: 2, nome: '2' },
                        { codigo: 3, nome: '3' },
                        { codigo: 4, nome: '4' },
                        { codigo: 5, nome: '5' }
    ],
     
    $scope.buscaIndex = function (objeto, valor) {
      let id = objeto.map(function (e) { return e.codigo; })
      let pos = id.indexOf(valor)
      return pos
    }

    $scope.filterBrowse = function (filter) {
      //retira caracteres invalidos
      filter = filter.replaceAll('/', ' ')
      //pagina 1
      $scope.page = 1
      if (filter) {
        $scope.filter = filter
      } else {
        $scope.filter = ''
      }
      $scope.getEntregas()
    }

    $scope.showPrevPag = function () {
      if ($scope.page != 1) {
        $scope.page--
        $scope.getEntregas()
      }
    }

    $scope.showNextPag = function () {
      $scope.page++
      $scope.getEntregas()
    }

    $scope.refreshentrega = function () {
      $scope.getEntregas()
    }

    $scope.getEntregas = function () {
      //monta url conforme filtro da tela
      //habilita tela de loading
      // $scope.msgLoading = 'Buscando entregas'
      // $scope.tabLoading = true
      //variavel de url
      var paramUrl = ''
      $scope.entregas = {}
      //cria objeto caso não exista
      if (!$scope.filtro) {
        $scope.filtro = {}
      }

      //verifica se tem filtro de grupoeconomico
      if ($scope.filtro.PERFIL) {
        paramUrl += `&PERFIL='${$scope.filtro.PERFIL}'`
      }
      //verifica se filtro empresa
      if ($scope.filtro.RAZAO_SOCIAL) {
        paramUrl += `&RAZAO_SOCIAL='${$scope.filtro.RAZAO_SOCIAL}'`
      }
      //verifica se filtro empresa
      if ($scope.filtro.SCORE_TOTAL) {
        paramUrl += `&RAZAO_SOCIAL=${$scope.filtro.SCORE_TOTAL}`
      }

      //Datas
      //verifica se filtra dataDe
      if ($scope.filtro.dataEntregaDe) {
        paramUrl += `&dataEntregaDe=${$scope.filtro.dataEntregaDe}`
      }
      //verifica se filtra dataAte
      if ($scope.filtro.dataEntregaAte) {
        paramUrl += `&dataEntregaAte=${$scope.filtro.dataEntregaAte}`
      }

      //variavel url
      //const url = `${urls.apiUrl}/entrega?skip=${skip}&limit=${limit}&filter=${$scope.filter}${paramUrl}`
      const url = `http://localhost:5000/entrega/entregas?${paramUrl}`
      $http.get(url).then(function (resp) {
        $scope.entregas = resp.data
        $scope.entrega = {}
      }).catch(function (error) {
        $scope.tabLoading = false
        msgs.addError(error)
      })
    }

    // $scope.formatDateTime = function (datetime) {
    //   return formatField.formatDateTime(datetime)
    // }

    // $scope.formatDate = function (datetime) {
    //   return formatField.formatDate(datetime)
    // }

    // $scope.formatCNPJCPF = function (codigo) {
    //   return formatField.formatCNPJCPF(codigo)
    // }

    $scope.showTabView = function (entrega) {

      initEntrega(entrega)
      $scope.show({ tabView: true })

    }

    $scope.showTabUpdate = function (entrega) {

      initEntrega(entrega)
      tabs.show($scope, { tabUpdate: true })

    }

    $scope.showTabInvoice = function (entrega) {

      initEntrega(entrega)
      $scope.show({ tabInvoice: true })

    }

    $scope.showTabDelivery = function (entrega) {

      initEntrega(entrega)
      $scope.show({ tabDelivery: true })

    }

    $scope.showTabConcluded = function (entrega) {

      initEntrega(entrega)
      $scope.show({ tabConcluded: true })

    }

    $scope.showTabCanceled = function (entrega) {

      initEntrega(entrega)
      $scope.show({ tabCanceled: true })

    }

    $scope.cancel = function () {
      $scope.entrega = {}
      $scope.show({ tabList: true })
    }

    // $scope.updateEntrega = function () {
    //   //monta url
    //   const url = `${urls.apiUrl}/entrega/${$scope.entrega._id}`
    //   $http.put(url, $scope.entrega).then(function (response) {
    //     $scope.entrega = {}
    //     $scope.getEntregas()
    //     $scope.show({ tabList: true })
    //     msgs.addSuccess('Operação realizada com sucesso!')
    //   }).catch(function (error) {
    //     msgs.addError(error)
    //   })
    // }

    // $scope.updateInvoice = function () {
    //   //muda status do entrega
    //   $scope.entrega.status = 'faturado'
    //   //monta url
    //   const url = `${urls.apiUrl}/entrega/status/${$scope.entrega._id}`
    //   $http.put(url, $scope.entrega).then(function (response) {
    //     $scope.entrega = {}
    //     $scope.getEntregas()
    //     $scope.show({ tabList: true })
    //     msgs.addSuccess('Operação realizada com sucesso!')
    //   }).catch(function (error) {
    //     msgs.addError(error)
    //   })
    // }

    // $scope.updateDelivery = function () {
    //   //muda status do entrega
    //   $scope.entrega.status = 'enviado'
    //   //monta url
    //   const url = `${urls.apiUrl}/entrega/status/${$scope.entrega._id}`
    //   $http.put(url, $scope.entrega).then(function (response) {
    //     $scope.entrega = {}
    //     $scope.getEntregas()
    //     $scope.show({ tabList: true })
    //     msgs.addSuccess('Operação realizada com sucesso!')
    //   }).catch(function (error) {
    //     msgs.addError(error)
    //   })
    // }

    // $scope.updateConcluded = function () {
    //   //muda status do entrega
    //   $scope.entrega.status = 'concluido'
    //   //monta url
    //   const url = `${urls.apiUrl}/entrega/status/${$scope.entrega._id}`
    //   $http.put(url, $scope.entrega).then(function (response) {
    //     $scope.entrega = {}
    //     $scope.getEntregas()
    //     $scope.show({ tabList: true })
    //     msgs.addSuccess('Operação realizada com sucesso!')
    //   }).catch(function (error) {
    //     msgs.addError(error)
    //   })
    // }

    // $scope.updateCanceled = function () {
    //   //muda status do entrega
    //   $scope.entrega.status = 'cancelado'
    //   //monta url
    //   const url = `${urls.apiUrl}/entrega/status/${$scope.entrega._id}`
    //   $http.put(url, $scope.entrega).then(function (response) {
    //     $scope.entrega = {}
    //     $scope.getEntregas()
    //     $scope.show({ tabList: true })
    //     msgs.addSuccess('Operação realizada com sucesso!')
    //   }).catch(function (error) {
    //     msgs.addError(error)
    //   })
    // }

    $scope.search = function () {
      const urlPerfil = `http://localhost:5000/perfil/List`
      $http.get(urlPerfil).then(function (resp) {
        $scope.perfils = resp.data
      }).catch(function (err) {
        msgs.addError(err)
      })

      const urlRazaoSocial = `http://localhost:5000/cliente/List`
      $http.get(urlRazaoSocial).then(function (resp) {
        $scope.clientes = resp.data
      }).catch(function (err) {
        msgs.addError(err)
      })
    }

    $scope.limpaFiltros = () => {
      $scope.filtro = {}
      $scope.getEntregas()
    }

    // var initEntrega = function (entrega) {
    //   const url = `${urls.apiUrl}/entrega/getOne/${entrega.NUMERO_NOTA}`
    //   $http.get(url).then(function (resp) {
    //     //inicia objeto
    //     $scope.entrega = resp.data
    //     //define a primeira aba
    //     $scope.tabAbaDados = true
    //   }).catch(function (error) {
    //     msgs.addError(error)
    //   })
    // }

    $scope.trocaAba = function ({
      tabAbaDados = false,
      tabAbaFaturamento = false
    }) {
      //atualiza com nova informacao
      $scope.tabAbaDados = tabAbaDados
      $scope.tabAbaFaturamento = tabAbaFaturamento
    }

    //controle de apresentação das telas
    $scope.show = function ({
      tabList = false,
      tabView = false,
      tabUpdate = false,
      tabInvoice = false,
      tabDelivery = false,
      tabConcluded = false,
      tabCanceled = false
    }) {
      //guarda informações anteriores
      $scope.oldTabList = $scope.tabList || false
      $scope.oldTabUpdate = $scope.tabUpdate || false
      $scope.oldTabView = $scope.tabView || false
      $scope.oldTabInvoice = $scope.tabInvoice || false
      $scope.oldTabDelivery = $scope.tabDelivery || false
      $scope.oldTabConcluded = $scope.tabConcluded || false
      $scope.oldTabCanceled = $scope.tabCanceled || false

      //atualiza com nova informacao
      $scope.tabList = tabList
      $scope.tabUpdate = tabUpdate
      $scope.tabView = tabView
      $scope.tabInvoice = tabInvoice
      $scope.tabDelivery = tabDelivery
      $scope.tabConcluded = tabConcluded
      $scope.tabCanceled = tabCanceled
    }


    $scope.getEntregas()
    $scope.search()
  }
})()
