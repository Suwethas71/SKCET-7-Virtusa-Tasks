class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log(this.name + " is barking");
    }
}

let name = prompt("Enter dog's name:");

let dog = new Dog(name);

dog.eat();
dog.bark();
