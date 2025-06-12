function fibonacci(n) {
  if (n < 0) return "Error: Input must be non-negative";
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
module.exports = { fibonacci };