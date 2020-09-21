/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

import {User} from "../session/User.js";

export class Form {
    #firstName;
    #lastName;
    #address;
    #zip;
    #city;
    #email;
    #password;
    #confirmation;

    constructor() {
        this.#firstName = '';
        this.#lastName = '';
        this.#address = '';
        this.#zip = '';
        this.#city = '';
        this.#email = '';
        this.#password = '';
        this.#confirmation = '';
    }

    /**
     * Update the form
     * @param property - The property to update
     * @param value - The value enter by the user in the field
     */
    updateForm(property, value) {
        this[property] = value;
    }

    /**
     * Verify if the value enter by the user is correct
     * @param {string} property - The property to verify
     * @param {string} value - The value enter by the user
     * @returns {boolean} - Return true if the value is correct, false otherwise
     */
    verification(property, value) {
        let functionIsValid = property + "IsValid";
        return this[functionIsValid](value);
    }

    /**
     * Verify if all property are correct
     * @returns {boolean} - Return true if all values are correct, false otherwise
     */
    allIsValid() {
        let array = Object.getOwnPropertyNames(this);
        let arrayProperty = [
            "address",
            "confirmation",
            "city",
            "email",
            "firstName",
            "lastName",
            "password",
            "zip"
        ]
        let formSignUp = this;
        let valid = true;
        arrayProperty.forEach(function (property) {
            if (formSignUp[property] === "") valid = false;
        })
        return valid;
    }

    /**
     * Create a new User with all properties enter by the user
     */
    createUser() {
        let user = new User(this.#firstName, this.#lastName, this.#address, this.#zip, this.#city, this.#email, this.#password);
        user.setLocalStorage();
    }

    /**
     * Test if the firstName is valid <br>
     * Accept all lowercase and uppercase letters, minimum 2 letters
     * @param {string} firstName - The firstName to verify
     * @return {boolean} - Return true if firstName is valid, return false otherwise
     */
    firstNameIsValid(firstName) {
        let regex = /^[A-Za-z]{2,}$/;
        return regex.test(firstName);
    }

    /**
     * Test if the lastName is valid<br>
     * Accept all lowercase and uppercase letters, minimu 2 letters
     * @param {string} lastName - The lastName to verify
     * @return {boolean} - Return true if lastName is valid, return false otherwise
     */
    lastNameIsValid(lastName) {
        let regex = /^[A-Za-z]{2,}$/;
        return regex.test(lastName);
    }

    /**
     * Test if the address is valid<br>
     * Accept lowercase letters, uppercase letters, all accentual letters, space, dash and comma
     * @param {string} address - The address to verify
     * @return {boolean} - Return true if address is valid, return false otherwise
     */
    addressIsValid(address) {
        let regex = /^[A-Za-z0-9,\- À-ÿ]{2,}$/;
        return regex.test(address);
    }

    /**
     * Test if the email is valid<br>
     * Accept all strings that have a valid email format
     * @param {string} email - The email to verify
     * @return {boolean} - Return true if email is valid, return false otherwise
     */
    emailIsValid(email) {
        let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return regex.test(email);
    }

    /**
     * Test if the zip code is valid<br>
     * Accept only 5 number sequences
     * @param {string} zip - The zip code to verify
     * @return {boolean} - Return true if the zip code is valid, return false otherwise
     */
    zipIsValid(zip) {
        let regex = /^[0-9]{5}$/;
        return regex.test(zip);
    }

    /**
     * Test if the city is valid<br>
     * Accept lowercase letters, uppercase letters, all accentual letters, space, dash and comma
     * @param {string} lastName
     * @return {boolean} - Return true if zip code is valid, return false otherwise
     */
    cityIsValid(zip) {
        let regex = /^[0-9a-zA-Z,\- À-ÿ]{2,}$/;
        return regex.test(zip);
    }

    /**
     * Test if the password is valid<br>
     * Accept only uppercase letters, lowercase letters and digit, minimum sequences of 8
     * @param {string} password - The password to verify
     * @return {boolean} - Return true if lastName is valid, return false otherwise
     */
    passwordIsValid(password) {
        let regex = /^[a-zA-Z0-9]{8,}$/;
        return regex.test(password);
    }

    /**
     * Test if the confirmation is valid<br>
     * Must be the same that the password
     * @param {string} confirmation - The password confirmation to verify
     * @return {boolean} - Return true if confirmation is valid, return false otherwise
     */
    confirmationIsValid(confirmation) {
        let regex = /^[a-zA-Z0-9]{8,}$/;
        return confirmation === $("#password").val() && regex.test(confirmation);
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        this.#lastName = value;
    }

    get address() {
        return this.#address;
    }

    set address(value) {
        this.#address = value;
    }

    get zip() {
        return this.#zip;
    }

    set zip(value) {
        this.#zip = value;
    }

    get city() {
        return this.#city;
    }

    set city(value) {
        this.#city = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }

    get confirmation() {
        return this.#confirmation;
    }

    set confirmation(value) {
        this.#confirmation = value;
    }
}