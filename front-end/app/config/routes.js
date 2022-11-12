//Jeito que o angular faz a injeção de dependencias
(function(){
angular.module('sistemaCustoLogistico').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {url: "/dashboard",templateUrl: "dashboard/dashboard.html"})
                      .state('usuario', {url: "/usuario", templateUrl: "usuario/tabs.html"})
                      .state('entregas', {url: "/entregas", templateUrl: "entregas/browse.html"})

        //$urlRouterProvider.otherwise('/dashboard')
    }
]) 
})()