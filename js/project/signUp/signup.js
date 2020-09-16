import {FormSignUp} from "../forms/FormSignUp.js";

let formSignUp = new FormSignUp();
console.log(localStorage);

$("#signUpForm input").focusout(function () {
    let id = $(this).attr('id');
    let value = $(this).val();
    if (formSignUp.verification(id, value)) {
        formSignUp.updateForm(id, value);
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');
    } else {
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid');
    }
})

$("#signUpForm").submit(function (e) {
    e.preventDefault();
    $("#signUpForm input").focusout();
    if (formSignUp.allIsValid()) {
        $("#signUpForm").empty();
        $("#signUpForm").html("Merci " + formSignUp.firstName + " " + formSignUp.lastName + "<br/>Votre compte vient d'etre créé, vous pouvez vous connecter");
        formSignUp.createUser();
    }
})