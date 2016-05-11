(function($){
    
    getProducts = function(){
        
        $.ajax({
            url : '../Data/Products.json',
            type : 'GET',
            success : function(){
                
            },
            datatype : 'json'
        });
    };
    
    
})(jQuery)