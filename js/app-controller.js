app.controller('mainCtrl',['$scope','$rootScope','UserService',function($scope,$rootScope,UserService){
    var vm=this;
   $scope.date = new Date();
 $scope.date =($scope.date.getMonth() + 1) + '-' + $scope.date.getDate() + '-' +  $scope.date.getFullYear();
    vm.totalBudget;
    vm.incomes;
    vm.expence;
    vm.balans;
    
    $rootScope.totalBudget2;
    $rootScope.incomes2;
    $rootScope.expence2;
    $rootScope.balans2;
    vm.totalBudget = $rootScope.totalBudget2;
    vm.incomes = $rootScope.incomes2;
    vm.expence = $rootScope.expence2;
    vm.balans = $rootScope.balans2;
    
        
    vm.init=function(){
        vm.totalBudget=UserService.getTotalBudget();
        vm.incomes=UserService.getIncomes();
        vm.expence=UserService.getExpence();
        vm.balans=UserService.getBalans();
	}
	vm.init();
}])