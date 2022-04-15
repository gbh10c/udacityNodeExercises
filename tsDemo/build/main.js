"use strict";
var person;
//esling-disable-next-line prefer-const
person = 'Rory';
var buildPerson = function (person) {
    return "your person is ".concat(person);
};
console.log(buildPerson(person));
