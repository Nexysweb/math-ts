// https://en.wikipedia.org/wiki/Fast_Fourier_transform
import { exp, Complex } from './complex';

/**
 * discrete fourier transform
 * todo: implement FFT 
 * @param v vector of complex numbers
 */
export const fft = (v:Complex[]):Complex[] => {
  const N = v.length;

  if (N === 0) {
    return [];
  }

  return v.map((_, k) => {
    return v.map((x, i) => {
      return x.multiply(exp(2*Math.PI*k*i/N));
    }).reduce((c1, c2) => c1.sum(c2))
  });
}