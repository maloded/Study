'use strict';

// Case 1: Information model

class Passport {
    constructor(id, name, city, birthday) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.birthday = birthday;
    }
}

// Usage

const passport = new Passport('AO111222', 'Ded', 'Kiev', new Date(Date.UTC(1997, 3, 24, 20-2)));
console.dir({ passport });