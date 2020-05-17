// taken from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/test/scala/math/RegressionSpec.scalaconst
// second set of tests
import * as T from '../type';
import  Anova from './anova';
import Linear from './regression'
import * as M from '../matrix';


const x:T.Vector = [2.43,2.26,2.15,2.07,2.03,2.45,2.36,2.44,2.52,2.74,2.98,2.93,2.69,2.63,2.63,3.08,3.24,6.22,6.12,6.33,4.92,6.81,5.88,6.61,6.28,7.61,6.05]
const y:T.Vector = [1.27,1.19,1.10,1.10,1.05,1.00,0.98,1.09,1.12,1.18,1.16,1.24,1.03,1.08,1.15,1.33,1.08,1.57,2.55,3.02,2.54,2.15,2.02,2.25,2.52,3.11,2.50];
const n = x.length
const L = new Linear(M.transpose([new Array(n).fill(1), x]), y);

test('result of linear regression', () => {
  expect(L.a[0][0]).toBeCloseTo(.2825)
  expect(L.a[1][0]).toBeCloseTo(.3358)
})

const f = M.transpose(L.estimateY())[0];

const a = new Anova(y, f);
const correlation = a.correlation();

describe('anova', () => {
  test('df', () => {
    expect(a.dfr).toEqual(1)
    expect(a.dfe).toEqual(25)
    expect(a.dft).toEqual(26)
  })

  test('r square', () => {
    expect(a.rsq).toBeCloseTo(0.8345, 3)
    expect(a.r).toBeCloseTo(correlation)
    expect(a.radj).toBeCloseTo(0.8279, 3)
    expect(a.se).toBeCloseTo(.2888, 3)
  })

  test('ss', () => {
    expect(a.rss + a.ess).toBeCloseTo(a.tss)
    expect(a.rss).toBeCloseTo(10.5106, 3)
    expect(a.tss).toBeCloseTo(12.5952, 3)
    expect(a.ess).toBeCloseTo(2.0846, 3)
  })

  expect(correlation).toBeCloseTo(0.9135, 3)

  test('f-test', () => {
    expect(a.fTest()).toBeCloseTo(126.0481, 3)
    //expect(a.fTest().pValue).toBeCloseTo(0)
  })

  test('sigma', () => {
    const sigma = a.sigma(L.z)
    expect(sigma[0][0]).toBeCloseTo(.1304, 3)
    expect(sigma[1][1]).toBeCloseTo(.0299, 2)

    expect(L.a[0][0]/sigma[0][0]).toBeCloseTo(2.1665, 3)
    expect(L.a[1][0]/sigma[1][1]).toBeCloseTo(11.2271, 3)
  })  
})