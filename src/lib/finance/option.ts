
/**
* payoff of a call option (for buyer)
* @param s: strike price at maturity
* @param x: strike price of option
*/
export const payoffCall = (s: number, x: number) => Math.max(0, s-x)

/**
* payoff of a put option (for buyer)
* @param s: strike price at maturity
* @param x: strike price of option
*/
export const payoffPut = (s: number, x: number) => Math.max(0, x-s)

/**
* profit of option
* @param c: payoff on option
* @param x: premium
*/
export const profit = (c: number, x: number) => c - x
  