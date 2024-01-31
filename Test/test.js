// Targeting the form and adding an onsubmit event-listener.
document.forms['register-form'].onsubmit = function(event){
 
    // We are targeting all error placeholders and hide
    // them from any previous displayed error. 
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
       error.style.display = "none";
    }
     
    // We clear the success message from any previous 
    // succeeded submission.
    document.querySelector(".success").innerHTML = "";	
     
    if (this.username.value.trim() === "" || !/^[A-Za-z]+$/.test(this.username.value)) {
        document.querySelector(".username-error").innerHTML = "Please enter a valid username";
        document.querySelector(".username-error").style.display = "block";
        return false;
    }
     
       // The same concept is applied to the other two input fields.
     
       if(this.password.value.trim() === ""){
          document.querySelector(".password-error").innerHTML = 
          "Please enter a password";
          
          document.querySelector(".password-error").style.display = 
          "block";
     
          return false;
       }
     
       if(this.email.value.trim() === ""){
          document.querySelector(".email-error").innerHTML = 
          "Please enter a email";
     
          document.querySelector(".email-error").style.display = 
          "block";
     
          return false;
       }
    }	