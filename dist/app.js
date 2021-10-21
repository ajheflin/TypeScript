"use strict";
// type AddFn = (a: number, b: number) => number;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, I am " + this.name);
    };
    return Person;
}());
var user1 = new Person("AJ");
user1.greet();
//# sourceMappingURL=app.js.map