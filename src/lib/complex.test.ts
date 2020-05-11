import * as C from './complex';

describe('complex exponential', () => {
  test('0', () => {
    const theta = 0;
    const c1 = C.exp(theta);
    expect(c1.x).toBeCloseTo(1);
    expect(c1.y).toBeCloseTo(0);
  });

  test('pi/6', () => {
    const theta = Math.PI/6;
    const c1 = C.exp(theta);
    expect(c1.x).toBeCloseTo(Math.sqrt(3)/2);
    expect(c1.y).toBeCloseTo(1/2);
  });

  test('pi/4', () => {
    const theta = Math.PI/4;
    const c1 = C.exp(theta);
    expect(c1.x).toBeCloseTo(Math.sqrt(2)/2);
    expect(c1.y).toBeCloseTo(Math.sqrt(2)/2);
  });

  test('pi/3', () => {
    const theta = Math.PI/3;
    const c1 = C.exp(theta);
    expect(c1.x).toBeCloseTo(1/2);
    expect(c1.y).toBeCloseTo(Math.sqrt(3)/2);
  });

  test('pi/2', () => {
    const theta = Math.PI/2
    const c1 = C.exp(theta);
    expect(c1.x).toBeCloseTo(0);
    expect(c1.y).toBeCloseTo(1);
  });

  test('-pi/2', () => {
    const theta = -Math.PI/2
    const c1 = C.exp(theta);
    expect(c1.x).toBeCloseTo(0);
    expect(c1.y).toBeCloseTo(-1);
  });

  test('pi', () => {
    const theta = Math.PI
    const c1 = C.exp(theta);
    expect(c1.x).toBeCloseTo(-1);
    expect(c1.y).toBeCloseTo(0);
  });

  test('-pi', () => {
    const theta = -Math.PI
    const c1 = C.exp(theta);
    expect(c1.x).toBeCloseTo(-1);
    expect(c1.y).toBeCloseTo(0);
  });
});

test('sum', () => {
  const c1 = new C.Complex(1, 2)
  const c2 = new C.Complex(3, 4)
  const c3 = new C.Complex(4, 6)

  expect(c1.sum(c2)).toEqual(c3)
});

// https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex/x2ec2f6f830c9fb89:complex-mul/a/multiplying-complex-numbers
// multiplying two complex numbers
test('multiple', () => {
  const c1 = new C.Complex(1, 4)
  const c2 = new C.Complex(5, 1)
  const c3 = new C.Complex(1, 21)

  expect(c1.multiply(c2)).toEqual(c3)
});