/* 
In FP, a function, instead of changing the value of a
variable, creates a new variable with a new value and returns it. This way of working with
data is called immutability.
*/

// Wrong
const add3 = (arr) => arr.push(3);
const myArr = [1, 2];
add3(myArr); // [1, 2, 3]
add3(myArr); // [1, 2, 3, 3]

// Nice
const add3 = (arr) => arr.concat(3);
const myArr = [1, 2];
const result1 = add3(myArr); // [1, 2, 3]
const result2 = add3(myArr); // [1, 2, 3]
