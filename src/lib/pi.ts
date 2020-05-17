import * as T from './type';
/* numerical approximation for pi computation */
export const montecarlo = (n: number):number => {
  if (n<1) {
    throw Error(`n miust be great than zero`)
  }

  let z = 0 ;

  for (let i = 0; i<n; i++) {
    const x = Math.random();
    const y = Math.random();

    const r = Math.sqrt(x**2 + y**2);

    if (r < 1) {
      z += 1
    }
  }

  return 4/n*z;
}