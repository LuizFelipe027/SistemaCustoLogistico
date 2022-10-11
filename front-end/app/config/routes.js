//Jeito que o angular faz a injeção de dependencias
(function(){
angular.module('sistemaCustoLogistico').config([
    '$stateProvider',
    '$urlRouterProvider',
    //'$httpProvider'
    function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider.state('dashboard', {url: "/dashboard",templateUrl: "dashboard/dashboard.html"})
                      .state('usuario', {url: "/usuario", templateUrl: "usuario/tabs.html"})

        //$httpProvider.interceptors.push('handleResponseError')

        //$urlRouterProvider.otherwise('/dashboard')
    }
]) 
})()