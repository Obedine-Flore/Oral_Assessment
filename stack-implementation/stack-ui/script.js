class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return this.isEmpty() ? "No elements" : this.items[this.items.length - 1];
    }

    getStack() {
        return this.items;
    }
}

const stack = new Stack();
const stackList = document.getElementById("stackList");
const inputElement = document.getElementById("inputElement");
const pushButton = document.getElementById("pushButton");
const popButton = document.getElementById("popButton");
const peekButton = document.getElementById("peekButton");
const topElement = document.getElementById("topElement");

function updateStackDisplay() {
    stackList.innerHTML = ""; // Clear the list
    stack.getStack().forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        stackList.appendChild(li);
    });
}

pushButton.addEventListener("click", () => {
    const value = inputElement.value;
    if (value) {
        stack.push(value);
        inputElement.value = ""; // This line clears the input
        updateStackDisplay();
    }
});

popButton.addEventListener("click", () => {
    stack.pop();
    updateStackDisplay();
    topElement.textContent = ""; // This line clears the top element display
});

peekButton.addEventListener("click", () => {
    topElement.textContent = stack.peek(); // This line displays the top element
});
