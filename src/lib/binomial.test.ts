// from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/test/scala/math/BinomialSpec.scala
import * as B from './binomial';

test('binomial recurrent', () => {
	expect(B.coefficientR(1,1)).toEqual(1)
  expect(B.coefficientR(3,3)).toEqual(1)
	expect(B.coefficientR(6,4)).toEqual(15)
})

test('binomial', () => {
	expect(B.coefficient(1,1)).toEqual(1)
  expect(B.coefficient(3,3)).toEqual(1)
	expect(B.coefficient(6,4)).toEqual(15)
})