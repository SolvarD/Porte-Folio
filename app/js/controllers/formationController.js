DevDimControllers.controller('formationController',
 /** @ngInject */
function (dataFacto) {
  var vm = this;
  //console.log(dataFacto);
  //dataFacto.formations.success(function (res) {
  //  vm.formations = res;
  //});
  vm.formations = dataFacto;
});