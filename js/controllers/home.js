app.controller('homeCtrl', ['$scope','$rootScope','UserService', function($scope,$rootScope,UserService) {
     var vm=this;
//    console.log($scope.date)
    vm.close=function(){
        $parentNode=false;
    }
     
    vm.saves=[];
    vm.catExpence=[];
    vm.sources=[];
    
      vm.save_id;
      vm.source_id;
    vm.changedSave=function(item){
    vm.save_id=item.id;
    } 
     vm.changedSource=function(item){
    vm.source_id=item.id;
    }     
    vm.addIncome=function(){
       vm.newIncome={
           save_id: vm.save_id,
           source_id: vm.source_id,
           sum_income: vm.sum_income,
           income_comment: vm.income_comment,
           date_created: $scope.date
       }
       UserService.add_income(vm.newIncome);
        vm.sum_income='';
        vm.income_comment=''; 
    }
    
    vm.catExpenceId;
    vm.save_catExpence=function(id){
        vm.catExpenceId = id;
    }
    vm.save_id_expence;
    vm.changedSaveExpence=function(item){
        vm.save_id_expence=item.id;
    }
    vm.addExpence=function(){
        vm.newExpence={
            save_id: vm.save_id_expence,
            sum_expence: vm.sum_expence,
            expence_comment: vm.description_expence,
            catExpenceId: vm.catExpenceId,
            date_created: $scope.date
        }
        UserService.add_expence(vm.newExpence);
        vm.sum_expence='';
        vm.description_expence='';
    }
    
     vm.init=function(){
          vm.saves=UserService.getSaves(function(data){
            vm.saves = data;
        });
         vm.catExpence=UserService.getCatExpence(function(data){
            vm.catExpence = data;
        });
         vm.totalBudget=UserService.getTotalBudget(function(data){
            vm.totalBudget = data;
        });
         vm.sources=UserService.getSources(function(data){
            vm.sources = data;
        });
    }
    vm.init()
   
}]);