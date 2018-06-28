app.controller('loginCtrl', ['UserService', function(UserService) {
     var vm=this;
     
    vm.log=function(){
       vm.user = {
            login: vm.username,
            password: vm.password
        };
         vm.username='';
         vm.password='';
//        console.log(vm.user)
        
        UserService.logIn(vm.user, function(data){  
        });
    }
    
     vm.init=function(){
          
    }
    vm.init()
   
}]);