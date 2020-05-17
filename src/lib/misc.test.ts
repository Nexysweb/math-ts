import * as M from './misc';
import * as S from './series';

test('golden ration', () => {
  expect(M.goldenRatio).toBeCloseTo(1.618)
})

test('golden ratio and fibonacci', () => {
  // two consecutive values from the fibo series ratio tend to golden ratio value
  const n = 30
  const fs = S.fibonacci(n);
  
  expect(fs[n]/fs[n-1]).toBeCloseTo(M.goldenRatio, 3)

})