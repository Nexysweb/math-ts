import * as Timevalue from './timevalue';
import * as Zeros from '../zeros';

// todo:
//const duration: number = 0

//const macaulayBondDuration = (cf: number, y: number, k: number, t: number):number => 0

//const convexity= 0

/*
c = coupon payment 
n = number of payments 
i = interest rate, or required yield 
m = value at maturity, or par value 
p = price
*/
export const price = (c: number, n: number, i: number, m: number): number => m*Timevalue.pv(i, n) + c*Timevalue.pvMulti(i, n)

export const yieldToMaturity = (c: number, n: number, m: number, p: number):number => {
  const  f = (x:number):number => -p +price(c, n, x, m)
  return Zeros.secant([-.2, 1.5], f)
}

