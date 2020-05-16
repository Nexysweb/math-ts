import * as I from './index';
import * as T from '../type';
import * as M from '../matrix';

test('import regression', () => {
  expect(typeof I.Regresion).toEqual('object')
})

test('covariance" should "return covariance matrix"', () => {
  const x0:T.Vector = [4.0, 4.2, 3.9, 4.3, 4.1];
  const x1: T.Vector = [2.0, 2.1, 2.0, 2.1, 2.2];
  const x2:T.Vector =  [0.60, 0.59, 0.58, 0.62, 0.63]
  const myMatrix:T.Matrix = [
    x0,x1,x2
  ]

  const cov:T.Matrix = [
    [.025, .0075, .00175],
    [.0075, .007, .00135],
    [.00175, .00135, .00043]
  ];

  const covComputed = I.covarianceMatrix(M.transpose(myMatrix));

  covComputed.map((xy,i) => {
    xy.map((x, j) => {
      expect(x).toBeCloseTo(cov[i][j])
    })
  });

  expect(I.covariance(x0, x0)).toEqual(cov[0][0]);
  expect(I.covariance(x0, x1)).toBeCloseTo(cov[0][1]);
})

const v:T.Vector = [-0.949916682,-0.228570667,0.449615074,0.999088839,0.789921894,0.03013303,0.057418309,0.110043402,-0.885445004,0.397819842,0.941062657,0.136312701,-0.045000552,0.801760487,0.058670507,-0.415169236,-0.193271423,-0.225762813,-0.621268984,0.247028739,-0.725443179]

test('covariance vector returns Excel result', () => {
  const r = I.covariance(v, v)
  const e = 0.324929798
  expect(r).toBeCloseTo(e, 8)
})

test('correlation returns Excel result', () => {
  const r = I.correlation(v, v)
  const e =1
  expect(r).toBeCloseTo(e, 8)
})

test('autocovariance vector returns Excel result', () => {
  const r = I.autocovariance(v, 0)
  const e = 0.324929798
  expect(r).toBeCloseTo(e, 8)
})

test('autocorrelation returns Excel result', () => {
  const r = I.autocorrelation(v, 0)
  const e = 1.0
  expect(r).toBeCloseTo(e, 8)
})

test('autocorrelation lagged by one', () => {
  const r = I.autocorrelation(v, 1)
  const e = I.autocovariance(v, 1)/I.autocovariance(v, 0)
  expect(r).toBeCloseTo(e, 8)
})