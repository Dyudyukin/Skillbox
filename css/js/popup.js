$(document).ready(function(){

	function callBack() {

		let name = $('.popup-name').val(),
			tel = $('.popup-tel').val(),
            email = $('.popup-email').val();
	
		if (name.length !== 0 || tel.length !== 0 || email.length !== 0)	{

			$('.popup-name').removeClass('error');
			$('.popup-tel').removeClass('error');
			$('.popup-email').removeClass('error');
            $('.popup-error').hide();
            
            $("form").submit(function(){
                
                let $form = $(this);
                 
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
                    
                }
                
                setTimeout(closeForm, 2000);                
        
                return false;
            });
			
			
			name = $('.popup-name').val(),
			tel = $('.popup-tel').val(),
            email = $('.popup-email').val();

		} else {

            $('.popup-error').show();
			$('.popup-name').addClass('error');
			$('.popup-tel').addClass('error');
            $('.popup-email').addClass('error');

            return false;
            
			
		}
	
	}
	
	$('.popup-btn').on('click', callBack);
});