document.addEventListener('DOMContentLoaded', function() {
	$('.intro__icon--braces').addClass('intro__icon--braces-active');
	$('.intro__icon--sharp').addClass('intro__icon--sharp-active');
	$('.intro__icon--div-one').addClass('intro__icon--div-one-active');
	$('.intro__icon--div-two').addClass('intro__icon--div-two-active');
	$('.intro__icon--quotes').addClass('intro__icon--quotes-active');
});

$(document).ready(function($) {
  $('.header__button').click(function() {
		$('body').addClass('overflow__hidden');	
		$('.popup-fade').fadeIn(0);
		$('.popup').fadeIn(1000);
		return false;
	});

	$('.intro__button').click(function() {
		$('body').addClass('overflow__hidden');	
		$('.popup-fade').fadeIn(0);
		$('.popup').fadeIn(1000);
		return false;
	});

	$('.menu__btn').click(function() {
		$('body').toggleClass('overflow__hidden');
	});
	
	$('.menu__item').click(function() {
		$('body').toggleClass('overflow__hidden');
	});

	$('.skills__button-btn').click(function() {
		$('body').addClass('overflow__hidden');
		$('.popup-fade').fadeIn(0);
		$('.popup').fadeIn(1000);
		return false;
	});

	$('.slider__button-btn').click(function() {
		$('body').addClass('overflow__hidden');
		$('.popup-fade').fadeIn(0);
		$('.popup').fadeIn(1000);
		return false;
	});
	$('.information__button').click(function() {
		$('body').addClass('overflow__hidden');
		$('.popup-fade').fadeIn(0);
		$('.popup').fadeIn(1000);
		return false;
	});

	$('.header__button-mobile').click(function() {
		$('body').addClass('overflow__hidden');
		$('.popup-fade').fadeIn(0);
		$('.popup').fadeIn(1000);
		return false;
	});
  
	$('body').click(function(e) {
		if ($(e.target).closest('.hamburger-menu').length == 0) {
			$('input[type=checkbox]').each(function()
				{ 
        			this.checked = false; 
				});					
		}
	});
	
	$('.popup-close').click(function() {
		$('.popup-fade').fadeOut(0);
		$('.popup').fadeOut(500);
		$('body').removeClass('overflow__hidden');
		return false;
	});
	 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut(0);
			$('.popup').fadeOut(500);
			$('body').removeClass('overflow__hidden');
		}
	});

	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut(0);
			$('.popup').fadeOut(500);
			$('body').removeClass('overflow__hidden');					
		}
	});	
});
$(document).ready(function(){
	function closeMenu() {
		let menuu = $('#menu__toggle').val();	
		if (menuu.length !== 0)	{
			$('input[type=checkbox]').each(function()
				{ 
        			this.checked = false; 
				});
		}			
	}	
	$('.menu__item').on('click', closeMenu);	
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });