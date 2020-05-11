import * as T from '../type';
import * as V from '../vector';

interface Estimate {
  n: number, mean: number, war: number, std: number
}

/**
 * Sample Estimates
 * returns sample mean and standard deviation
 * 
 */
export const estimate = (d: T.Vector):Estimate => {
  const n = d.length;
  const mean:number = V.mean(d);
  const war = 1/(n-1)*V.s(d.map(e => (e-mean)**2));

  /**
   * sample standard deviation
   * @see Bessel correction
   */
  const std:number = Math.sqrt(war);

  return { n, mean, war, std };
}

export const stddev = (d: T.Vector) => estimate(d).std;



