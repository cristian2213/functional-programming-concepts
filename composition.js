/* 
Finally, an important concept in FP that can be applied to React is composition. Functions
(and components) can be combined to produce new functions with more advanced features
and properties.
*/

// Consider the following functions:
const add = (x, y) => x + y;
const square = (x) => x * x;

// These functions can be composed together to create a new function that adds two numbers and then doubles the result:
const addAndSquare = (x, y) => square(add(x, y));
