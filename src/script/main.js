$(document).ready(function(){

	var $avisme = $('.avise-me'),
		$pageHomeAction = $('.page-home_action'),
		$form = $avisme.find('form');


	$avisme.find('button').click(function(){
		if (!$pageHomeAction.hasClass('form-active')) {
			$pageHomeAction.addClass('form-active');
			return false;
		}
	});

	$avisme.find('.close').click(function(){
		$pageHomeAction.removeClass('form-active');
	});




	function register($form) {
		console.log('função');
	    $.ajax({
	        type: $form.attr('method'),
	        url: $form.attr('action'),
	        data: $form.serialize(),
	        cache       : false,
	        dataType    : 'json',
	        contentType: "application/json; charset=utf-8",
	        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
	        success     : function(data) {
	            if (data.result != "success") {
	            	console.log('sucesso');
	                // Something went wrong, do something to notify the user. maybe alert(data.msg);
	            } else {
	                // It worked, carry on...
	            }
	        }
	    });
	}

});
