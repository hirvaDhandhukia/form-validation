$(document).ready(function() {

    $('#fnameError').hide();
    $('#lnameError').hide();
    $('#emailError').hide();
    $('#numError').hide();
    $('#passError').hide();
    $('#cpassError').hide();

    // errors are all false rn
    const error_fname = false;
    const error_lname = false;
    const error_email = false;
    const error_number = false;
    const error_pass = false;
    const error_cpass = false;

    $('#fname').focusout(function() {
        check_fname();
    });
    $('#lname').focusout(function() {
        check_lname();
    });
    $('#email').focusout(function() {
        check_email();
    });
    $('#num').focusout(function() {
        check_num();
    });
    $('#password').focusout(function() {
        check_pass();
    });
    $('#cpassword').focusout(function() {
        check_cpass();
    });
    
    function check_fname() {
        var regex = /^[a-zA-Z]*$/;
        var fnameValue = $('#fname').val();
        if(regex.test(fnameValue) && fnameValue !== '') {
            $('#fnameError').hide();
            $('#fname').css("border-bottom", "2px solid #34F458");
        } else {
            $('#fnameError').html("Name should contain only characters");
            $('#fnameError').show();
            $("#fname").css("border-bottom","2px solid #F90A0A");
            error_fname = true;
        }
    }

    function check_lname() {
        var regex = /^[a-zA-Z]*$/;
        var lnameValue = $('#lname').val();
        if(regex.test(lnameValue) && lnameValue !== '') {
            $('#lnameError').hide();
            $('#lname').css("border-bottom", "2px solid #34F458");
        } else {
            $('#lnameError').html("Name should contain only characters");
            $('#lnameError').show();
            $("#lname").css("border-bottom","2px solid #F90A0A");
            error_lname = true;
        }
    }

    function check_email() {
        var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailValue = $('#email').val();
        if(regex.test(emailValue) && emailValue !== '') {
            $("#emailError").hide();
               $("#email").css("border-bottom","2px solid #34F458");
        } else {
            $("#emailError").html("Invalid Email");
            $("#emailError").show();
            $("#form_email").css("border-bottom","2px solid #F90A0A");
            error_email = true;
        }
    }

    function check_num() {
        var numValue = $('#num').val();
        if(numValue !== '' && numValue.length == 10) {
            $('#numError').hide();
            $('#num').css("border-bottom", "2px solid #34F458");
        } else {
            $('#numError').html("Enter a 10 digit number only");
            $('#numError').show();
            $("#num").css("border-bottom","2px solid #F90A0A");
            error_number = true;
        }
    }

    function check_pass() {
        var password_length = $("#password").val().length;
        if (password_length < 8) {
           $("#passError").html("Atleast 8 Characters");
           $("#passError").show();
           $("#password").css("border-bottom","2px solid #F90A0A");
           error_pass = true;
        } else {
           $("#passError").hide();
           $("#password").css("border-bottom","2px solid #34F458");
        }
    }

    function check_cpass() {
        var cpassValue = $('#cpassword').val();
        var passValue = $('#password').val();
        if(cpassValue !== passValue) {
            $("#cpassError").html("Passwords Did not Matched");
               $("#cpassError").show();
               $("#cpassword").css("border-bottom","2px solid #F90A0A");
               error_retype_password = true;
        } else {
            $("#cpassError").hide();
            $("#cpassword").css("border-bottom","2px solid #34F458");
        }
    }

    $('#submit').submit(function() {
            check_fname();
            check_lname();
            check_email();
            check_pass();
            check_cpass();

            if (error_fname === false && error_lname === false && error_email === false && error_pass === false && error_cpass === false && error_number === false) {
                alert("Registration Successfull");
                return true;
            } else {
                alert("Please Fill the form Correctly");
                return false;
            }
    });
});