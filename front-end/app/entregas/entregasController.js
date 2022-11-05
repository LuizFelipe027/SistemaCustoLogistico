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
    $scope.cbIntegradoAmbos = [{ codigo: 'ambos', nome: 'Ambos' },
    { codigo: 'integrado', nome: 'Integrado' },
    { codigo: 'naointegrado', nome: 'Não Integrado' }],
      //objeto de filtro
      $scope.filtro = {
        status: {
          criado: true,
          pago: true,
          faturado: false,
          enviado: false,
          concluido: false,
          cancelado: false
        },
        integrado: 'ambos',
        documento: 'ambos',
        rastreamento: 'ambos',
        concluido: 'ambos'
      }
    

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
      // //variaveis de cabecalho
      // const page = $scope.page || 1
      // const limit = $scope.itensPagina
      // const skip = (page - 1) * limit
      // //monta url conforme filtro da tela
      // //habilita tela de loading
      // $scope.msgLoading = 'Buscando entregas'
      // $scope.tabLoading = true
      // //variavel de url
      // var paramUrl = ''
      // //cria objeto caso não exista
      // if (!$scope.filtro) {
      //   $scope.filtro = {}
      // }


      // //verifica se tem filtro de grupoeconomico
      // if ($scope.filtro.grupoeconomico) {
      //   paramUrl += `&grupoeconomico=${$scope.filtro.grupoeconomico._id}`
      // }
      // //verifica se filtro empresa
      // if ($scope.filtro.empresa) {
      //   paramUrl += `&empresa=${$scope.filtro.empresa._id}`
      // }
      // //verifica se filtro empresa
      // if ($scope.filtro.parceiro) {
      //   paramUrl += `&parceiro=${$scope.filtro.parceiro._id}`
      // }
      // //verifica se filtro vendedor
      // if ($scope.filtro.vendedor) {
      //   paramUrl += `&vendedor=${$scope.filtro.vendedor._id}`
      // }



      // //verifica se filtra status
      // if ($scope.filtro.integrado != 'ambos') {
      //   paramUrl += `&integrado=${$scope.filtro.integrado}`
      // }
      // //verifica se filtra status
      // if ($scope.filtro.documento != 'ambos') {
      //   paramUrl += `&documento=${$scope.filtro.documento}`
      // }
      // //verifica se filtra status
      // if ($scope.filtro.rastreamento != 'ambos') {
      //   paramUrl += `&rastreamento=${$scope.filtro.rastreamento}`
      // }
      // //verifica se filtra status
      // if ($scope.filtro.concluido != 'ambos') {
      //   paramUrl += `&concluido=${$scope.filtro.concluido}`
      // }

      // //Datas
      // //verifica se filtra dataDe
      // if ($scope.filtro.dataDe) {
      //   paramUrl += `&dataDe=${$scope.filtro.dataDe}`
      // }
      // //verifica se filtra dataAte
      // if ($scope.filtro.dataAte) {
      //   paramUrl += `&dataAte=${$scope.filtro.dataAte}`
      // }
      // //verifica se filtra dataPagamentoDe
      // if ($scope.filtro.dataPagamentoDe) {
      //   paramUrl += `&dataPagamentoDe=${$scope.filtro.dataPagamentoDe}`
      // }
      // //verifica se filtra dataPagamentoAte
      // if ($scope.filtro.dataPagamentoAte) {
      //   paramUrl += `&dataPagamentoAte=${$scope.filtro.dataPagamentoAte}`
      // }
      // //verifica se filtra dataFaturamentoDe
      // if ($scope.filtro.dataFaturamentoDe) {
      //   paramUrl += `&dataFaturamentoDe=${$scope.filtro.dataFaturamentoDe}`
      // }
      // //verifica se filtra dataFaturamentoAte
      // if ($scope.filtro.dataFaturamentoAte) {
      //   paramUrl += `&dataFaturamentoAte=${$scope.filtro.dataFaturamentoAte}`
      // }
      // //verifica se filtra dataEnvioDe
      // if ($scope.filtro.dataEnvioDe) {
      //   paramUrl += `&dataEnvioDe=${$scope.filtro.dataEnvioDe}`
      // }
      // //verifica se filtra dataEnvioAte
      // if ($scope.filtro.dataEnvioAte) {
      //   paramUrl += `&dataEnvioAte=${$scope.filtro.dataEnvioAte}`
      // }
      // //verifica se filtra dataConclusaoDe
      // if ($scope.filtro.dataConcluidoDe) {
      //   paramUrl += `&dataConcluidoDe=${$scope.filtro.dataConcluidoDe}`
      // }
      // //verifica se filtra dataConclusaoAte
      // if ($scope.filtro.dataConcluidoAte) {
      //   paramUrl += `&dataConcluidoAte=${$scope.filtro.dataConcluidoAte}`
      // }
      // //verifica se filtra dataCancelamentoDe
      // if ($scope.filtro.dataCanceladoDe) {
      //   paramUrl += `&dataCanceladoDe=${$scope.filtro.dataCanceladoDe}`
      // }
      // //verifica se filtra dataCanceladoAte
      // if ($scope.filtro.dataCanceladoAte) {
      //   paramUrl += `&dataCanceladoAte=${$scope.filtro.dataCanceladoAte}`
      // }

      //variavel url
      //const url = `${urls.apiUrl}/entrega?skip=${skip}&limit=${limit}&filter=${$scope.filter}${paramUrl}`
      const url = `http://localhost:5000/entrega/entregas`
      $http.get(url).then(function (resp) {
        $scope.entregas = resp.data
        console.log('$scope.entregas: ', $scope.entregas)
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

    $scope.cancelSearch = function () {
      $scope.tabSearch = false
      $scope.textFilterSearch = ''
    }

    $scope.checkSearch = function (tipo, index) {
      //tratamento tipo
      switch (tipo) {
        case 'grupoeconomico':
          $scope.filtro.grupoeconomico = $scope.gruposeconomicos[index]
          $scope.tabSearch = false
          $scope.getEntregas()
          break
        case 'empresa':
          $scope.filtro.empresa = { _id: $scope.empresas[index]._id, nome: $scope.empresas[index].nome, fantasia: $scope.empresas[index].fantasia, cnpj: $scope.empresas[index].cnpj }
          $scope.tabSearch = false
          $scope.getEntregas()
          break
        case 'parceiro':
          $scope.filtro.parceiro = $scope.parceiros[index]
          $scope.tabSearch = false
          $scope.getEntregas()
          break
        case 'vendedor':
          $scope.filtro.vendedor = $scope.vendedores[index]
          $scope.tabSearch = false
          $scope.getEntregas()
          break
        case 'cep':
          for (let dadocep of $scope.dadoscep) {
            if (dadocep.cbfilter) {
              switch (dadocep.tipo) {
                case 'cep':
                  $scope.entrega.cliente.cep = dadocep.consulta
                  break
                case 'endereco':
                  $scope.entrega.cliente.endereco = dadocep.consulta
                  break
                case 'bairro':
                  $scope.entrega.cliente.bairro = dadocep.consulta
                  break
                case 'municipio.codigo':
                  $scope.entrega.cliente.municipio = {
                    codigo: dadocep.consulta,
                    nome: $scope.entrega.cliente.municipio?.nome || '',
                    distrito: $scope.entrega.cliente.municipio?.distrito || ''
                  }
                  break
                case 'municipio.nome':
                  $scope.entrega.cliente.municipio = {
                    codigo: $scope.entrega.cliente.municipio?.codigo || '',
                    nome: dadocep.consulta,
                    distrito: $scope.entrega.cliente.municipio?.distrito || ''
                  }
                  break
                case 'municipio.distrito':
                  $scope.entrega.cliente.municipio = {
                    codigo: $scope.entrega.cliente.municipio?.codigo || '',
                    nome: $scope.entrega.cliente.municipio?.nome || '',
                    distrito: dadocep.consulta
                  }
                  break
                case 'estado.codigo':
                  $scope.entrega.cliente.estado = {
                    codigo: dadocep.consulta,
                    nome: $scope.entrega.cliente.estado?.nome || ''
                  }
                  break
              }
            }
          }
          $scope.tabSearch = false
          break
      }
    }

    $scope.eraseSearch = function (tipo) {
      switch (tipo) {
        case 'grupoeconomico':
          delete $scope.filtro.grupoeconomico
          delete $scope.filtro.empresa
          delete $scope.filtro.parceiro
          delete $scope.filtro.vendedor
          $scope.tabSearch = false
          break
        case 'empresa':
          delete $scope.filtro.empresa
          $scope.tabSearch = false
          break
        case 'parceiro':
          delete $scope.filtro.parceiro
          $scope.tabSearch = false
          break
        case 'vendedor':
          delete $scope.filtro.vendedor
          $scope.tabSearch = false
          break
      }
      //chama o filtro
      $scope.getEntregas()
    }

    $scope.filterSearch = function (tipo, textFilterSearch) {
      //retira caracteres invalidos
      textFilterSearch = textFilterSearch.replace('/', ' ')
      //chama o filtro principal
      $scope.search(tipo, textFilterSearch)
    }

    // $scope.search = function (tipo, textFilterSearch) {
    //   //variaveis para search
    //   $scope.textFilterSearch = textFilterSearch || ''
    //   $scope.typeSearch = tipo
    //   $scope.typeFormSearch = ''
    //   switch (tipo) {
    //     case 'cep':
    //       let urlCep = `${urls.apiUrl}/${tipo}?cep=${$scope.entrega.cliente.cep}`
    //       $http.get(urlCep).then(function (resp) {
    //         $scope.dadoscep = []
    //         $scope.dadoscep.push({ cbfilter: false, tipo: 'cep', atual: $scope.entrega.cliente.cep, consulta: resp.data.cep })
    //         $scope.dadoscep.push({ cbfilter: false, tipo: 'endereco', atual: $scope.entrega.cliente.endereco, consulta: resp.data.endereco })
    //         $scope.dadoscep.push({ cbfilter: false, tipo: 'bairro', atual: $scope.entrega.cliente.bairro, consulta: resp.data.bairro })
    //         $scope.dadoscep.push({ cbfilter: false, tipo: 'municipio.codigo', atual: $scope.entrega.cliente.municipio.codigo, consulta: resp.data.municipio.codigo })
    //         $scope.dadoscep.push({ cbfilter: false, tipo: 'municipio.nome', atual: $scope.entrega.cliente.municipio.nome, consulta: resp.data.municipio.nome })
    //         $scope.dadoscep.push({ cbfilter: false, tipo: 'municipio.distrito', atual: $scope.entrega.cliente.municipio.distrito, consulta: resp.data.municipio.distrito })
    //         $scope.dadoscep.push({ cbfilter: false, tipo: 'estado.codigo', atual: $scope.entrega.cliente.estado.codigo, consulta: resp.data.estado.codigo })
    //         $scope.dadoscep = $scope.dadoscep.filter(item => item.consulta)
    //         $scope.typeFormSearch = 'checkbox'
    //         $scope.tabSearch = true
    //       }).catch(function (err) {
    //         msgs.addError(err)
    //       })
    //       break
    //     case 'grupoeconomico':
    //       let url = `${urls.apiUrl}/${tipo}?filter=${$scope.textFilterSearch}`
    //       $http.get(url).then(function (resp) {
    //         $scope.gruposeconomicos = resp.data
    //         $scope.tabSearch = true
    //       }).catch(function (err) {
    //         msgs.addError(err)
    //       })
    //       break
    //     case 'empresa':
    //       if ($scope.filtro.grupoeconomico && $scope.filtro.grupoeconomico._id) {
    //         let url = `${urls.apiUrl}/${tipo}?grupoeconomico=${$scope.filtro.grupoeconomico._id}&filter=${$scope.textFilterSearch}`
    //         $http.get(url).then(function (resp) {
    //           $scope.empresas = resp.data
    //           $scope.tabSearch = true
    //         }).catch(function (err) {
    //           msgs.addError(err)
    //         })
    //       } else {
    //         msgs.addError('Favor definir o Grupo Econômico antes de escolher a Empresa')
    //       }
    //       break
    //     case 'parceiro':
    //       if ($scope.filtro.grupoeconomico && $scope.filtro.grupoeconomico._id) {
    //         let url = `${urls.apiUrl}/${tipo}?grupoeconomico=${$scope.filtro.grupoeconomico._id}&filter=${$scope.textFilterSearch}`
    //         $http.get(url).then(function (resp) {
    //           $scope.parceiros = resp.data
    //           $scope.tabSearch = true
    //         }).catch(function (err) {
    //           msgs.addError(err)
    //         })
    //       } else {
    //         msgs.addError('Favor definir o Grupo Econômico antes de escolher o Parceiro')
    //       }
    //       break
    //     case 'vendedor':
    //       if ($scope.filtro.grupoeconomico && $scope.filtro.grupoeconomico._id) {
    //         let url = `${urls.apiUrl}/${tipo}?grupoeconomico=${$scope.filtro.grupoeconomico._id}&filter=${$scope.textFilterSearch}`
    //         $http.get(url).then(function (resp) {
    //           $scope.vendedores = resp.data
    //           $scope.tabSearch = true
    //         }).catch(function (err) {
    //           msgs.addError(err)
    //         })
    //       } else {
    //         msgs.addError('Favor definir o Grupo Econômico antes de escolher o Vendedor')
    //       }
    //       break
    //   }
    // }

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
      tabCanceled = false,
      tabSearch = false
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
      $scope.tabSearch = tabSearch
    }


    $scope.getEntregas()
  }
})()
