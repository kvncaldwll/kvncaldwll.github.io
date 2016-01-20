$( document ).ready(function() {
	$('form').submit(function(e) {
		e.preventDefault();

		$.ajax({
			url: "http://formspree.io/kevin.caldwell@students.makeschool.com", 
			method: "POST",
			data: {
			email: $('.email').val(),
			message: $('.message').val()
			},
			dataType: "json"
		}).error(function(x, status, error){
			alert('Uh oh, something went wrong. Please try again.');
		}). success(function(data, status) {
			alert('Thank you for your message. Kitty will get back to you soon.');
			$('form').find('.email, .message').val('');
		});
	});
});