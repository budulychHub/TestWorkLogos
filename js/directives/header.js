app.directive('myHeader',['UserService',function(UserService){
    
    return{
        restrict:'A',
		templateUrl: 'templates/header.html',                                            
		scope: 
        {
			count: '=',
            count2: '=',
            count3: '=',
            count4: '='
		}
        ,
        link:function(scope,element,attrs){
            
        }
    }
}]);