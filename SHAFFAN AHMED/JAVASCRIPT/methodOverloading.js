class Calculator {
    add(a, b) {
        if (arguments.length === 1) {
            return a;
        }

        if (arguments.length === 2) {
            return a + b;
        }

        if (arguments.length === 3) {
            return a + b + arguments[2];
        }

        return 0;
    }
}

const calculator = new Calculator();

console.log(calculator.add(10));
console.log(calculator.add(10, 20));
console.log(calculator.add(10, 20, 30));
