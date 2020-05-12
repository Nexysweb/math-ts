import * as F from './fft';
import * as C from './complex';

// example taken from http://fourier.eng.hmc.edu/e59/lectures/signalsystem/node18.html
test('fft', () => {
  const vecIn = [0,0,2,3,4,0,0,0];
  const vecComplex = vecIn.map(x => new C.Complex(x));

  const out = F.fft(vecComplex);

  const expectedX = [3.18, -2.16,  .71, -.66, 1.06, -.66, .71, -2.16];
  // sign problem here
  const expectedY = [0.00, 1.46, -1.06, 0.04, 0, -.04, 1.06, -1.46];

  out.map((c, i) => {
    expect(c.x).toBeCloseTo(expectedX[i])
    expect(c.y).toBeCloseTo(expectedY[i])
  })
})