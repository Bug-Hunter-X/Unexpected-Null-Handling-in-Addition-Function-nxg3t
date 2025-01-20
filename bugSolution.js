function foo(a, b) {
  if (a === null || b === null) {
    return NaN; // Return NaN for invalid inputs
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: NaN
//Alternatively, throw an error:
// function foo(a, b) {
//   if (a === null || b === null) {
//     throw new Error('Invalid input: Null values are not allowed.');
//   }
//   return a + b;
// }