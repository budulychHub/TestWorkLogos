app.filter('CatFilter',function(){
    return function(arg,value){
        if(!value){
            return arg;
        }
       return arg.filter(function(el){
          if( el.idCateg==value){
              return true;
          }
           return false;
       })
    }
})