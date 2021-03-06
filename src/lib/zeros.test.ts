import * as Z from './zeros';
import * as Function from './function';
import * as Series from './series';

const q:(x:number) => number = x => Function.quadratic(x, 1, 0, 0)
const l:(x:number) => number = x => Function.linear(x, 2,0);

describe('find zero', () => {
  test('bissection', () => {
    const b = Z.bissection(q, -10, 10);
    expect(b).toBeCloseTo(0);
  })

  test('newton', () => {
    const b = Z.newton(-10, q, l);
    expect(b).toBeCloseTo(0);
  })

  test('secant 1', () => {
    const b = Z.secant([-1, 2],  q);
    expect(b).toBeCloseTo(0);
  })

  test('secant 2', () => {
    const f = (x:number):number => 1.111 - Series.geometric(x, 3)
    const b = Z.secant([0.01, .1],  f);
    expect(b).toBeCloseTo(.1);
  })
})
