
/**
 * Bissection method
 * condition f(x)f(y)<0 (they are of opposite sign)
 * todo: use match instead of if
 * 
 */
export const bissection = (f: (x: number) => number, x: number, y: number, precision: number = .0001, niterations: number = 1000):number => {
  const z:number = (x+y)/2
  const fz:number = f(z)

  if((fz*(1-precision) <= 0 && fz*(1+precision) >= 0) || niterations==0){
    return z
  }

  if(fz*f(x) < 0){
    return bissection(f, x, z, precision, niterations-1)
  }

  return bissection(f, z, y, precision, niterations-1)
}

export const newton = (x: number, f: (x:number) => number, df: (x:number) => number, precision: number = .0000000001, niterations: number = 1000):number => {
  const fx:number = f(x)
  //println(niterations+" "+fx)
  if(Math.abs(fx) <= precision || niterations==0){
    return x
  }
  
  return newton(x - fx/df(x), f, df, precision, niterations-1);
}

// can only be implemented once `Derivative` is implemented
//export const newtonNumeric = (x: number, f: (x:number) => number, precision: number = .0001, niterations: number = 1000): number = newton(x, f, Derivative.simple(_)(f, 0.00000001), precision, niterations-1)

/**
 * secant method
 * caution do not set x so that x._1 == x._2 otherwise will lead to Infty
 * @see https://en.wikipedia.org/wiki/Secant_method
 */
export const secant = (x: [number, number], f: (x:number) => number, precision: number = .0001, niterations: number = 1000):number => {
  const y = x[0] - f(x[0])*(x[0] -  x[1])/(f( x[0]) - f(x[1]))
  if(Math.abs(y-x[0]) <= precision || niterations==0){
    return y;
  }
  return secant([y, x[0]], f, precision, niterations-1)
}
