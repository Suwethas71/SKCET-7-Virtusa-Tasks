class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }

    study() {
        console.log(this.name, "is studying");
    }
}

let student = new Student("Shankar", 22, "Computer Science");

student.displayDetails();
student.study();
