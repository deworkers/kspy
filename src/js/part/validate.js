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

    $('#order-form').validate({ 
        rules:{
            name:{
                required: true,
            },
            email:{
                required: true,
            },
            them:{
                required: true,
            },
            mesage:{
                required: true,
            }
       },

       messages:{
            name:{
                required: "Обязательное поле",
            },
            email:{
                required: "Обязательное поле",
            },
            them:{
                required: "Обязательное поле",
            },
            mesage:{
                required: "Обязательное поле",
            }
       }
    });

});