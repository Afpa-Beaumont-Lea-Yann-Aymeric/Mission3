let formSignUp = new FormSignUp();

$("#signUp input").focusout(function () {
    let id = $(this).attr('id');
    let value = $(this).val();
    console.log(formSignUp.verification(id, value));
    if (formSignUp.verification(id, value)) {
        formSignUp.updateForm(id, value);
        $(this).removeClass('is-invalid');
        $(this).addClass('is-valid');
    }else{
        $(this).removeClass('is-valid');
        $(this).addClass('is-invalid');
    }
})