import {session} from "../main.js";

$(document).ready(function(){
    $("#firstName").val(session.user.firstName);
    $("#lastName").val(session.user.lastName);
    $("#address").val(session.user.address);
    $("#zip").val(session.user.zip);
    $("#city").val(session.user.city);
    $("#email").val(session.user.email);
    $("#password").val(session.user.password);
    $("#confirm").val(session.user.password);
})

export function test(){
    alert("test");
}
