import { describe, expect, test } from 'vitest';
import slync from '../src';

const testif = (condition: boolean) => condition ? test : test.skip;

describe('slync error cases', () => {
  test.each([
    true,
    'helloworld',
    undefined,
    null,
    BigInt('123456789012345678901234567890'),
  ])('TypeError with ms=%s', (ms) => {
    expect(() => slync(ms as unknown as number)).toThrow(TypeError);
  });

  test.each([
    -999,
    -1,
    NaN,
    Infinity,
    -Infinity,
    Infinity + 1,
    -Infinity + 1,
  ])('RangeError with ms=%s', (ms) => {
    expect(() => slync(ms)).toThrow(RangeError);
  });
});

describe('slync success cases', () => {
  const checkSleep = (ms: number) => {
    const startTime = Date.now();
    slync(ms);
    const endTime = Date.now();
    const sleepDuration = endTime - startTime;
    expect(sleepDuration).toBeGreaterThanOrEqual(ms);
    expect(sleepDuration).toBeLessThanOrEqual(ms + 1000);
  };

  testif(
    typeof global.SharedArrayBuffer !== 'undefined' &&
    typeof global.Atomics !== 'undefined'
  )('sleepAtomic when SharedArrayBuffer and Atomics are defined', () => {
    checkSleep(100);
  });

  test('sleepNaive when SharedArrayBuffer is not defined', () => {
    global.SharedArrayBuffer = undefined as any;
    checkSleep(100);
  });

  test('sleepNaive when Atomics is not defined', () => {
    global.Atomics = undefined as any;
    checkSleep(100);
  });

  test('sleepNaive when both SharedArrayBuffer and Atomics are not defined', () => {
    global.SharedArrayBuffer = undefined as any;
    global.Atomics = undefined as any;
    checkSleep(100);
  });
});
