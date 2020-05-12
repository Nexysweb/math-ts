type Method = 'simpson' | 'trapezoidal' | 'rectangle'

/**
 * Numerical integration
 * @param f function to be evaluated
 * @param a interval [a,b]
 * @param n number of steps
 * @param method method
 */
export const generic = (f: (x:number) => number, a: [number, number], n: number, method: Method = "simpson"):number => {
  const dx:number = (a[1] - a[0])/n

  const evalFunc = (f: (x:number) => number, x: number, b: number, dx: number, g: (x:(x:number) => number, y:number, z:number) => number):number => {
    if(x > b){
      return 0
    }
    else{
      return g(f, x, dx) + evalFunc(f, x+dx, b, dx, g)
    }
  }

  return evalFunc(f, a[0], a[1], dx, getMethod(method))
}

const getMethod = (m:string) => {
  switch(m) {
    case 'simpson':
      return simpson;
    case 'trapezoidal':
      return trapezoidal;
    default:
      return rectangle
  }
}

/* Rectangle method - http://en.wikipedia.org/wiki/Rectangle_method */
const rectangle = (f: (x:number) => number, x: number, dx: number):number => f(x)*dx
/* Trapezoidal Method - http://en.wikipedia.org/wiki/Trapezoidal_rule */
const trapezoidal = (f: (x:number) => number, x: number, dx: number):number => (f(x)+f(x+dx))/2*dx
/* Simpson method  - http://en.wikipedia.org/wiki/Simpson%27s_rule */
const simpson = (f: (x:number) => number, x: number, dx: number):number => (f(x) + 4*f((2*x+dx)/2) + f(x+dx))*dx/6
