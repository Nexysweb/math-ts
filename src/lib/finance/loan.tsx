// source: https://github.com/johnb8005/realestate/blob/master/realestate-math.ipynb
export const mortgageMultiplier = (r:number, n:number):number => {
  const  d = 1 - (1+r)**(-n)
  return r/d
}

/**
 * 
 * @param p 
 * @param r 
 * @param n 
 * ref: https://en.wikipedia.org/wiki/Mortgage_calculator#Monthly_payment_formula
 */
export const mortgageRepayment = (p:number, r:number, n:number) => p * mortgageMultiplier(r, n);

/**
 * repayment left at n
 * @param p interest due at timestep n
 * @param c monthly payment
 * @param r interest
 * @param n timestep
 */
export const dueAtN = (p:number, c:number, r:number, n:number):number =>p*(1+r)**n  - c*((1+r)**n -1)/r

/**
 * interest share of the monthly payment at n
 * @param p interest due at timestep n
 * @param c monthly payment
 * @param r interest
 * @param n timestep
 */
export const interestAtN = (p:number, c:number, r:number, n:number):number => dueAtN(p, c, r, n)*r;

/**
 * cumulative interest share of  all monthly payments until n
 * @param p interest due at timestep n
 * @param c monthly payment
 * @param r interest
 * @param n timestep
 */
export const cumulativeInterestAtN = (p:number, c:number, r:number, n:number):number => (p*r - c)*((1+r)**n-1)/r + c*n