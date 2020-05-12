import * as P from './prime';

test('isprime', () => {
  expect(P.isPrime(7, [2, 3, 5, 7])).toEqual(true);
  expect(P.isPrime(14, [2, 3, 5, 7])).toEqual(false);
  expect(P.isPrime(13, [2, 3, 5, 7])).toEqual(true);
})

test('primse', () => {
  expect(P.prime(7)).toEqual([1, 2, 3, 5]);
  expect(P.prime(10)).toEqual([1, 2, 3, 5, 7]);
  expect(P.prime(12)).toEqual([1, 2, 3, 5, 7, 11]);
})