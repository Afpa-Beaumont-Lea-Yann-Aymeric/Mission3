class Session {
    #user;

    constructor(userObject) {
        if (userObject === null) {
            this.#user = null;
        } else {
            this.#user = new User(userObject.firstName, userObject.lastName, userObject.address, userObject.zip, userObject.city, userObject.email, userObject.password)
        }
    }

    get user() {
        return this.#user;
    }

    set user(value) {
        this.#user = value;
    }
}