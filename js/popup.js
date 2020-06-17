$(document).ready(function(){
     
    function validateNameField() {
        const name = $('.popup-name').val();
        
        if (validateName(name)) {
            $('.popup-error').hide();
            $('.popup-name').removeClass('error');
            return true;
        } else {
            $('.popup-error').show();
            $('.popup-name').addClass('error');
            return false;
        }        
    }

    function validateTelField() {
        const tel = $('.popup-tel').val();
        
        if (validateTel(tel)) {
            $('.popup-error-tel').hide();
            $('.popup-tel').removeClass('error');
            return true;
        } else {
            $('.popup-error-tel').show();
            $('.popup-tel').addClass('error');
            return false;
        }        
    }

    function validateEmailField() {
        const email = $('.popup-email').val();
        
        if (validateEmail(email)) {
            $('.popup-error-email').hide();
            $('.popup-email').removeClass('error');
            return true;
        } else {
            $('.popup-error-email').show();
            $('.popup-email').addClass('error');
            return false;
        }        
    }

    function validateName(name) {
        if (name.length == 0) {
            return false;
        } else {
            let re = /[A-Za-zА-Яа-яЁё0-9!#$%&'*+/=?^_`{|}~-]/;
            return re.test(String(name).toLowerCase());
        }    	
    }

    function validateTel(tel) {
        if (tel.length == 0) {
            return false;
        } else {
            let re = /\+[0-9]\-?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{2}\-?\s?[0-9]{2}/;
            return re.test(String(tel).toLowerCase());
        }    	
    }

    function validateEmail(email) {
        if (email.length == 0) {
            return false;
        } else {
            let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return re.test(String(email).toLowerCase());            
        }        	
    }
    
    
    $('.popup-btn').on('click', function($event)  {
        $event.stopPropagation();
        $event.preventDefault();        
        
        const isNameValid = validateNameField();
        const isTelValid = validateTelField();
        const isEmailValid = validateEmailField();
        
        if (isTelValid && isEmailValid && isNameValid) {
            const $form =  $('#callback-form');                    
                    $.post(
                        $form.attr("action"), 
                        $form.serialize(),                    
                    );
                    $('.popup').hide();
                    $('.popup-welldone').show();

                    function closeForm() {
                        $('.popup-fade').fadeOut(0);
                        $('.popup').show();
                        $('.popup-welldone').hide();
                        $('#callback-form')[0].reset();
                        $('body').removeClass('overflow__hidden');
                        return false;                        
                    }                    
                    setTimeout(closeForm, 2000);            
                    return false;
        } else {
            $('.popup-error').show();
        }
    });

});
