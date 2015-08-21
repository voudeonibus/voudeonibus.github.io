
$(document).ready(function(){


	// para variar
	var $avisme = $('.avise-me'),
		$pageHomeAction = $('.page-home_action'),
		$form = $avisme.find('form'),
		$slideVouagora = $('.mobile-sections_vouagora');



	/**
	*
	* avise me
	*
	**/
	
	$avisme.find('button').click(function(){
		if (!$pageHomeAction.hasClass('form-active')) {
			$pageHomeAction.addClass('form-active');

			ga('send', 'event', 'download', 'ios-avise-me', 'avise-me');
			return false;
		}
	});

	$avisme.find('.close').click(function(){
		$pageHomeAction.removeClass('form-active');
		ga('send', 'event', 'download', 'ios-avise-me', 'close');
	});


	/**
	*
	* load images mobile
	*
	**/
	if(isMobile) {
		// lazy load
		$('[data-src]').each(function(){
			var img = $(this).data('src');
			$(this).attr('src', img);	
		});
	}



	/**
	*
	* page vou agora
	*
	**/
	if (isMobile) {
		$slideVouagora.owlCarousel({
			stagePadding: 50,
			items: 1,
			afterAction : function() {
				var current = this.currentItem+1;
				$('.dots a:nth-child('+current+')').addClass('active').siblings().removeClass('active');
			}
		});
	};

	$('.dots').on('click', 'a', function(){
		console.log('cu');
		var target = $(this).index();
		$slideVouagora.trigger('owl.goTo', target);
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	

});
