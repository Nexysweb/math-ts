import * as V from '../vector';
import * as E from './estimate';
import * as T from '../type';
import * as M from '../matrix';

import * as Regresion from './regression';

export { Regresion};

/**
 * computes covariance
 * @param  x: input vector 1
 * @param  y: input vector 2
 * @param  mux: sample mean of x
 * @param  muy: sample mean of y
 * @param  n: size of vector
 * @return sample covariane
 */
export const covarianceWMeans = (x: T.Vector, y: T.Vector, mux: number, muy: number, n:number):number => {
  const r = x.map((xi, i) => {
    const yi = y[i];
    return (xi - mux)*(yi- muy)
  }) 
  .reduce((a,b) => a+b);

  return r/(n-1);
}

export const covariance = (x: T.Vector, y: T.Vector):number => covarianceWMeans(x, y, V.mean(x), V.mean(y), x.length)
 

export const covarianceMatrix = (x:T.Matrix):T.Matrix => {
  const t = M.transpose(x);
  const nCol = t.length;

  // todo: take advantage that the matrix is symmetric and divide computation time by 2
  // https://en.wikipedia.org/wiki/Symmetric_matrix
  return new Array(nCol).fill(null).map((_, i) => {
    return new Array(nCol).fill(null).map((_, j) => {
      return covariance(t[i], t[j])
    })
  })
}

/**
 * computes correlation
 */
export const correlation = (x: T.Vector, y: T.Vector):number => covarianceWMeans(x,y, V.mean(x), V.mean(y), x.length)/(E.stddev(x)*E.stddev(y))

  /**
   * computes sample autocovariance  
   * @param x: input vector
   * @param k: lag
   * @patam n size of vector
   */
export const autocovarianceWithN = (x: T.Vector, k: number, n: number):number => {
  return covariance(x.slice(k), x.slice(0,n-k)) // ((n.toDouble-1)/n.toDouble)*
}

export const autocovariance = (x: T.Vector, k: number):number => autocovarianceWithN(x, k, x.length)

  
/**
 * sample autocorelation
 * @param k: lag
 * @param c0: autocorrelation at time 0
 * @return autoroccelationfor chosen lag
 */
const autocorrelationWithC0 = (x: T.Vector, k: number, c0: number):number => autocovariance(x, k)/c0;

export const autocorrelation = (x: T.Vector, k: number):number => autocorrelationWithC0(x, k, autocovariance(x, 0));

/**
 * comutes transition matrix
 */
export const markovProcess = (T: T.Matrix, x: T.Vector,  n: number = 1):T.Vector => {
  return [0]
}
/*
    // check if  Tcondiions are met
    if(
         T.cols == T.rows
      && T.cols == x.size
      && sum(x) == 1d
      && n>0
    ){
      (x.toDenseMatrix*T).toDenseVector
    }
    else{
      throw new IllegalArgumentException("must be positive")
    }
  }
  */

export const test = (mu: number, avg: number, s: number, n: number) => (avg - mu)/(s/Math.sqrt(n));

/**
   * abstract class for statistical tests
   */
interface StatTest {
  n: number,
  avg: number,
  dis: any,
  qt: number,
  alpha: number,
  interval: [number, number]
}

//const tTest = (y: number[], mu: number, sigma: number, confidence: number, distribution: number):StatTest => undefined