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
      //$scope.cbAtivo = consts.cbSimNao
  
      $scope.cbStatus = [ {codigo:'ativo',nome:'Ativo',cor:"green"},
                          {codigo:'inativo',nome:'Inativo',cor:"red"}]
  
      $scope.cbItensPagina = [  {codigo:'25', nome:'25 Itens'},
                                {codigo:'50', nome:'50 Itens'},
                                {codigo:'75', nome:'75 Itens'},
                                {codigo:'100', nome:'100 Itens'}]
  
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
        console.log('opa');
        //const page = $scope.page || 1
        //const limit = $scope.itensPagina
        //const skip = (page - 1) * limit
        // const url = `${urls.apiUrl}/usuario?skip=${skip}&limit=${limit}&filter=${$scope.filter}`
        const url = `localhost:5000/usuario/List`
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
        console.log('entrou');
          initUsuario()
          tabs.show($scope, {tabCreate: true})
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
        //const url = `${urls.apiUrl}/usuario`;
        const url = `localhost:5000/usuario/create`
        $http.post(url, $scope.usuario).then(function(response) {
          $scope.usuario = {}
          $scope.getUsuarios()
          msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function(error) {
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
  
      const initUsuario = function(usuario) {
  
        if (usuario) {
          // const url = `${urls.apiUrl}/usuario/id/${usuario._id}`
          const url = ''

          $http.get(url).then(function(resp) {
            $scope.usuario = resp.data
          }).catch(function(error) {
            msgs.addError(error)
          })
        } else {
          $scope.usuario = {}
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
  
      $scope.getUsuarios()
  
    }
  })()
  