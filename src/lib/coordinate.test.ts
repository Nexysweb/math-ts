// adapted from
// https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/test/scala/math/CoordinatesTest.scala
import * as C from './coordinate';

test('toPolar', () => {
  const [x, y] = C.toPolar(3, 4)
  expect(x).toBeCloseTo(5)
  expect(y).toBeCloseTo(0.9272)
})

test('to cartesian', () => {
  const y = 6;
  const [x1, x2] = C.toCartesian(Math.sqrt(2)*y, Math.PI/4)
  expect(x1).toBeCloseTo(y)
  expect(x2).toBeCloseTo(y)
})

test('toCylindrical', () => {
  // taken from http://math.harvard.edu/~ytzeng/worksheet/0923_sol.pdf, ex5
  const y = [Math.sqrt(6), -Math.sqrt(6), -2];
	const x = C.toCylindrical(y[0], y[1], y[2]);
  const s = [2*Math.sqrt(3), -0.7853, -2];

  expect(x[0]).toBeCloseTo(s[0])
  expect(x[1]).toBeCloseTo(s[1])
  expect(x[2]).toBeCloseTo(s[2])
})

test('toSpherical', () => {
  // taken from http://math.harvard.edu/~ytzeng/worksheet/0923_sol.pdf, ex5
  const y = [Math.sqrt(6), -Math.sqrt(6), -2];
  const x = C.toSpherical(y[0], y[1], y[2]);
  const s = [4, -0.7853, 2*Math.PI/3];
  
  expect(x[0]).toBeCloseTo(s[0])
  expect(x[1]).toBeCloseTo(s[1])
  expect(x[2]).toBeCloseTo(s[2])
})

test('sphericalFromCylindrical', () => {
  // taken from http://math.harvard.edu/~ytzeng/worksheet/0923_sol.pdf, ex5
  const y = [2*Math.sqrt(3), -0.7853, -2];
  const x = C.toSphericalFromCylindrical(y[0], y[1], y[2]);
  const s = [4, -0.7853, 2*Math.PI/3];

  expect(x[0]).toBeCloseTo(s[0])
  expect(x[1]).toBeCloseTo(s[1]) // 7d*math.Pi/4d) <= what is in the solution 
  expect(x[2]).toBeCloseTo(s[2])
})

test('to cylindrical from spherical', () => {
  // taken from http://math.harvard.edu/~ytzeng/worksheet/0923_sol.pdf, ex5
  const y = [4, -0.7853, 2*Math.PI/3];
  const x = C.toCylindricalFromSpherical(y[0], y[1], y[2]);
  const s = [2*Math.sqrt(3), -0.7853, -2];

  expect(x[0]).toBeCloseTo(s[0])
  expect(x[1]).toBeCloseTo(s[1]) 
  expect(x[2]).toBeCloseTo(s[2])
})

test('to cartesian from spherical', () => {
  const s = [Math.sqrt(6), -Math.sqrt(6), -2]
  const sp = C.toSpherical(s[0], s[1], s[2])
  const x = C.toCartesianFromSpherical(sp[0], sp[1], sp[2])
  
  expect(x[0]).toBeCloseTo(s[0])
  expect(x[1]).toBeCloseTo(s[1]) 
  expect(x[2]).toBeCloseTo(s[2])
})
