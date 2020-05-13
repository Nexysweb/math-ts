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