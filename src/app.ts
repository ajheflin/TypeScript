type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "AJ",
    privileges: ["Create Server"],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: Combinable, n2: Combinable) {
    if(typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}

const hw = add(5,5);

const fetchedUserData = {
    id: "u1",
    name: "AJ",
    job: {
        title: "Developer",
        description: "Writes code"
    }
}

console.log(fetchedUserData?.job.title);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if('privileges' in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if('startDate' in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log("Driving");
    }
}
class Truck {
    drive() {
        console.log("Truck Driving");
    }
    loadCargo() {
        console.log("Loading...");
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}
interface Horse {
    type: 'horse';
    runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed: number;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed " + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});
moveAnimal({type: 'horse', runningSpeed: 10});

const paragraph = document.querySelector("p");
// const input = <HTMLInputElement>document.getElementById("user-input")!;
const input = document.getElementById("user-input")! as HTMLInputElement;

input.value = "Hello!";

interface ErrorContainer {
    // id: string;
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email!",
    username: "Must start with a capital character!"
};