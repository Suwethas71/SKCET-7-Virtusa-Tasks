interface Employee {
    id: number;
    name: string;
    salary: number;
}

class EmployeeService {

    private employees: Employee[] = [];

    createEmployee(employee: Employee): void {
        this.employees.push(employee);
        console.log("Employee created:", employee);
    }

    getEmployees(): Employee[] {
        return this.employees;
    }

    updateEmployee(id: number, name: string, salary: number): void {
        const employee = this.employees.find(emp => emp.id === id);

        if (employee) {
            employee.name = name;
            employee.salary = salary;
            console.log("Employee updated:", employee);
        } else {
            console.log("Employee not found");
        }
    }

    deleteEmployee(id: number): void {
        const index = this.employees.findIndex(emp => emp.id === id);

        if (index !== -1) {
            this.employees.splice(index, 1);
            console.log("Employee deleted");
        } else {
            console.log("Employee not found");
        }
    }
}

const service = new EmployeeService();

service.createEmployee({
    id: 1,
    name: "Alice",
    salary: 50000
});

service.createEmployee({
    id: 2,
    name: "Bob",
    salary: 60000
});


console.log("Employees:", service.getEmployees());

service.updateEmployee(1, "Alice Smith", 55000);

console.log("After update:", service.getEmployees());

service.deleteEmployee(2);

console.log("After delete:", service.getEmployees());