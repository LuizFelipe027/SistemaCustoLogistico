(function(){
  angular.module('sistemaCustoLogistico').component('combobox', {
    bindings: {
      id: '@',
      label: '@',
      type: '@',
      grid: '@',
      model: '=',
      change: '=',
      options: '=',
      placeholder: '@',
      readonly: '<'
    },
    controller: [
      'gridSystem',
      function(gridSystem) {
        this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
      }
    ],
    template: `
     <div class="{{ $ctrl.gridClasses }}">
       <div class="form-group">
        <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
        <select ng-model="$ctrl.model" name="{{ $ctrl.id }}" id="{{ $ctrl.id }}" class="form-control" disabled ng-if="$ctrl.readonly">
          <option ng-repeat="option in $ctrl.options" value="{{option.codigo}}">{{option.nome}}</option>
        </select>
        <select ng-change="$ctrl.change" ng-model="$ctrl.model" name="{{ $ctrl.id }}" id="{{ $ctrl.id }}" class="form-control" ng-if="!$ctrl.readonly">
          <option ng-repeat="option in $ctrl.options" value="{{option.codigo}}">{{option.nome}}</option>
        </select>
       </div>
     </div>
    `
  });
})()
