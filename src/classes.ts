abstract class Department {
    protected employees: string[] = [];
    constructor(protected readonly id: number, protected name: string) {
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class IT extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, "IT");
    }
    describe() {
        console.log("IT Department id: " + this.id);
    }
}
class Accounting extends Department {

    private lastReport: string;
    private static instance: Accounting;

    get recentReport() {
        if(this.lastReport) {
            return this.lastReport;
        } else {
            throw new Error("No report found.");
        }
    }
    set recentReport(text: string) {
        if(!text) {
            throw new Error("No valid value found.");
        }
        this.addReport(text);
    }

    private constructor(id: number, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[reports.length - 1];
    }
    addReport(text:string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log("Accounting department id: " + this.id);
    }
    static getInstance() {
        if(Accounting.instance) {
            return this.instance;
        }
        this.instance = new Accounting(2, []);
        return this.instance;
    }
}

const it = new IT(1, ["Rachel"]);
const accounting = Accounting.getInstance();

accounting.recentReport = "ytd report";

it.addEmployee("AJ");
it.addEmployee("Rachel");

console.log(it);
console.log(accounting);

it.describe();
accounting.describe();