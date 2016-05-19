$( document ).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: "https://formspree.io/kevin.caldwell@students.makeschool.com",
            method: "POST",
            data: {
                email: $("#js-email").val(),
                message: $("#js-message").val()
            },
            dataType: "json"
        }).error(function(jqXHR, status, error){
            alert("Uh oh, something went wrong. Please try again.");
        }).success(function(data, status, jqXHR){
            alert("Thank you. Your message has been sent.");
            $('form').find("#js-email", "#js-message").val("");
        });
    });
});
