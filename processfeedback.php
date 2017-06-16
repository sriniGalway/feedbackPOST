<?php 
include("processfeedback.php"); 
?>

$errors         = array();      // array to hold validation errors
$data           = array();      // array to pass back data

// validate the variables ======================================================
    // if any of these variables don't exist, add an error to our $errors array

    if (empty($_POST['first_name']))
        $errors['name'] = 'First Name is required.';

    if (empty($_POST['last_name']))
	$errors['name'] = 'last Name is required.';

    if (empty($_POST['email']))
        $errors['email'] = 'Email is required.';
 
    if (empty($_POST['phone_number']))
        $errors['phone_number] = 'Phone Number is required.';

    if (empty($_POST['feedback']))
        $errors['feedback'] = 'feedback is required.';

// return a response ===========================================================

    // if there are any errors in our errors array, return a success boolean of false
    if ( ! empty($errors)) {

        // if there are items in our errors array, return those errors
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {

        // if there are no errors process our form, then return a message

        // DO ALL YOUR FORM PROCESSING HERE
        // THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)

        // show a message of success and provide a true success variable
        $data['success'] = true;
        $data['message'] = 'Success!';
    }

    // return all our data to an AJAX call
    echo json_encode($data);

