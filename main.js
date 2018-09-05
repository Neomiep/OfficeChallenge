class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}
class Employee {
    constructor(name) {
        this.name = name
    }
    work(office) {
        for (let i = 0 ; i < 10 ; i++)
            office.documents.push(new Document(this.name))
    }
}
class Manager {
    constructor(name) {
        this.employees = []
        this.name = name
    }
    hireEmployee(name) {
        let employee = new Employee(name)
        this.employees.push(employee)
    }
    askEmployeesToWork(office) {
        for (let i = 0; i < this.employees.length; i++) {
            this.employees[i].work(office)
        }
    }
}
class Cleaner {
    constructor(name) {
        this.name = name
    }
    clean() {
        console.log("Clean")
    }
}
class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireCleaner(name) {
        let cleaner = new Cleaner(name)
        this.cleaners.push(cleaner)
    }
    hireManager(name) {
        let manager = new Manager(name)
        this.managers.push(manager)
    }
    startWorkDay() {
        for (let i = 0; i < this.managers.length; i++) {
            this.managers[i].askEmployeesToWork(this)
        }
        for (let i = 0; i < this.cleaners.length; i++) {
            this.cleaners[i].clean()
        }
    }
}