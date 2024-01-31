document.forms["myForm"].onsubmit = function(event) {
    let errors = document.querySelectorAll(".error");
    for (let error of errors) {
        error.style.display = "none";
    }

    document.querySelector(".success").innerHTML = "";
    
    let checkAnswerQ1 = this.q1.value.toLowerCase();
    let checkAnswerQ2 = document.querySelector('input[name="q2"]:checked');
    let checkAnswerQ3 = document.querySelector('input[name="q3"]:checked');

    var checkAnswerQ4 = document.querySelector('input[name="q4"]:checked');
    var yamahaCheckbox = document.querySelector('input[value="Yamaha"]');


    if (this.firstName.value.trim() === "" || !/^[A-Za-z]+$/.test(this.firstName.value)) {
        document.querySelector(".firstname-error").innerHTML = "Please enter a valid first name (only letters are allowed)";
        document.querySelector(".firstname-error").style.display = "block";
        return false;
    }

    if (this.lastName.value.trim() === "" || !/^[A-Za-z]+$/.test(this.lastName.value)) {
        document.querySelector(".lastname-error").innerHTML = "Please enter a valid last name (only letters are allowed)";
        document.querySelector(".lastname-error").style.display = "block";
        return false;
    }

    if (this.email.value.trim() === "") {
        document.querySelector(".email-error").innerHTML = "Please enter a valid email address";
        document.querySelector(".email-error").style.display = "block";
        return false;
    }

    if (checkAnswerQ1 !== "messi") {
        document.querySelector(".q1-error").innerHTML = "Wrong answer, please try again";
        document.querySelector(".q1-error").style.display = "block";
        return false;
    }

    if (!checkAnswerQ2 || checkAnswerQ2.value !== "Paris") {
        document.querySelector(".q2-error").innerHTML = "Wrong answer, please try again";
        document.querySelector(".q2-error").style.display = "block";
        return false;
    }

    if (!checkAnswerQ3 || checkAnswerQ3.value !== "Stockholm") {
        document.querySelector(".q3-error").innerHTML = "Wrong answer, please try again";
        document.querySelector(".q3-error").style.display = "block";
        return false;
    }

    if (!checkAnswerQ4 || (checkAnswerQ4.value !== "Volkswagen" && checkAnswerQ4.value !== "Audi")) {
        document.querySelector(".q4-error").innerHTML = "Wrong answer, please try again";
        document.querySelector(".q4-error").style.display = "block";
        return false;
    }
    
    if (yamahaCheckbox.checked && (checkAnswerQ4.value === "Volkswagen" || checkAnswerQ4.value === "Audi")) {
        document.querySelector(".q4-error").innerHTML = "Incorrect! Yamaha is not a car brand.";
        document.querySelector(".q4-error").style.display = "block";
        return false;
    }
    
    if (this.q5.value.trim().toLowerCase() !== "oslo") {
        document.querySelector(".q5-error").innerHTML = "Wrong answer, please try again";
        document.querySelector(".q5-error").style.display = "block";
        return false;
    }


    document.querySelector(".success").innerHTML = "Quiz submitted successfully!";
    document.querySelector(".success").style.display = "block";
    document.querySelector(".success").style.backgroundColor = "#d2ffd2";
    return false;


}



   
    








