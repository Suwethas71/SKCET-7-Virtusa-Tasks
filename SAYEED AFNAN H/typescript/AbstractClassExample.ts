export {};
declare const require: any;
declare const process: any;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Abstract class
abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Abstract method
    abstract makeSound(): void;

    // Concrete method
    display(): void {
        console.log(`Animal Name: ${this.name}`);
    }
}

// Child class
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    // Implementing abstract method
    makeSound(): void {
        console.log(`${this.name} (${this.breed}) barks: Woof! Woof!`);
    }
}

// Dynamic input using readline
rl.question("Enter Dog's Name: ", (name: string) => {
    rl.question("Enter Dog's Breed: ", (breed: string) => {
        const dogName = name.trim() || "Buddy";
        const dogBreed = breed.trim() || "Golden Retriever";

        const myDog = new Dog(dogName, dogBreed);
        console.log("\n--- Output ---");
        myDog.display();
        myDog.makeSound();

        rl.close();
    });
});
