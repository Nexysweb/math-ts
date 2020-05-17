import * as P from './pi';

test('pi', () => {
  const e = P.montecarlo(1000000)
  expect(e).toBeCloseTo(Math.PI, 2)
})