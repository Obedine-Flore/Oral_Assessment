import { Stack } from './stack';

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Outputs: 3
console.log(stack.pop());  // Outputs: 3
console.log(stack.peek()); // Outputs: 2
console.log(stack.pop());  // Outputs: 2
console.log(stack.isEmpty()); // Outputs: false
console.log(stack.pop());  // Outputs: 1
console.log(stack.isEmpty()); // Outputs: true
