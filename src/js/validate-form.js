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
                minlength:'The field must contain at least 4 characters'                
            },            
            user_email: {
                email: 'Please enter a valid e-mail'                
            },
            message: {                
                minlength:'The field must contain at least 6 characters'
            }                        
        },                    
        success: "valid",                
        submitHandler: function() {
            form.submit();               
        }       
    })

