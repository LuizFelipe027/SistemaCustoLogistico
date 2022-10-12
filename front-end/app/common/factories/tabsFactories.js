(function(){
    angular.module('sistemaCustoLogistico').factory('tabs', [ function() {
  
       function show(owner, {
          tabList = false,
          tabCreate = false,
          tabView = false,
          tabUpdate = false,
          tabDelete = false,
         //  tabSearch = false,
         //  tabExport = false,
         //  tabImport = false,
          tabLoading = false,
         //  tabWizard = false,
         //  tabErrorLoading = false
       }) {
          owner.tabList = tabList
          owner.tabCreate = tabCreate
          owner.tabView = tabView
          owner.tabUpdate = tabUpdate
          owner.tabDelete = tabDelete
         //  owner.tabSearch = tabSearch
         //  owner.tabExport = tabExport
         //  owner.tabImport = tabImport
          owner.tabLoading = tabLoading
         //  owner.tabWizard = tabWizard
         //  owner.tabErrorLoading = tabErrorLoading
       }
  
       return { show }
  
    }])
  })()
  