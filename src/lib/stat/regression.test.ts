import * as M from '../matrix';
import * as T from '../type';
import * as R from './regression';

describe('example from https://www.displayr.com/what-is-linear-regression/', () => {
  const sales:T.Vector = [651, 762, 856, 1063, 1190, 1298, 1421, 1440, 1518]
  const year:T.Vector = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const advertising:T.Vector = [23, 26, 30, 34, 43, 48, 52, 57, 58]
  const n = advertising.length
  const ones:T.Vector = new Array(n).fill(1);

  test('simple regression', () => {
    const xt:T.Matrix = [
      ones,
      advertising
    ]

    const x = M.transpose(xt);
    const b = R.regression(x, sales)

    expect(b[0][0]).toBeCloseTo(167.68)
    expect(b[1][0]).toBeCloseTo(23.42)
  })

  test('multiple regression', () => {
    const xt:T.Matrix = [
      ones,
      year,
      advertising
    ]

    const x = M.transpose(xt);
    const b = R.regression(x, sales)

    expect(b[0][0]).toBeCloseTo(323.54)
    expect(b[1][0]).toBeCloseTo(46.6)
    expect(b[2][0]).toBeCloseTo(13.99)
  })
})

describe('example from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/test/scala/math/RegressionSpec.scala', () => {
  test('very simple regression', () => {
    const xt:T.Matrix = [
      [1, 1, 1],
      [1, 2, 3]
    ]

    const x = M.transpose(xt);
    const b = R.regression(x, [3, 5, 7])

    expect(b[0][0]).toBeCloseTo(1)
    expect(b[1][0]).toBeCloseTo(2)
  })
  
  test('simple regression', () => {
    const px = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const py = [44.66, 47.28, 48.4, 49.48, 49.39, 49.5, 49.76, 51.6, 52.73, 51.5];
    const n = px.length
    const ones:T.Vector = new Array(n).fill(1);

    const xt:T.Matrix = [
      ones,
      px
    ]

    const x = M.transpose(xt);
    const b = R.regression(x, py)

    expect(b[0][0]).toBeCloseTo(45.541)
    expect(b[1][0]).toBeCloseTo(.707)
  })
})