import * as M from './misc';

test('golden ration', () => {
  expect(M.goldenRatio).toBeCloseTo(1.618)
})