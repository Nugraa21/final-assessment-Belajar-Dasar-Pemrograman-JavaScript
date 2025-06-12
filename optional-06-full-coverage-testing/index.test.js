import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should return 0 if first argument type is not a number", () => {
  // Arrange
  const operandA = "5";
  const operandB = 5;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if second argument type is not a number", () => {
  // Arrange
  const operandA = 5;
  const operandB = "5";

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if both arguments type are not numbers", () => {
  // Arrange
  const operandA = "5";
  const operandB = "5";

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if first argument is less than 0", () => {
  // Arrange
  const operandA = -5;
  const operandB = 5;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if second argument is less than 0", () => {
  // Arrange
  const operandA = 5;
  const operandB = -5;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return 0 if both arguments are less than 0", () => {
  // Arrange
  const operandA = -5;
  const operandB = -5;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should sum correctly", () => {
  // Arrage
  const operandA = 5;
  const operandB = 5;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 10;
  assert.equal(actualValue, expectedValue);
});
