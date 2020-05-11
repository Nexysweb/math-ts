import * as Polynom from './polynom';

test('solve2nd', () => {
  expect(Polynom.solve2nd(1, 0, -1)).toEqual([1, -1]);
  expect(Polynom.solve2nd(1, -2, -15)).toEqual([5, -3]);
});