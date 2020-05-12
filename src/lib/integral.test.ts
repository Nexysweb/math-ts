// from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/test/scala/math/EquationSpec.scala
import * as I from './integral';
import * as F from './function';
describe('numerical integration', () => {
  test('rectangle 1', () => {
    const l = (x:number) => F.linear(x, 4, 2);
    const r = I.generic(l, [0, 1], 1000, 'rectangle')
    expect(r).toBeGreaterThanOrEqual(3.8)
    expect(r).toBeLessThanOrEqual(4);
  })

  test('rectangle 2', () => {
    const l = (x:number) => F.polynomial(x, [0, 3, -1]);
    const r = I.generic(l, [0, 3], 1000, 'rectangle')
    expect(r).toBeGreaterThanOrEqual(4.4)
    expect(r).toBeLessThanOrEqual(4.6);
  })

  test('trapezoidal', () => {
    const l = (x:number) => F.polynomial(x, [0, 3, -1]);
    const r = I.generic(l, [0, 3], 1000, 'trapezoidal')
    expect(r).toBeGreaterThanOrEqual(4.4)
    expect(r).toBeLessThanOrEqual(4.6);
  })

  test('simpson', () => {
    const l = (x:number) => F.polynomial(x, [0, 3, -1]);
    const r = I.generic(l, [0, 3], 1000, 'simpson')
    expect(r).toBeGreaterThanOrEqual(4.4)
    expect(r).toBeLessThanOrEqual(4.6);
  })
})
