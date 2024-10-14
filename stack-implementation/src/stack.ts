// src/stack.ts
export class Stack {
    private items: any[];

    constructor() {
        this.items = [];
    }

    push(item: any) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
