(function(){
    angular.module('sistemaCustoLogistico').controller('UsuarioCtrl', [
      '$scope',
      '$http',
      '$location',
      'msgs',
      'tabs',
      'consts',
      'urls',
      'auth',
      'formatField',
      UsuarioController
    ])
  
    function UsuarioController($scope, $http, $location, msgs, tabs, consts, urls, auth, formatField) {
  
      $scope.page = 1
      $scope.filter = ''
      $scope.cbAtivo = consts.cbSimNao
  
      $scope.cbStatus = [ {codigo:'ativo',nome:'Ativo',cor:"green"},
                          {codigo:'inativo',nome:'Inativo',cor:"red"}]
  
      $scope.cbItensPagina = [  {codigo:'25', nome:'25 Itens'},
                                {codigo:'50', nome:'50 Itens'},
                                {codigo:'75', nome:'75 Itens'},
                                {codigo:'100', nome:'100 Itens'}]
  
      $scope.cbRotina = [ {codigo:'dashboard', nome: 'Dashboard'},
                          {codigo:'cockpit', nome: 'Cockpit'},
                          {codigo:'integracao', nome: 'Integração'},
                          {codigo:'automacao', nome: 'Automação'},
                          {codigo:'grupoeconomico', nome: 'Grupo econômico'},
                          {codigo:'usuario', nome: 'Usuário'},
                          {codigo:'empresa', nome: 'Empresa'},
                          {codigo:'parametro', nome: 'Parâmetro'},
                          {codigo:'condicaopagamento',nome:'Condição de Pagamento'},
                          {codigo:'operacao',nome:'Operação'},
                          {codigo:'comprador', nome: 'Comprador'},
                          {codigo:'fornecedor', nome: 'Fornecedor'},
                          {codigo:'transportadora', nome: 'Transportadora'},
                          {codigo:'familia', nome: 'Família'},
                          {codigo:'grupo', nome: 'Grupo'},
                          {codigo:'agrupador', nome: 'Agrupador'},
                          {codigo:'marca', nome: 'Marca'},
                          {codigo:'produto', nome: 'Produto'},
                          {codigo:'produtoempresa', nome: 'Produto x Empresa'},
                          {codigo:'produtofornecedor', nome: 'Produto x Fornecedor'},
                          {codigo:'codigorepositor', nome: 'Código Repositor'},
                          {codigo:'demanda', nome: 'Demanda'},
                          {codigo:'compra', nome: 'Compra'},
                          {codigo:'cotacao', nome: 'Cotação'},
                          {codigo:'oportunidade', nome: 'Oportunidade'},
                          {codigo:'reposicao', nome: 'Reposição'},
                          {codigo:'saida', nome: 'Saida'},
                        ]
  
      $scope.cbFollowUp = [
                            {codigo: 'geral', nome: 'Geral'},
                            {codigo: 'comprador', nome: 'Comprador'},
                            {codigo: 'nao', nome: 'Não'},
                          ]
  
      $scope.buscaIndex = function(objeto,valor) {
        let id = objeto.map(function(e) { return e.codigo; })
        let pos = id.indexOf(valor)
        return pos
      }
  
      $scope.filterBrowse = function(filter) {
        //retira caracteres invalidos
        filter = filter.replaceAll('/',' ')
        //pagina 1
        $scope.page = 1
        if (filter) {
          $scope.filter = filter
        } else {
          $scope.filter = ''
        }
        $scope.getUsuarios()
      }
  
      $scope.showPrevPag = function() {
        if ($scope.page != 1) {
          $scope.page--
          $scope.getUsuarios()
        }
      }
  
      $scope.showNextPag = function() {
        $scope.page++
        $scope.getUsuarios()
      }
  
      $scope.formatDateTime = function(datetime) {
        return formatField.formatDateTime(datetime)
      }
  
      $scope.formatCNPJCPF = function(codigo) {
        return formatField.formatCNPJCPF(codigo)
      }
  
      $scope.getUsuarios = function() {
        const page = $scope.page || 1
        const limit = $scope.itensPagina
        const skip = (page - 1) * limit
        const url = `${urls.apiUrl}/usuario?skip=${skip}&limit=${limit}&filter=${$scope.filter}`
        $http.get(url).then(function(resp) {
          $scope.usuarios = resp.data
          $scope.usuario = {}
          tabs.show($scope, {tabList: true})
        }).catch(function(error) {
          msgs.addError(error)
        })
      }
  
      $scope.showTabView = function(usuario) {
        if ($scope.acesso && $scope.acesso.view && $scope.acesso.view == 'sim') {
          initUsuario(usuario)
          tabs.show($scope, {tabView: true})
        } else {
          msgs.addError('Usuário sem acesso a rotina!')
        }
      }
  
      $scope.showTabCreate = function() {
        if ($scope.acesso && $scope.acesso.create && $scope.acesso.create == 'sim') {
          initUsuario()
          tabs.show($scope, {tabCreate: true})
        } else {
          msgs.addError('Usuário sem acesso a rotina!')
        }
      }
  
      $scope.showTabUpdate = function(usuario) {
        if ($scope.acesso && $scope.acesso.update && $scope.acesso.update == 'sim') {
          initUsuario(usuario)
          tabs.show($scope, {tabUpdate: true})
        } else {
          msgs.addError('Usuário sem acesso a rotina!')
        }
      }
  
      $scope.showTabDelete = function(usuario) {
        if ($scope.acesso && $scope.acesso.delete && $scope.acesso.delete == 'sim') {
          initUsuario(usuario)
          tabs.show($scope, {tabDelete: true})
        } else {
          msgs.addError('Usuário sem acesso a rotina!')
        }
      }
  
      $scope.showTabImport = function(event) {
        if ($scope.acesso && $scope.acesso.import && $scope.acesso.import == 'sim') {
          tabs.show($scope, {tabImport: true})
        } else {
          msgs.addError('Usuário sem acesso a rotina!')
        }
      }
  
      $scope.showTabExport = function() {
        if ($scope.acesso && $scope.acesso.export && $scope.acesso.export == 'sim') {
          $scope.usuario = {}
          tabs.show($scope, {tabExport: true})
        } else {
          msgs.addError('Usuário sem acesso a rotina!')
        }
      }
  
      $scope.cancel = function() {
        tabs.show($scope, {tabList: true})
        $scope.usuario = {}
      }
  
      $scope.createUsuario = function() {
        const url = `${urls.apiUrl}/usuario`;
        $http.post(url, $scope.usuario).then(function(response) {
          $scope.usuario = {}
          $scope.getUsuarios()
          msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(error) {
          msgs.addError(error)
        })
      }
  
      $scope.verificaoEmail = function() {
        const url = `${urls.apiUrl}/usuario/verificaoemail`;
        $http.post(url,$scope.usuario).then(function(resp) {
          //atualiza o objeto do usuario
          $scope.usuario = resp.data
          //muda o tab updade
          tabs.show($scope,{tabUpdate: true})
          //caso não tenha codigoEmailVerificado, mostra erro
          if ($scope.usuario.codigoEmailVerificado) {
            //manda mensagem de ok
            msgs.addSuccess('Operação realizada com sucesso!')
          } else {
            //manda mensagem de ok
            msgs.addError('Erro ao verificar o Email!')
          }
        }).catch(function(error) {
          msgs.addError(error)
        })
      }
  
      $scope.exportUsuario = function() {
  
        $scope.msgLoading = 'Exportando lista de Usuários'
        $scope.tabLoading = true
  
        const url = `${urls.apiUrl}/usuario/export`;
        $http.post(url, $scope.usuario).then(function(response) {
  
          var temp = 'data:application/vnd.ms-excel;base64,'+encodeURIComponent(response.data);
          var download = document.createElement('a');
          download.href = temp;
          download.download = 'Usuários.xlsx';
          document.body.appendChild(download);
          download.click();
          document.body.removeChild(download);
  
          $scope.tabLoading = false
  
          $scope.usuario = {}
          $scope.getUsuarios()
  
        }).catch(function(error) {
          $scope.tabLoading = false
          msgs.addError(error)
        })
      }
  
      $scope.updateUsuario = function() {
        const url = `${urls.apiUrl}/usuario/${$scope.usuario._id}`
        $http.put(url, $scope.usuario).then(function(response) {
          $scope.usuario = {}
          $scope.getUsuarios()
          tabs.show($scope, {tabList: true})
          msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(error) {
          msgs.addError(error)
        })
      }
  
      $scope.deleteUsuario = function() {
        const url = `${urls.apiUrl}/usuario/${$scope.usuario._id}`
        $http.delete(url, $scope.usuario).then(function(response) {
           $scope.usuario = {}
           $scope.getUsuarios()
           tabs.show($scope, {tabList: true})
           msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(error) {
           msgs.addError(error)
        })
      }
  
      var initUsuario = function(usuario) {
  
        if (usuario) {
          const url = `${urls.apiUrl}/usuario/id/${usuario._id}`
          $http.get(url).then(function(resp) {
            $scope.usuario = resp.data
            //inclui escopo dos acessos a lista
            initAcessos()
            initGruposEconomicos()
            initEmpresas()
          }).catch(function(error) {
            msgs.addError(error)
          })
        } else {
          $scope.usuario = {}
          initAcessos()
          initGruposEconomicos()
          initEmpresas()
        }
  
      }
  
      $scope.addAcesso = function(index) {
        $scope.usuario.acessos.splice(index + 1, 0, { ativo: 'sim',
                                                      view: 'sim',
                                                      create: 'sim',
                                                      update: 'sim',
                                                      delete: 'sim',
                                                      import: 'sim',
                                                      export: 'sim'})
      }
  
      $scope.cloneAcesso = function(index,acesso) {
        $scope.usuario.acessos.splice(index + 1, 0,{rotina: acesso.rotina,
                                                    ativo: acesso.ativo,
                                                    view: acesso.view,
                                                    create: acesso.create,
                                                    update: acesso.update,
                                                    delete: acesso.delete,
                                                    import: acesso.import,
                                                    export: acesso.export})
      }
  
      $scope.deleteAcesso = function(index) {
        $scope.usuario.acessos.splice(index, 1)
        initAcessos()
      }
  
      $scope.allAcesso = function(index) {
        delete $scope.usuario.acessos
        initAcessos()
      }
  
      var initAcessos = function() {
        if(!$scope.usuario.acessos || !$scope.usuario.acessos.length) {
          //inicia vetor
          $scope.usuario.acessos = []
          //inclui todos acessos
          for (let rotina of $scope.cbRotina) {
            $scope.usuario.acessos.push({rotina: rotina.codigo, ativo: 'sim', view: 'sim',create: 'sim',update: 'sim',delete: 'sim',import: 'sim',export: 'sim'})
          }
        }
      }
      
      $scope.importAvatar = function(event) {
        //variavel reader
        var reader = new FileReader();
        //onload
        reader.onload = function () {
          $scope.usuario.avatar = reader.result
        }
        reader.readAsDataURL(event.target.files[0]);
      }
  
      $scope.search = function(tipo,textFilterSearch) {
        //verifica se o filtro existe
        textFilterSearch = textFilterSearch || ''
        //tratamento tipo
        switch (tipo) {
          case 'usuario':
            var url = `${urls.apiUrl}/${tipo}?filter=${textFilterSearch}`
            $http.get(url).then(function(resp) {
              $scope.usuarios = resp.data
              $scope.typeSearch = tipo
              $scope.tabSearch = true
            }).catch(function(error) {
               msgs.addError(error)
            })
            break
        }
      }
  
      $scope.checkSearch = function(tipo,index) {
        //tratamento tipo
        switch (tipo) {
          case 'usuario':
            //verifica se existe o objeto
            if ($scope.usuarios[index].acessos && $scope.usuarios[index].acessos.length > 0) {
              $scope.usuario.acessos = $scope.usuarios[index].acessos
            }
            //verifica se existe o objeto
            if ($scope.usuarios[index].gruposeconomicos && $scope.usuarios[index].gruposeconomicos.length > 0) {
              $scope.usuario.gruposeconomicos = $scope.usuarios[index].gruposeconomicos
            }
            //verifica se existe o objeto
            if ($scope.usuarios[index].empresas && $scope.usuarios[index].empresas.length > 0) {
              $scope.usuario.empresas = $scope.usuarios[index].empresas
            }
            $scope.tabSearch = false
            break
        }
      }
  
      $scope.eraseSearch = function(tipo) {
        //tratamento tipo
        switch (tipo) {
          case 'usuario':
            $scope.tabSearch = false
            break
        }
      }
  
      $scope.filterSearch = function(tipo,textFilterSearch) {
        //retira caracteres invalidos
        textFilterSearch = textFilterSearch.replaceAll('/',' ')
        //chama o filtro principal
        $scope.search(tipo,textFilterSearch)
      }
  
      $scope.cancelSearch = function(tipo) {
        $scope.tabSearch = false
      }
  
      $scope.getAcesso = function() {
        $scope.acesso = auth.getAcesso('usuario')
        $scope.itensPagina = auth.getItensPagina()
      }
  
      $scope.getAcesso()
      $scope.getUsuarios()
  
    }
  })()
  