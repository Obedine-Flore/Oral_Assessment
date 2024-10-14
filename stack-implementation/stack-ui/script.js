// Stack implementation
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Create a new stack instance
const stack = new Stack();

// Stack operation handlers
const stackInput = document.getElementById('stack-input');
const stackOutput = document.getElementById('stack-output');

document.getElementById('push-button').onclick = () => {
    const value = parseInt(stackInput.value);
    if (!isNaN(value)) {
        stack.push(value);
        stackOutput.textContent = `Pushed: ${value}`;
        stackInput.value = ''; // Clear input field
    }
};

document.getElementById('pop-button').onclick = () => {
    const poppedValue = stack.pop();
    stackOutput.textContent = poppedValue !== null ? `Popped: ${poppedValue}` : 'Stack is empty';
};

document.getElementById('peek-button').onclick = () => {
    const peekedValue = stack.peek();
    stackOutput.textContent = peekedValue !== null ? `Peeked: ${peekedValue}` : 'Stack is empty';
};

// Counter functionality
let count = 0;

document.getElementById('increment-button').onclick = () => {
    count++;
    updateCounterDisplay();
};

document.getElementById('decrement-button').onclick = () => {
    count--;
    updateCounterDisplay();
};

document.getElementById('reset-button').onclick = () => {
    count = 0;
    updateCounterDisplay();
};

// Function to update the counter display
function updateCounterDisplay() {
    document.getElementById('count-display').textContent = `Counter: ${count}`;
}
