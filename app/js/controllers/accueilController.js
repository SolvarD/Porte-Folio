DevDimControllers.controller('accueilController',
  /** @ngInject */
    function (dataFacto) {
		var vm = this;		
        vm.articles = dataFacto;	
});
