(function() {
  
  // Usado para esconder e exibir as abas conforme seleção
  angular.module('primeiraApp').factory('tabs', [ TabsFactory ])

  function TabsFactory() {

    function show(owner, {
      tabList = false,
      tabCreate = false,
      tabUpdate = false,
      tabDelete = false
    }) {
      owner.tabList = tabList
      owner.tabUpdate = tabUpdate
      owner.tabDelete = tabDelete
      owner.tabCreate = tabCreate
    }

    return { show }

  }

})()