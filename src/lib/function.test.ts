// from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/test/scala/math/EquationSpec.scala
import * as F from './function';

test('linear', () => {
  expect(F.linear(3, 5, 2)).toEqual(17)
})

test('quadratic', () => {
  expect(F.quadratic(4, 2, 3, 1)).toEqual(45)
})

test('polynomial', () => {
  // must equal = 1 + 2 *2 + 3 *2^2 +4*2^3"
  expect(F.polynomial(2, [1,2,3,4])).toEqual(49)
})

test('polynomial 2', () => {
  // must equal = -x(x-x0), max at x0/2
  expect(F.polynomial(0, [0,3,-1])).toEqual(0)
  expect(F.polynomial(3, [0,3,-1])).toEqual(0)
  expect(F.polynomial(1.5, [0,3,-1])).toEqual(9/4)
})
