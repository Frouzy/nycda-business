
// Form email validation script  

function val(){
if(frm.email.value=="")
{
	alert("Please enter the email");
	frm.email.focus();	
	return false;
}	
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if (reg.test(frm.email.value) == false) 
{
	alert('Invalid email address');
	frm.email.focus();	
	return false;
}

return true;
}


// Form input validation script 

function checkforblank () {

    if (document.getElementById('Fname').value == "") {
           	alert('Please enter your First Name');
            document.getElementById('Fname').style.borderColor = "red";
            return false; 
            }
}
