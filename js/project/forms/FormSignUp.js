import {Form} from "./Form.js";

export class FormSignUp extends Form{
    constructor(firstName, lastName, address, zip, city, email, password, confirm) {
        super(firstName, lastName, address, zip, city, email, password, confirm);
    }
}