import test from 'node:test';
import assert from 'node:assert/strict';
import { divide } from './index.js';

test('divide should handle positive numbers', () => {
  assert.equal(divide(6, 2), 3);
});

test('divide should handle division by zero', () => {
  assert.equal(divide(5, 0), "Error: Division by zero");
});

test('divide should handle negative numbers', () => {
  assert.equal(divide(-6, -2), 3);
});