(function(){
  angular.module('sistemaCustoLogistico').factory('msgs', [
    'toastr',
    MsgsFactory
  ])

  function MsgsFactory(toastr) {
    function addSuccess(msgs) {
      addMsg(msgs, 'Sucesso', 'success')
    }

    function addError(msgs) {
      //verifica se existe mensagem de erro
      msgs = msgs.data || msgs
      //verifica se existe o objeto
      if (msgs) {
        if (msgs.errors) {
          addMsg(msgs.errors,'Erro','error')
        } else if (msgs.error) {
          addMsg(msgs.error,'Erro','error')
        } else {
          addMsg(msgs,'Erro','error')
        }
      }
    }

    function addInfo(msgs) {
      addMsg(msgs, 'Info', 'info')
    }

    function addWarning(msgs) {
      addMsg(msgs, 'Atenção', 'warning')
    }

    function addMsg(msgs, title, method) {

      if(msgs instanceof Array) {
        msgs.forEach(msg => toastr[method](msg, title))
      } else {
        toastr[method](msgs, title)
      }
    }

    return { addSuccess, addError , addInfo, addWarning}
  }
})()
