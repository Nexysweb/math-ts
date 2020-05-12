//from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/test/scala/math/MathSpec.scala
import * as U from './utils';

test('factorial', () => {
  //"Missing ones" should "Factorial of (3) must be 6 " in{
	expect(U.factorial(3)).toEqual(6)
	expect(U.factorial(6)).toEqual(720)
	expect(U.factorial(6, 4)).toEqual(6*5*4)
})

test('factorial', () => {
	//it should "Division without rest" in{
  expect(U.divWoRest(7, 3)).toEqual(2)
	expect(U.divWoRest(10, 3)).toEqual(3)
})