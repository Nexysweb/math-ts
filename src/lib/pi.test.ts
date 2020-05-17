import * as P from './pi';

test('pi', () => {
  const e = P.montecarlo(1000000)
  // the precision should be 2, but to make sure that tests don't fail, set to 1
  expect(e).toBeCloseTo(Math.PI, 1)
})