app.config(function($routeProvider){
    
    
    $routeProvider
    .when('/home',{
        templateUrl:'templates/home_page.html',
         controller:'homeCtrl',
        controllerAs:'home'
    })
    .when('/acount',{
        templateUrl:'templates/acount.html',
         controller:'acountCtrl',
        controllerAs:'acount'
    })
    .when('/history',{
        templateUrl:'templates/history.html',
         controller:'historyCtrl',
        controllerAs:'history'
    })
    .when('/statistic',{
        templateUrl:'templates/statistic.html',
         controller:'statisticCtrl',
        controllerAs:'statistic'
    })
    .when('/login',{
        templateUrl:'templates/login.html',
         controller:'loginCtrl',
        controllerAs:'log'
    })
    .when('/registration',{
        templateUrl:'templates/registration.html',
         controller:'registrationCtrl',
        controllerAs:'registration'
    })
    
    .otherwise({
        redirectTo:'/home'
    })
})