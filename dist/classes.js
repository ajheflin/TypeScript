"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var IT = /** @class */ (function (_super) {
    __extends(IT, _super);
    function IT(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    IT.prototype.describe = function () {
        console.log("IT Department id: " + this.id);
    };
    return IT;
}(Department));
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[reports.length - 1];
        return _this;
    }
    Object.defineProperty(Accounting.prototype, "recentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            else {
                throw new Error("No report found.");
            }
        },
        set: function (text) {
            if (!text) {
                throw new Error("No valid value found.");
            }
            this.addReport(text);
        },
        enumerable: false,
        configurable: true
    });
    Accounting.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    Accounting.prototype.printReports = function () {
        console.log(this.reports);
    };
    Accounting.prototype.describe = function () {
        console.log("Accounting department id: " + this.id);
    };
    Accounting.getInstance = function () {
        if (Accounting.instance) {
            return this.instance;
        }
        this.instance = new Accounting(2, []);
        return this.instance;
    };
    return Accounting;
}(Department));
var it = new IT(1, ["Rachel"]);
var accounting = Accounting.getInstance();
accounting.recentReport = "ytd report";
it.addEmployee("AJ");
it.addEmployee("Rachel");
console.log(it);
console.log(accounting);
it.describe();
accounting.describe();
//# sourceMappingURL=classes.js.map