class User {
    #firstName;
    #lastName;
    #address;
    #zip;
    #city;
    #email;
    #password;

    constructor(firstName, lastName, address, zip, city, email, password) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#address = address;
        this.#zip = zip;
        this.#city = city;
        this.#email = email;
        this.#password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
        this._zip = zip;
        this._city = city;
        this._email = email;
        this._password = password;
    }

    setLocalStorage() {
        let users = JSON.parse(localStorage.getItem("users"));
        let newUser = {
            firstName: this.#firstName,
            lastName: this.#lastName,
            address: this.#address,
            zip: this.#zip,
            city: this.#city,
            email: this.#email,
            password: this.#password
        };
        if (users === null) {
            users = [newUser];
        } else {
            users.push(newUser);
        }
        localStorage.setItem("users", JSON.stringify(users));
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
}