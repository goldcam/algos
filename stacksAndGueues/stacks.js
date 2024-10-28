class Stack {
    constructor() {this.items = [];} // Empty Stack
  
    push(element) {
      this.items.push(element);
    } // Add element
  
    pop() {
      return this.items.length == 0 ? "Underflow" : this.items.pop();
    } // Remove element
  
    peek() {
      return this.items[this.items.length - 1];
    } // Check top element
  
    isEmpty() {
      return this.items.length == 0;
    } // Check if Stack is empty
  }
  
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop()); // 3
  console.log(stack.peek()); // 2


  function areBracketsBalanced(s) {
    // Initialized stack, ready to track opening brackets
    const stack = [];
    // Bracket pairs for simple access and checking
    const brackets = { '(': ')', '[': ']', '{': '}' };
    
    for (let char of s) {
        if (brackets[char]) {
            // Insert the expected closing bracket onto the stack
            stack.push(brackets[char]);
        } else {
            // The stack's top is compared to the actual closing bracket
            // A mismatch or early termination indicates an invalid string
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }
    
    // The stack must be empty; otherwise, missing closings remain
    return stack.length === 0;
}


console.log(areBracketsBalanced('{{()}}[]'))  // true
console.log(areBracketsBalanced('[(())}'))  // false

function reverseString(str) {
    const stack = [];

    // Push each character of the original string onto the stack
    for (let char of str) {
        stack.push(char);
    }

    // Generate the reversed string based on the LIFO principle
    let reversedStr = '';
    while (stack.length) {
        reversedStr += stack.pop();
    }

    // Return the reversed string
    return reversedStr;
}


console.log(reverseString("abcde"))  // edcba 