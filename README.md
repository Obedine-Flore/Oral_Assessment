# Stack Implementation in TypeScript

## Description

This project implements a stack data structure using TypeScript. The stack supports basic operations such as pushing, popping, and peeking at the top item. A stack is a Last In, First Out (LIFO) data structure, meaning the last item added is the first one to be removed.

In addition to the stack functionality, the project includes a counter component that allows users to increment and decrement a counter value.

## Features

- **Push**: Add an item to the top of the stack.
- **Pop**: Remove and return the item from the top of the stack.
- **Peek**: Return the item at the top of the stack without removing it.
- **isEmpty**: Check if the stack is empty.
- **Increment**: Increase the counter value by 1.
- **Decrement**: Decrease the counter value by 1.

## Installation

To use this stack implementation and counter component, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/stack-implementation.git
    cd stack-implementation
    ```

2. Install Dependencies:

    ```bash 
    npm install
    ```

3. Build the Project:

    ```bash
    npm run build
    ```

## Usage

To use the stack, import the Stack class and create an instance. For the counter, simply use the provided React functional component.

### Stack Methods

1. **push(item: T): void**

   Adds an item to the top of the stack.

2. **pop(): T | undefined**

   Removes and returns the item at the top of the stack. Returns undefined if the stack is empty.

3. **peek(): T | undefined**

   Returns the item at the top of the stack without removing it. Returns undefined if the stack is empty.

4. **isEmpty(): boolean**

   Checks if the stack is empty. Returns true if the stack is empty, otherwise returns false.

### Counter Component Usage

To use the counter component, include it in your React application as follows:

```tsx
import Counter from './components/Counter';
```

The counter component provides two buttons, "Increment" and "Decrement," to adjust the counter value displayed.

### License

This project is licensed under the MIT License - see the LICENSE file for details.