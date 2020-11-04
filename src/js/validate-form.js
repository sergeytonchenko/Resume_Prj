export const valid = $('#contact-form').validate({ 
        debug: false,               
        validClass: "success",                    
        rules: {
            name: {
                required: true,
                minlength: 4
            },                     
            user_email: {
                required: true,
                email: true,
            },
            message: {
                required: true,
                minlength: 6,
            }
        },
        messages: {            
            name: {
                minlength:'Поле должно содержать не менее 4 символов',
                required: 'Поле должно быть заполнено'
            },            
            user_email: {
                email:'Введите корректный e-mail',
                required: 'Поле должно быть заполнено'
            },
            message: {
                required: 'Поле должно быть заполнено',
                minlength:'Поле должно содержать не менее 6 символов',
            }                        
        },                    
        success: "valid",                
        submitHandler: function() {
            form.submit();               
        }       
    })

