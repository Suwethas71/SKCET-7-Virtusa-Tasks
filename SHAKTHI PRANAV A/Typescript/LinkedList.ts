class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: Node<T> | null = null;

    append(data: T): void {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    display(): void {
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }

        console.log(result + "null");
    }
}

const numbers = new LinkedList<number>();

numbers.append(10);
numbers.append(20);
numbers.append(30);

numbers.display();

const names = new LinkedList<string>();

names.append("Alice");
names.append("Bob");
names.append("Charlie");

names.display();