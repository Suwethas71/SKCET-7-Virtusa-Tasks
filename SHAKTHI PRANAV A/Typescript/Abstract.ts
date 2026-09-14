abstract class Animal {
    abstract makeSound(): void;
    sleep(): void {
        console.log("Animal is sleeping");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Dog says: Woof!");
    }
}

const dog = new Dog();

dog.makeSound();
dog.sleep();