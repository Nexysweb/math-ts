import * as S from './series';

const epsilon = .000001

test('"geometric" should "infinite Geometric series"', () => {
  expect(S.geometricInfty(.5)).toEqual(2)
})

test('finite Geometric series', () => {
  expect(S.geometric(.1, 3)).toEqual(1.111)
  expect(S.geometric(.1, 0)).toEqual(1)
  expect(S.geometric(.1, 3, 1)).toBeCloseTo(.111)
})

test('derivative', () => {
  expect(S.geometricDerivative(3.2, 5)).toBeCloseTo(693.48)
})

test('fibonacci', () => {
  expect(S.fibonacci(6)).toEqual([1,1,2,3,5,8,13,21])
})
