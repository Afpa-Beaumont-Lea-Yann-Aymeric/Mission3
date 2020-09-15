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
}