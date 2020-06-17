$(document).ready(function($) {
  $('.header__button').click(function() {
		$('body').addClass('overflow__hidden');	
		$('.popup-fade').fadeIn(0);
		return false;
	});
	
	$('.skills__button-btn').click(function() {
		$('body').addClass('overflow__hidden');
		$('.popup-fade').fadeIn(0);
		return false;
	});

	$('.slider__button-btn').click(function() {
		$('body').addClass('overflow__hidden');
		$('.popup-fade').fadeIn(0);
		return false;
	});
	$('.information__button').click(function() {
		$('body').addClass('overflow__hidden');
		$('.popup-fade').fadeIn(0);
		return false;
	});

	$('.header__button-mobile').click(function() {
		$('body').addClass('overflow__hidden');
		$('.popup-fade').fadeIn(0);
		return false;
	});
  
  $('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut(0);
		$('body').removeClass('overflow__hidden');
		return false;
	});        
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut(0);
			$('body').remooveClass('overflow__hidden');
		}
	});

	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut(0);
			$('body').removeClass('overflow__hidden');					
		}
	});	
});