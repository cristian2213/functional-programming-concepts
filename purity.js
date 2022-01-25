/* 
An important aspect of FP is to write pure functions. You will encounter this concept very
often in the React ecosystem, especially if you look into libraries such as Redux.

What does it mean for a function to be pure?

A function is pure when there are no side effects, which means that the function does not
change anything that is not local to the function itself.
*/

// For example, the following function is pure:
const add = (x, y) => x + y;

// The following function is not pure:
let x = 0;
const add = (y) => (x = x + y);
