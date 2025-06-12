const { divide } = require('./index');

console.log(divide(6, 2) === 3 ? "Test 1 passed" : "Test 1 failed");
console.log(divide(5, 0) === "Error: Division by zero" ? "Test 2 passed" : "Test 2 failed");
console.log(divide(-6, -2) === 3 ? "Test 3 passed" : "Test 3 failed");