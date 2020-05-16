// taken from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/test/scala/math/RegressionSpec.scalaconst
import * as T from '../type';
import  Anova from './anova';
import Linear from './regression'
import * as M from '../matrix';


const x:T.Vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const y:T.Vector = [44.66, 47.28, 48.4, 49.48, 49.39, 49.5, 49.76, 51.6, 52.73, 51.5];
const n = x.length
const L = new Linear(M.transpose([new Array(n).fill(1), x]), y);

test('result of linear regression', () => {
  expect(L.a[0][0]).toBeCloseTo(45.541)
  expect(L.a[1][0]).toBeCloseTo(.707)
})

const f = M.transpose(L.estimateY())[0];

const a = new Anova(y, f);
const correlation = a.correlation();

describe('anova', () => {
  test('df', () => {
    expect(a.dfr).toEqual(1)
    expect(a.dfe).toEqual(8)
    expect(a.dft).toEqual(9)
  })

  test('r square', () => {
    expect(a.rsq).toBeCloseTo(0.851, 3)
    expect(a.r).toBeCloseTo(correlation)
    expect(a.radj).toBeCloseTo(0.833, 3)
    expect(a.se).toBeCloseTo(.948, 3)
  })

  test('ss', () => {
    expect(a.rss + a.ess).toBeCloseTo(a.tss)
    expect(a.rss).toBeCloseTo(41.241, 3)
    expect(a.tss).toBeCloseTo(48.438, 3)
    expect(a.ess).toBeCloseTo(7.197, 3)
  })

  expect(correlation).toBeCloseTo(.923, 3)

  expect(a.fStat).toBeCloseTo(45.843, 3)

  expect(a.fTestPVal()).toBeCloseTo(0)
})