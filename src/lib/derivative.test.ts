import * as D from './derivative';
import * as F from './function';

describe('differentiation', () => {
  test('linear', () => {
    const l = (x:number) => F.linear(x, 4, 2);
    const r = D.simple(3, l);

    expect(r).toBeLessThanOrEqual(4.01)
    expect(r).toBeGreaterThanOrEqual(3.99)
  })

  test('quadratic', () => {
    const l = (x:number) => F.quadratic(x, 2, 3, 1);
    const r = D.simple(3, l);

    expect(r).toBeLessThanOrEqual(15.001)
    expect(r).toBeGreaterThanOrEqual(14.999)
  })
})
