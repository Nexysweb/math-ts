import * as Options from './option';
/**
 * compute the profit and payoff for an option
 * call is 45
 * stock price is 50
 * call premium 3.5
 * put premium 2.5
 */
const x = 45
const s = 50
const pc = 3.5
const pp = 2.5

test('call, buyer', () => {
  const payoff = Options.payoffCall(s, x)
  expect(payoff).toEqual(5)
  expect(Options.profit(payoff, pc)).toEqual(1.5)
})

test('put, buyer', () => {
  const payoff = Options.payoffPut(50, 45) 
  expect(payoff).toEqual(0)
  expect(Options.profit(payoff, pp)).toEqual(-pp)
})