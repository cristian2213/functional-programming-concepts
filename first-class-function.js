/* 
JavaScript has first-class functions because they are treated like any other variable, meaning
you can pass a function as a parameter to other functions, or it can be returned by another
function and be assigned as a value to a variable
*/
const add = (x, y) => x + y;
const log =
  (fn) =>
  (...args) => {
    return fn(...args);
  };
const logAdd = log(add);
