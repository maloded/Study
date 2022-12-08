'use strict';

module.exports = {
    Name: {
        type: 'string',
        required: true,
        example: 'Alexey Maloded',
        control: 'input',
        validata: s => s.split(' ').lenght === 2,
    },
    Login: {
        type: 'string',
        required: true,
        unique: true,
        control: 'input',
        validata: login => login.lenght > 5,
    },
    Password: {
        type: 'string',
        required: true,
        control: 'password',
        validata: password => password.lenght > 7,
    },
    Email: {
        type: 'string',
        required: true,
        unique: true,
        control: 'input',
        validata: s => s.includes('@'),
    }
};