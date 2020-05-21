import * as L from './loan';

test('mortgageRepayment 1', () => {
  const p = 100000
  const r = 3.92/100/12
  const N = 25*12
  expect(L.mortgageRepayment(p, r, N)).toBeCloseTo(523.4296)
})

test('mortgageRepayment 2', () => {
  const p = 1000000
  const r = 1/100/12
  const N = 20*12
  expect(L.mortgageRepayment(p, r, N)).toBeCloseTo(4598.9430)
})

describe('scenario', () => {
  // defining principal
  const pricehouse = 1000
  const downpaymentP = .2
  const fixCostP = .1
  const fixCost = pricehouse * fixCostP
  const totalCost = pricehouse*(1+fixCostP)
  const downpayment = totalCost*downpaymentP
  const principal = totalCost - downpayment

  test('principal', () => {
    expect(principal).toEqual(880.0)
  })

  //'yearly interest and monthly'
  const rYearly = .0339
  const r = rYearly / 12

  // loan duration
  const NYear = 30
  const N = NYear * 12;

  // income
  const rent = 15

  // cost
  const cost = rent * .15

  const profitMonth = rent - cost
  const profit = profitMonth * 12
  const returnYearly = profit/downpayment

  test('return yearly', () => {
    expect(returnYearly).toBeCloseTo(0.69545454545)
  })

  const monthlyRepayment = L.mortgageRepayment(principal, r, N)

  test('mortgage repayment', () => {
    expect(monthlyRepayment).toBeCloseTo(3.897757098)
  })

  const periods:number[] = new Array(N).fill(0).map((_x, i) => i);
  const interestRentShare:number[] = periods.map(i => L.interestAtN(principal, monthlyRepayment, r, i))// r*dueAtN(principal, monthlyRepayment, r, np.arange(N) )
  const equityRentShare = interestRentShare.map(interest => monthlyRepayment - interest);
  const totalInterest = monthlyRepayment * N - principal;

  test('interest repayment', () => {
    // checking the value of total interest
    expect(totalInterest).toBeCloseTo(523.192)
    // the sum of all interests instalments should equal the total interest
    expect(interestRentShare.reduce((a, b) => a + b)).toBeCloseTo(totalInterest)
    // cumulative interests function at time N should be equal to total interest
    expect(L.cumulativeInterestAtN(principal, monthlyRepayment, r, N)).toBeCloseTo(totalInterest)
  });

  test('cumulative interest function should equal sum of interest function 1', () => {
    const n = 5
    const a = interestRentShare.slice(0, n)
    const c = L.cumulativeInterestAtN(principal, monthlyRepayment, r, n)

    expect(a.reduce((a, b) => a + b)).toBeCloseTo(c)
  })

  test('cumulative interest function should equal sum of interest function 2', () => {
    const n = 10
    const a = interestRentShare.slice(0, n)
    const c = L.cumulativeInterestAtN(principal, monthlyRepayment, r, n)

    expect(a.reduce((a, b) => a + b)).toBeCloseTo(c)
  })
  
  test('capital repayment', () => {
    expect(equityRentShare.reduce((a,b) => a + b)).toBeCloseTo(principal)
  });
})