// Define contact data in a class

export class Contact{
    name = '';
    email = '';
    connected = false;

    constructor(name, email, connected){
        this.name = name;
        this.email = email;
        this.connected = connected;
    }
}