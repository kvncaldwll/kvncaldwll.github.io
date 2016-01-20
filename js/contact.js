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
			alert('Something went wrong! Try again.');
		}). success(function(data, status) {
			alert('Thanks!');
			$('form').find('.email, .message').val('');
		});
	});
});