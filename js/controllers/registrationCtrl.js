app.controller('registrationCtrl', ['UserService', function(UserService) {
     var vm=this;
     
    vm.register=function(){
      vm.user = {
          name:vm.firstName,
          sname:vm.lastName,
          login:vm.username,
          password:vm.password
      }
//      console.log(vm.user);
      vm.firstName='';
      vm.lastName='';
      vm.username='';
      vm.password='';
        UserService.registration(vm.user)
    }
    
     vm.init=function(){
          
    }
    vm.init()
   
}]);