export function factorial(n) {
  if (n < 0) return "Error: Input must be non-negative";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}