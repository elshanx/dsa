import { describe, expect, test } from 'vitest';
import { mySqrt } from './sqrtx';

describe('mySqrt', () => {
  test('Squares of zero', () => {
    const result = mySqrt(0);
    expect(result).toBe(0);
  });

  test('Squares of one', () => {
    const result = mySqrt(1);
    expect(result).toBe(1);
  });

  test('Squares of integers', () => {
    const result = mySqrt(4);
    expect(result).toBe(2);
  });
});
