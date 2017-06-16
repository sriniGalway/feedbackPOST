$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // get the form data
	var formData = {
            'name'              : document.getElementById("name").value,
            'last_name'         : document.getElementById("lname").value,
            'email'    		: document.getElementById("email").value,
	    'phone_number'      : document.getElementById("phone").value,
	    'Feedback'		: document.getElementById("feedback").value
        };

        // process the form
        $.ajax({
            type        : 'POST', // using the POST HTTP request
            url         : 'http://private-e2353-js8.apiary-mock.com/posttoform', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console to check the POST response
                console.log(data); 
		
		// here we will handle errors and validation messages
        	if ( ! data.success) {
		  // ALL GOOD! just show the success message!
                  $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                  // after form submission, we will reload the form
                  window.location.reload()
		  alert('success'); // success message
		}
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
