(function() {
  angular.module('primeiraApp').controller('BillingCycleCtrl', [
    '$http',
    BillingCycleController
  ])

  function BillingCycleController($http) {
    const vm = this

    vm.create = function() {
      const url ='http://localhost:3003/api/billingCycles'
      $http.post(url, wm.billingCycle).succes(function(response) {
        vm.billingCycle = {}
        console.log('Sucesso!')
      })
    }
  }

})()