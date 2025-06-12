// Menggunakan node:test
import test from 'node:test';
import assert from 'node:assert/strict';
import { addNumbers } from './index.js';

test('addNumbers should add two positive numbers', () => {
  assert.equal(addNumbers(2, 3), 5);
});

test('addNumbers should handle zero', () => {
  assert.equal(addNumbers(0, 0), 0);
});