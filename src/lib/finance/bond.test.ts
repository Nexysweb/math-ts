import * as Bond from './bond';

describe('bond', () => {
  //val epsilon = .01

  const c = 5
  const n = 4
  const i = .0225
  const m = 100
  const p = 110.41
  /** see example on p10 of FRM4
   */

  test("yieldToMaturity", () => {
    expect(Bond.yieldToMaturity(c, n, m, p)).toBeCloseTo(i)//-epsilon/100 and be <= i+epsilon/100)
  })

  test('price', () => {
    expect(Bond.price(c, n, i , m)).toBeCloseTo(p)
  })
})