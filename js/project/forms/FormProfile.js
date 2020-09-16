import {Form} from "./Form.js";

export class FormProfile extends Form {
    constructor(firstName, lastName, address, zip, city, email, password, confirm) {
        super(firstName, lastName, address, zip, city, email, password, confirm);
    }
}