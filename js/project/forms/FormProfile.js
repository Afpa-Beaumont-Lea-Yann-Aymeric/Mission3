import {Form} from "./Form.js";

export class FormProfile extends Form {
    constructor(firstName, lastName, address, zip, city, email, password, confirm) {
        super(firstName, lastName, address, zip, city, email, password, confirm);
    }

    addEvent(){
        let formProfile = this;
        $("#signUpForm input").focusout(function () {
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

        $("#signUpForm").submit(function (e) {
            e.preventDefault();
            $("#signUpForm input").focusout();
            if (formProfile.allIsValid()) {
                $("#signUpForm").empty();
                $("#signUpForm").html("Merci " + formProfile.firstName + " " + formProfile.lastName + "<br/>Votre compte vient d'etre créé, vous pouvez vous connecter");
                formProfile.createUser();
            }
        })
    }

}