$(document).ready(function(){


	/**
	*
	* avise-me
	*
	**/
	
	var $avisme = $('.avise-me'),
		$pageHomeAction = $('.page-home_action');

	$avisme.find('button').click(function(){
		$pageHomeAction.addClass('form-active');

		return false;
	});



	// lazy load
	$('[data-src]').each(function(){
		var img = $(this).data('src');
		$(this).attr('src', img);	
	});

});
