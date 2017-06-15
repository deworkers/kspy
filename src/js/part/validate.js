$(document).ready(function() {
    
    $('#subscribe').validate({ 
        rules:{
            email:{
                required: true,
            }
       },

       messages:{
            email:{
                required: "Обязательное поле",
            }
       }
    });

});