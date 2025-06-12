const { addNumbers } = require('./index');

console.log(addNumbers(2, 3) === 5 ? "Test 1 passed" : "Test 1 failed");
console.log(addNumbers(0, 0) === 0 ? "Test 2 passed" : "Test 2 failed");