export class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // or throw an error
        }
        return this.items.pop();
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // or throw an error
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
