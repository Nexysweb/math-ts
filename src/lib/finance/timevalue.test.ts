import * as Timevalue from './timevalue'
import * as Series from '../series';

describe('pv', () => {
  test('pv', () => {
    const r = .09
    const n = 5
    const p = 1000
    expect(p*Timevalue.pv(r, n)).toBeCloseTo(649.93)//-epsilon and be < 649.93+epsilon)
  })

  test('sum cf', () => {
    const r = .9
    const y = 1
    const n = 10
    const a = Series.geometric(1/(1+r/y), n, 1)
    expect(Timevalue.pvMulti(r, n)).toEqual(a)
    expect(Timevalue.irr(a, n)).toBeCloseTo(r)//-epsilon and be <= r+epsilon)
  })
})

