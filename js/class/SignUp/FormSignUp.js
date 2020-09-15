class FormSignUp {
    #firstName;
    #lastName;
    #address;
    #zip;
    #country;
    #email;
    #password;
    #confirm;


    constructor() {
        this.#firstName = '';
        this.#lastName = '';
        this.#address = '';
        this.#zip = '';
        this.#country = '';
        this.#email = '';
        this.#password = '';
        this.#confirm = '';
    }

    updateForm(property, value) {
        this[property] = value;
    }

    verification(property, value){
        let functionIsValid = property + "IsValid";
        return this[functionIsValid](value);
    }

    allIsValid(){
        console.log(this);
    }

    createUser(){

    }

    storeUser(){

    }

    /**
     * Test if the firstName is valid <br>
     * Accept all lowercase and uppercase letters
     * @param {string} firstName
     * @return {boolean} - Return true if firstName is valid, return false otherwise
     */
    firstNameIsValid(firstName) {
        let regex = /^[A-Za-z]{2,}$/;
        return regex.test(firstName);
    }

    /**
     * Test if the lastName is valid<br>
     * Accept all lowercase and uppercase letters
     * @param {string} lastName
     * @return {boolean} - Return true if lastName is valid, return false otherwise
     */
    lastNameIsValid(lastName) {
        let regex = /^[A-Za-z]{2,}$/;
        return regex.test(lastName);
    }

    /**
     * Test if the lastName is valid<br>
     * Accept all lowercase and uppercase letters
     * @param {string} lastName
     * @return {boolean} - Return true if lastName is valid, return false otherwise
     */
    addressIsValid(lastName) {
        let regex = /^[A-Za-z0-9,\-]{2,}$/;
        return regex.test(lastName);
    }

    /**
     * Test if the email is valid<br>
     * Accept all strings that have a valid email format
     * @param {string} email
     * @return {boolean} - Return true if email is valid, return false otherwise
     */
    emailIsValid(email) {
        let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return regex.test(email);
    }

    /**
     * Test if the lastName is valid<br>
     * Accept all lowercase and uppercase letters
     * @param {string} lastName
     * @return {boolean} - Return true if lastName is valid, return false otherwise
     */
    zipIsValid(zip) {
        let regex = /^[0-9]{5}$/;
        return regex.test(zip);
    }

    /**
     * Test if the lastName is valid<br>
     * Accept all lowercase and uppercase letters
     * @param {string} lastName
     * @return {boolean} - Return true if lastName is valid, return false otherwise
     */
    cityIsValid(zip) {
        let regex = /^[0-9a-zA-Z,\-]{2,}$/;
        return regex.test(zip);
    }

    /**
     * Test if the lastName is valid<br>
     * Accept all lowercase and uppercase letters
     * @param {string} lastName
     * @return {boolean} - Return true if lastName is valid, return false otherwise
     */
    passwordIsValid(password) {
        let regex = /^[a-zA-Z0-9]{8,}$/;
        return regex.test(password);
    }

    /**
     * Test if the lastName is valid<br>
     * Accept all lowercase and uppercase letters
     * @param {string} lastName
     * @return {boolean} - Return true if lastName is valid, return false otherwise
     */
    confirmIsValid(confirmation) {
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

    get country() {
        return this.#country;
    }

    set country(value) {
        this.#country = value;
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

    get confirm() {
        return this.#confirm;
    }

    set confirm(value) {
        this.#confirm = value;
    }
}