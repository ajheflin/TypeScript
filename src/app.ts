// type AddFn = (a: number, b: number) => number;

interface AddFn {
    (a:number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name: string;
}
interface Greetable extends Named {
    greet(): void;
}

class Person implements Greetable {

    constructor(public readonly name: string) {
    }

    greet() {
        console.log("Hello, I am " + this.name);
    }
}

const user1 = new Person("AJ");

user1.greet();