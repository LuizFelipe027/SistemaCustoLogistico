(function(){
    angular.module('sistemaCustoLogistico').component('field', {
      bindings: {
        id: '@',
        label: '@',
        type: '@',
        grid: '@',
        model: '=',
        change: '=',
        placeholder: '@',
        readonly: '<',
        mask: '@',
        number_mask: '='
      },
      controller: [
        'gridSystem',
        function(gridSystem) {
          this.$onInit = function() {
            this.gridClasses = gridSystem.toCssClasses(this.grid)
          }
        }
      ],
      template: `
        <div class="{{ $ctrl.gridClasses }}">
          <div class="form-group">
            <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
            <div ng-if="($ctrl.mask=='cnpj')">
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-br-cpfcnpj-mask/>
            </div>
            <div ng-if="($ctrl.mask=='cep')">
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-br-cep-mask/>
            </div>
            <div ng-if="($ctrl.mask=='phone')" class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-phone"></i>
              </div>
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-br-phone-number-mask="areaCode"/>
            </div>
            <div ng-if="($ctrl.mask=='r$')" class="input-group">
              <span class="input-group-addon">{{ $ctrl.mask }}</span>
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-number-mask="4" ui-hide-group-sep style='text-align:right'/>
            </div>
            <div ng-if="(($ctrl.mask=='un'||$ctrl.mask=='dias'||$ctrl.mask=='0-100'))" class="input-group">
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-number-mask="0" ui-hide-group-sep style='text-align:right'/>
               <span class="input-group-addon">{{ $ctrl.mask }}</span>
            </div>
            <div ng-if="($ctrl.mask=='%')" class="input-group">
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-number-mask="2" ui-hide-group-sep style='text-align:right'/>
               <span class="input-group-addon">{{ $ctrl.mask }}</span>
            </div>
            <div ng-if="($ctrl.mask=='int')">
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-number-mask="0" ui-hide-group-sep style='text-align:right'/>
            </div>
            <div ng-if="($ctrl.mask=='date')" class="input-group">
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-date-mask="DD/MM/YYYY"/>
              <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
            </div>
            <div ng-if="($ctrl.mask=='time')" class="input-group">
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly" ui-time-mask/>
              <span class="input-group-addon"><i class="fa fa-clock-o"></i></span>
            </div>
            <div ng-if="(!$ctrl.mask)">
              <input ng-blur="$ctrl.change" ng-model="$ctrl.model" id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" placeholder="{{ $ctrl.placeholder }}" ng-readonly="$ctrl.readonly"/>
            </div>
          </div>
        </div>
      `
    });
  })()
  