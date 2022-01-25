/* 
A common technique in FP is currying. Currying is the process of converting a function
that takes multiple arguments into a function one argument at a time and
returning another function. Let's look at an example to clarify the concept.
*/

// Normal Function
// const add = (x, y) => x + y;

// We use it in the following way:
const add = (x) => (y) => x + y;

const add1 = add(1);
add1(2); // 3
add1(3); // 4
