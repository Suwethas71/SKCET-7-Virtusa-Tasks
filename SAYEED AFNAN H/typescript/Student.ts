export {};
declare const require: any;
declare const process: any;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Student {
    name: string;
    rollNumber: number;
    marks: number;

    constructor(name: string, rollNumber: number, marks: number) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    displayDetails(): void {
        console.log(`\n--- Student Details ---`);
        console.log(`Name: ${this.name}`);
        console.log(`Roll Number: ${this.rollNumber}`);
        console.log(`Marks: ${this.marks}`);
    }

    getGrade(): string {
        if (this.marks >= 90) return "A";
        if (this.marks >= 75) return "B";
        if (this.marks >= 50) return "C";
        return "Fail";
    }
}

rl.question("Enter Student Name: ", (name: string) => {
    rl.question("Enter Roll Number: ", (rollInput: string) => {
        rl.question("Enter Marks (out of 100): ", (marksInput: string) => {
            const studentName = name.trim() || "Student";
            const rollNumber = Number(rollInput) || 101;
            const marks = Number(marksInput) || 0;

            const student = new Student(studentName, rollNumber, marks);
            student.displayDetails();
            console.log(`Grade: ${student.getGrade()}`);

            rl.close();
        });
    });
});
