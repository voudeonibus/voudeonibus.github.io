$(document).ready(function(){

	var $avisme = $('.avise-me'),
		$pageHomeAction = $('.page-home_action');

	$avisme.find('button').click(function(){
		$pageHomeAction.addClass('form-active');

		return false;
	});

});

$(window).load(function(){
	$.getScript('src/build/social.js', function() {});
});