import {FormProfile} from "./forms/FormProfile.js";
import {session} from "./main.js";

let formProfile = new FormProfile();
$("#profileForm input").focusout(function () {
    let id = $(this).attr('id');
    let value = $(this).val();
    if (formProfile.verification(id, value)) {
        formProfile.updateForm(id, value);
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');
    } else {
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid');
    }
})

$("#profileForm").submit(function (e) {
    e.preventDefault();
    $("#profileForm input").focusout();
    if (formProfile.allIsValid()) {
        $("#signUpForm").empty();
        $("#signUpForm").html("Merci " + formProfile.firstName + " " + formProfile.lastName + "<br/>Votre compte vient d'etre créé, vous pouvez vous connecter");
        formProfile.createUser();
    }
})
