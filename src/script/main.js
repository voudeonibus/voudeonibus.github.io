
$(document).ready(function(){


	// para variar
	var $avisme = $('.avise-me'),
		$pageHomeAction = $('.page-home_action'),
		$form = $avisme.find('form'),
		$slideVouagora = $('.mobile-sections_vouagora'),
		$menuBurguer = $('.double-mac_with-bacon'),
		$navSite = $('.nav-site nav'),
		$logoSite = $('.logo-site'),
		$pageOapp = $('.page-oapp');


	if (isMobile) {
		$menuBurguer.click(function(){
			$(this).toggleClass('active');
			$navSite.slideToggle();

		});

		$navSite.on('click', 'a', function(){
			var target = $(this).data('target');

			$('html,body').animate({
	          scrollTop: $(target).offset().top - 56
	        }, 1000);

	        $navSite.slideToggle();
	        $menuBurguer.toggleClass('active');
		});

		$logoSite.click(function(){
			$('html,body').animate({
	          scrollTop: 0
	        }, 1000);

	        $navSite.slideUp();
	        $menuBurguer.removeClass('active');
		});

		$(window).scroll(function(){
			var ws = $(window).scrollTop(),
				of = $pageOapp.offset().top;

			if(ws >= of) {
				$('.nav-site').addClass('fixed');
			} else {
				$('.nav-site').removeClass('fixed');
			}
		});

		
	};

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
