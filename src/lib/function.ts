// from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/main/scala/ch/nexys/math/Function.scala
/**
 * linear function
 * @return mx +b
 * @param x 
 * @param m 
 * @param b 
 */
export const linear = (x: number, m: number, b: number) => polynomial(x, [b, m]);

/**
 * quadratic function
 * @param x 
 * @param a 
 * @param b 
 * @param c 
 * @return ax^2 + bx + c
 */
export const quadratic = (x: number, a: number, b: number, c: number) => polynomial(x, [c, b, a]);

export const polynomial = (x: number, a: number[]):number => {
  if (a.length === 0) {
    return 0;
  }

  return a.map((v, i)=> {
    return v*(x**i);  
  }).reduce((a, b) => a + b);
}