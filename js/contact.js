$(document).ready(function() {
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-top-right',
      'preventDuplicates': false,
      'showDuration': '1000',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut',
    }
});

$("#contactus-form").submit(function(e) {
    $('#contactSubmitBtn').attr('disabled',true);
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    var valid;	
    valid = validateContact();
    if(valid){
        $.ajax({
            type: "POST",
            url: 'http://vaishnavcreation.in/contactSubmit.php',
            data: form.serialize(), // serializes the form's elements.
            dataType: "json",
            success: function(response)
            {
                if(response.status){
                    $('#contactus-form')[0].reset()
                    toastr.success(response.message);
                    $('#contactSubmitBtn').attr('disabled',false);
                }else{
                    alert("something went wrong, Please try again.");
                }
            }
        });
    }else{
        $('#contactSubmitBtn').attr('disabled',false);
    }
});
function validateContact() {
    var valid = true;	

    if(!$("#fullname").val()) {
        valid = false;
        $(".contact .contact #fullname").css("border-color","red");
    }else{
        $(".contact .contact #fullname").css("border-color","black");
    }

    if(!$("#number").val()) {
        $(".contact .contact #number").css("border-color","red");
        valid = false;
    }else{
        var contactformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; 
        if($("#number").val().match(contactformat))
        {
            $(".contact .contact #number").css("border-color","black");
            valid =  true;
        }
        else
        {
            $(".contact .contact #number").css("border-color","red");
            valid = false;
        }
    }
    if(!$("#email").val()) {
        $(".contact .contact #email").css("border-color","red");
        valid = false;
    }else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if($("#email").val().match(mailformat))
        {
            $(".contact .contact #email").css("border-color","black");
            valid =  true;
        }
        else
        {
            $(".contact .contact #email").css("border-color","red");
            valid = false;
        }
    }
    if(!$("#message").val()) {
        $(".contact .contact #message").css("border-color","red");
        valid = false;
    }else{
        $(".contact .contact #message").css("border-color","black");
    }
    return valid;
}