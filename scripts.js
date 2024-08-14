"use strict";
// let userName: string = "usman";
let car = {
    make: "toyota",
    model: "Corolla",
    year: 2015,
    describe: function () {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}`);
    }
};
car.color = "black";
delete car.year;
console.log(car.year);
