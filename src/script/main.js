$(document).ready(function(){

	var $avisme = $('.avise-me'),
		$pageHomeAction = $('.page-home_action'),
		$form = $avisme.find('form');


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

});
