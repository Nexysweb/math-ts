/**
 * beginning at i=0 until n  \sum_{i=f}^n r^i = (1-r^(n+1))/(1-r)
 * @param x: main arg
 * @param n: until
 * @param f: beginning at (by default 0)
 */
export const geometric = (x: number, n: number, f: number = 0):number => {
  const r = (1 - (x**(n+1)))/(1-x);

  if(f !== 0){
    return r - geometric(x, f-1)
  }
  
  return r;
}

/**
 * @see http://www.wolframalpha.com/input/?i=d%2Fdx+%281-x%5E%28n%2B1%29%29%2F%281-x%29
 *
 */
export const geometricDerivative = (x: number, n: number, f: number = 0):number => {
  const r = (1 - (1 + n)*(x**n) + n*(x**(1 + n)))/((1 - x)**2)

  if(f !== 0){
    return r - geometricDerivative(x, f-1)
  }
  
  return r
}

export const geometricInfty = (x: number):number => 1/(1-x)

export const fibonacci = (n: number, f: number[] = [1,1]):number[] => {
  if (n === 0) {
    return f;
  }

  const [a, b] = f.slice(f.length-2, f.length);
  const c = a + b;
  f.push(c);

  return fibonacci(n-1, f)//f:+f.takeRight(2).reduceLeft( _ + _ ))
}

