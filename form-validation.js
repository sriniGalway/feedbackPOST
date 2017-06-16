function formValidation()  
{  
var name = document.processfeedback.name;  
var last_name = document.processfeedback.last_name;
var email = document.processfeedback.email;  
var phone = document.processfeedback.phone;  
var feedback = document.processfeedback.feedback; 
if(allLetter_name(name))  
{
if(allLetter_lname(last_name))
{  
if(ValidateEmail(email))
{
if(allnumeric(phone))  
{   
}  
}  
}
}  
return false;  
}
function allLetter_name(name)  
{   
var letters = /^[A-Za-z]+$/;  
if(name.value.match(letters))  
{  
return true;  
}
else if (name.value == '')
{
alert("First name cannot be empty");
name.focus(); 
return false;
} 
else  
{  
alert('First Name must have alphabet characters only');  
return false;  
}  
}

function allLetter_lname(last_name) 
{   
var letters = /^[A-Za-z]+$/;  
if(last_name.value.match(letters))   
{  
return true;  
}  
else if (last_name.value == '')
{
alert("Last name cannot be empty");
last_name.focus(); 
return false;
}
else  
{  
alert('Last Name must have alphabet characters only');      
return false;
}
}

function ValidateEmail(email)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(email.value.match(mailformat))  
{  
return true;  
}
else if (email.value == '')
{
alert("e-mail address cannot be empty");
email.focus();
return false;
}
else  
{  
alert("The email address you have looks invalid!");  
email.focus();  
return false;  
}  
}  
  
function allnumeric(phone)  
{   
var numbers = /^[0-9]+$/;  
if(phone.value.match(numbers))  
{  
alert('Form Succesfully Submitted');
return true;
}
else if (phone.value == '')
{
alert("Phone Number cannot be empty");
phone.focus();
return false;
}
else  
{  
alert('Phone Number must have numeric characters only');  
phone.focus();  
return false;  
}
} 
