import { Stack } from '../src/stack';

describe('Stack', () => {
    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('should be empty initially', () => {
        expect(stack.isEmpty()).toBe(true);
    });

    test('should push items onto the stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek()).toBe(2);
    });

    test('should pop the top item from the stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.peek()).toBe(1);
    });

    test('should return undefined when popping from an empty stack', () => {
        expect(stack.pop()).toBeUndefined();
    });

    test('should peek at the top item without removing it', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.pop()).toBe(2);
        expect(stack.peek()).toBe(1);
    });

    test('should return undefined when peeking an empty stack', () => {
        expect(stack.peek()).toBeUndefined();
    });

    test('should correctly identify if the stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });
});
