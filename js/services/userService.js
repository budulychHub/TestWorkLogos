app.factory('UserService',['$http','$rootScope','$location', function($http,$rootScope,$location){

    return{
        calcTotalBudget:function(){
            totalBudget=0;
            for (var i in user.saves){
                totalBudget += user.saves[i].balans
            } 
            $rootScope.totalBudget2=totalBudget;
        },
        calcIncomes:function(){
            incomes=0;
            for (var i in user.incomes){
                incomes += user.incomes[i]._sum
            }
            $rootScope.incomes2=incomes;
        },
        calcExpence:function(){
            expence=0;
            for (var i in user.expence){
                expence += user.expence[i]._sum
            }
            $rootScope.expence2=expence;
        },
        calcBalans:function(){
            balans = incomes - expence;
            $rootScope.balans2=balans;
        },
        add_income:function(obj){ 
             var new_income = {
                _sum:obj.sum_income,
                date:obj.date_created,
                sourceId:obj.source_id,
                comments:obj.income_comment,
                 save_id:obj.save_id
            }
            var objIncome = JSON.stringify(new_income);
            console.log(new_income);
            console.log(objIncome);
           return $http.post('http://localhost:8080/addIncome',objIncome).then(function(e){
               if(e.data){
               user.incomes.push(new_income);
             for (var i in user.saves){
                if(user.saves[i].id == obj.save_id){
                    user.saves[i].balans += obj.sum_income
                }
            }
                   incomes=0;
            for (var i in user.incomes){
                incomes += user.incomes[i]._sum
            }
            $rootScope.incomes2=incomes;
                   
                   balans = incomes - expence;
            $rootScope.balans2=balans;
                   
                   totalBudget=0;
            for (var i in user.saves){
                totalBudget += user.saves[i].balans
            } 
            $rootScope.totalBudget2=totalBudget;
           }
           })
           .catch(function(err){
               console.log(err);
           })
        },
        add_expence:function(obj){
            var new_expence = {
                _sum:obj.sum_expence,
                date:obj.date_created,
                catExpId:obj.catExpenceId,
                comments:obj.expence_comment,
                save_id:obj.save_id
            }
            var objExpence = JSON.stringify(new_expence);
            console.log(objExpence);
           return $http.post('http://localhost:8080/addExpence',objExpence).then(function(e){
               if(e.data){
               user.expence.push(new_expence);
             for (var i in user.saves){
                if(user.saves[i].id == obj.save_id){
                    user.saves[i].balans = user.saves[i].balans - obj.sum_expence
                }
            }
                   
                 expence=0;
            for (var i in user.expence){
                expence += user.expence[i]._sum
            }
            $rootScope.expence2=expence;
                   
                      balans = incomes - expence;
            $rootScope.balans2=balans;
                   
                   totalBudget=0;
            for (var i in user.saves){
                totalBudget += user.saves[i].balans
            } 
            $rootScope.totalBudget2=totalBudget;
                   
               }
           })
           .catch(function(err){
               console.log(err);
           })
        },
        getSaves:function(callback){
            return $http.get('http://localhost:8080/getSaves').then(function(e){
                user.saves = e.data;
                 callback(user.saves);
                totalBudget=0;
            for (var i in user.saves){
                totalBudget += user.saves[i].balans
            } 
            $rootScope.totalBudget2=totalBudget;
                 })

        },
        getCatExpence:function(callback){
            return $http.get('http://localhost:8080/getCatExpence').then(function(e){
                user.catExpence = e.data;
                 callback(user.catExpence);
                 })
        },  
        getTotalBudget:function(){
            this.calcTotalBudget();
            return totalBudget
        },
        getIncomes:function(callback){
            return $http.get('http://localhost:8080/getIncomes').then(function(e){
                user.incomes = e.data;
                var date = new Date();
                var date =date.getFullYear() + '-' +  (date.getMonth() + 1);
                for(var i in user.incomes){
                    user.incomes[i]._data = user.incomes[i]._data.slice(0,7)
                    if(user.incomes[i]._data != date){
                        user.incomes.splice(i,1);
                    }
                }
    
                incomes=0;
            for (var i in user.incomes){
                incomes += user.incomes[i]._sum
            }
            $rootScope.incomes2=incomes;
                balans = incomes - expence;
            $rootScope.balans2=balans;
                 })
        },
        getExpence:function(callback){
            return $http.get('http://localhost:8080/getExpence').then(function(e){
                user.expence = e.data;
                var date = new Date();
                var date =date.getFullYear() + '-' +  (date.getMonth() + 1);
                for(var i in user.expence){
                    user.expence[i]._data = user.expence[i]._data.slice(0,7)
                    if(user.expence[i]._data != date){
                        user.expence.splice(i,1);
                    }
                }
                
                expence=0;
            for (var i in user.expence){
                expence += user.expence[i]._sum
            }
            $rootScope.expence2=expence;
                balans = incomes - expence;
            $rootScope.balans2=balans;
                 })
        },
        getBalans:function(){
            this.calcBalans();
            return balans
        },
        getSources:function(callback){
            return $http.get('http://localhost:8080/getSource').then(function(e){
                user.sources = e.data;
                 callback(user.sources);                
                 })
        },
        getUser:function(){
            return user
//            return $http.get('http://localhost:8080/getUser').then(function(e){
//                user = e.data;
//                 callback(user);
//                console.log(user.catExpence)
//                 })
        },
        addSave:function(obj){
           obj.id=user.saves.length+1;
            obj.balans=0;
             var objSave = JSON.stringify(obj);
           return $http.post('http://localhost:8080/addSave',objSave).then(function(e){
                if(e.data){
                  user.saves.push(obj);
                  }
           })
           .catch(function(err){
               console.log(err);
           })    
        },
        addCatExpence:function(obj){
           obj.id=user.catExpence.length+1;
            var objCatExpence = JSON.stringify(obj);
            console.log(obj);
            console.log(objCatExpence);
           return $http.post('http://localhost:8080/addCatExpence',objCatExpence).then(function(e){
               if(e.data){
                  user.catExpence.push(obj);
                  }
           })
           .catch(function(err){
               console.log(err);
           })
        },
        removeSave:function(id){
            return $http.delete('http://localhost:8080/removeSave/'+id).then(function(e){
                if(e.data){
                                for (var i in user.saves){
                                    if(user.saves[i].id == id){
                                        user.saves.splice(i,1);
                                        console.log(user.saves)
                                        }
                                    } 
                }
                        })
                        .catch(function(err){
                        console.log(err);
                        })
        },
        removeCatExpence:function(id){
            return $http.delete('http://localhost:8080/removeCatExpence/'+id).then(function(e){
                            if(e.data){
                                for (var i in user.expence){
                                     if(user.expence[i].catExpId == id){
                                         user.expence.splice(i,1);
                                     }
                                 }
                                for (var i in user.catExpence){
                                     if(user.catExpence[i].id == id){
                                         user.catExpence.splice(i,1);
                                     }
                                 }
                                 expence=0;
            for (var i in user.expence){
                expence += user.expence[i]._sum
            }
            $rootScope.expence2=expence;
                
                balans = incomes - expence;
            $rootScope.balans2=balans;
                            }
                       
                        })
                        .catch(function(err){
                        console.log(err);
                        })
        },
        changeSave:function(item){
            var obj=JSON.stringify(item)
                    return $http.post('http://localhost:8080/changeSave',obj)
                    .then(function(e){
                        for (var i in user.saves){
                               if(user.saves[i].id == item.id){
                                   user.saves.splice(i,1,item);
                               }
                           }
                        
                    })
                    .catch(function(err){
                        console.log(err);
                    })
        },
        changeCatExpence:function(item){
            var obj=JSON.stringify(item)
                    return $http.post('http://localhost:8080/changeCatExpence',obj)
                    .then(function(e){                     
                        for (var i in user.saves){
                               if(user.catExpence[i].id == item.id){
                                   user.catExpence.splice(i,1,item);
                               }
                           }
                        
                    })
                    .catch(function(err){
                        console.log(err);
                    })
        },
        logIn:function(user, callback){
             var obj = JSON.stringify(user);
            return $http.post('http://localhost:8080/login', obj).then(function(e){
                if(e.data){
                    currentUser = e.data;
                     console.log(currentUser);
                    callback(currentUser);
                }
//                callback(false);
            })
            .catch(function(err){
                if(err)console.log(err);
            })
        },
        registration:function(user){
               var obj = JSON.stringify(user);
           return $http.post('http://localhost:8080/registration',obj).then(function(e){
               currentUser = e.data;
               console.log(currentUser);
               $location.path('/home');
           })
           .catch(function(err){
               console.log(err);
           })
        },
         getCurUser:function(){
            return currentUser;
        }
       
        
    
    }
}]);
var currentUser = null;
var totalBudget = 0;
var incomes = 0;
var expence = 0;
var balans = 0;
var user={
    id:1,
    name:'user_name',
    sname:'user_sname',
    login:'login',
    password:'pass',
    saves:[
//        {
//            name:'cash',
//            balans:2000,
//            cdate:'2017-10-25',
//            id:1
//        },
//        {
//            name:'visa',
//            balans:2000,
//            cdate:'2017-10-25',
//            id:2
//        },
//        {
//            name:'freelance',
//            balans:2000,
//            cdate:'2017-10-25',
//            id:3
//        }
    ],
    sources:[
        {
            name:'work',
            id:1
        },
        {
            name:'present',
            id:2
        }
    ],
    catExpence:[
//        {
//            name:'car',
//            id:1
//        },
//        {
//            name:'house',
//            id:2
//        }
    ],
    expence:[
//        {
//            sum:200,
//            date:'2017-12-11',
//            id:1,
//            catExpId:1,
//            comments:'some text'
//        },
//        {
//            sum:500,
//            date:'2017-12-11',
//            id:2,
//            catExpId:1,
//            comments:'some text'
//        }
    ],
    incomes:[
//        {
//            sum:300,
//            date:'2017-12-11',
//            sourceId:1,
//            comments:'some text'
//        },
//        {
//            sum:500,
//            date:'2017-12-11',
//            sourceId:1,
//            comments:'some text'
//        }
    ]
    
}