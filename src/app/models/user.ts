export class User {
    id: number;
    username: string;
    email: string;
    phone: string;
    password: string;

    constructor(values: Object = {}) {

        Object.assign(this, values);

    }
}
