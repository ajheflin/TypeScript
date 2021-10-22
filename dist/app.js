"use strict";
var e1 = {
    name: "AJ",
    privileges: ["Create Server"],
    startDate: new Date()
};
function add(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
var hw = add(5, 5);
var fetchedUserData = {
    id: "u1",
    name: "AJ",
    job: {
        title: "Developer",
        description: "Writes code"
    }
};
console.log(fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job.title);
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ('privileges' in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Truck Driving");
    };
    Truck.prototype.loadCargo = function () {
        console.log("Loading...");
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed " + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 10 });
var paragraph = document.querySelector("p");
// const input = <HTMLInputElement>document.getElementById("user-input")!;
var input = document.getElementById("user-input");
input.value = "Hello!";
var errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!"
};
//# sourceMappingURL=app.js.map