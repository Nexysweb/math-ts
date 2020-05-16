import * as T from './type';

export const s = (v: T.Vector) => {
  if (v.length === 0) {
    return 0
  }

  return v.reduce((x, y) => x + y);
}

/**
 * @return sums vector with a scalar
 * @param v : vector
 * @param s : scalar
 */
export const sumScalar = (v: T.Vector, s: number):T.Vector => {
  return v.map(x => x + s);
}

export const sum = (v1: T.Vector, v2: T.Vector | number):T.Vector => {
  if (typeof v2 === 'number') {
    return sumScalar(v1, v2);
  }

  const v1l = v1.length;

  if (v1l === 0) {
    throw Error('vector length must be greater than 0')
  }

  if (v1l !== v2.length) {
    throw Error('vectors must of the the same length');
  }

  return v1.map((x, i) => {
    return x + v2[i]
  });
}

export const dotProduct = (v1: T.Vector, v2: T.Vector) => s(sum(v1, v2));

export const crossProduct = (v1: T.Vector, v2: T.Vector) => {
  const v1l = v1.length;


  if (v1l !== 3) {
    throw Error('vector length must be 3')
  }

  if (v1l !== v2.length) {
    throw Error('vectors must of the the same length');
  }

  return [
    v1[1]*v2[2] - v1[2]*v2[1],
    v1[2]*v2[0] - v1[0]*v2[2],
    v1[0]*v2[1] - v1[1]*v2[0]
  ]
}

export const scalar = (v:T.Vector):number => {
  const vl = v.length;

  if (vl === 0) {
    return 0;
  }

  const r = v.reduce((x, y) => x + y**vl, 0);

  return r**(1/vl);
}

export const mean = (d:T.Vector):number => {
  if (d.length === 0) {
    throw Error('can\'t be of length 0')
  }

  const n = d.length;

  return s(d) / n
}