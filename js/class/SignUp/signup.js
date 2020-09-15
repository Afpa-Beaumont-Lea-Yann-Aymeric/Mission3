let formSignUp = new FormSignUp();

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
    console.log(Object.values(formSignUp.__proto__));
    for (let prop in formSignUp) {
        console.log(prop);

    }
})