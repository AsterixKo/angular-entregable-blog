export class UserModel {
    _email: string;
    _password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    get email(): string {
        return this.email;
    }

    set email(email: string) {
        this.email = email;
    }

    get password(): string {
        return this.password;
    }

    set password(password: string) {
        this.password = password;
    }
}