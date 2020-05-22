import * as Zeros from '../zeros';

/**
 * 
 *	present value
  *	PV/FV = 1/(1 + i/y)^n
*/
export const pv = (r: number, n: number):number => 1/fv(r, n)//pow((1+r/y), -n)

/**
 *	future value
  *	FV/PV = (1 + i/y)^n
*/
export const fv = (r: number, n: number) => (1+r)**n

/**
 *  Sum of same cash flow over years 
 *	returns sum of present value interest (begins at 1)
  *	\sum_{i=1}^N 1/(1+r)^i
*/
export const pvMulti = (r: number, n: number) => (1 - (1+r)**(-n))/r


export const irr = (p: number, n: number) => {
  const f = (x:number):number => -p +pvMulti(x, n)

  return Zeros.secant([-.2, 1.5], f)
}
  
/**
 * perpetuity
 * pyMulti when n -> infinity
 */
export const perpetuity = (r: number, y: number = 1) => 1/r/y

export const fvUneven = (cf: [number, number][], r: number, s: number = 0): number => cfUneven(cf, r, (x:number, y:number) => pv(x, y), s)

export const pvUneven = (cf: [number, number][], r: number, s: number = 0): number => cfUneven(cf, r, (x:number, y:number) => pv(x, y), s)

export const cfUneven = (cf: [number, number][], r: number, f: (x:number, y: number) => number, s: number = 0):number => {
  if (cf.length === 0) {
    return s;
  }

  const tail = cf.slice(1, cf.length);
  const [c, n] = cf[0];

  return cfUneven(tail, r, f, s+c*f(r, n))
}