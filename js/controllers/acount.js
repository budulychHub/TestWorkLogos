app.controller('acountCtrl', ['$scope','UserService', function($scope,UserService) {
     var vm=this;
     vm.user;
    vm.saves=[];
    vm.catExpence=[];
    vm.change_save={};
    vm.change_catExpence={};
    
    vm.add_save=function(){
        vm.obj={
            _name:vm.add_save_name,
            date_created: $scope.date
        }
        UserService.addSave(vm.obj)
        vm.add_save_name='';
    }
    vm.add_catExpence=function(){
        vm.obj={
            _name:vm.add_catExpence_name,
            date_created: $scope.date
        }
        UserService.addCatExpence(vm.obj)
        vm.add_catExpence_name='';
    }
    vm.remove_save=function(id){
        UserService.removeSave(id)
    }
    vm.remove_catExpence=function(id){
        UserService.removeCatExpence(id)
    }
    vm.edit_save=function(item){
         vm.change_save = item;
    }
     vm.change_save_func = function(){
             UserService.changeSave(vm.change_save)     
    }
     vm.edit_catExpence=function(item){
         vm.change_catExpence = item;
    }
     vm.change_catExpence_func = function(){
             UserService.changeCatExpence(vm.change_catExpence)     
    }
     
    vm.curUser={};
    
     vm.init=function(){
         vm.user=UserService.getUser(function(data){
            vm.user = data;
        }); 
          vm.saves=UserService.getSaves(function(data){
            vm.saves = data;
        });
         vm.catExpence=UserService.getCatExpence(function(data){
            vm.catExpence = data;
        });
         vm.curUser=UserService.getCurUser();
    }
    vm.init()
   
}]);