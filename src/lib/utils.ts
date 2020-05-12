// from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/main/scala/ch/nexys/math/Math.scala/*
/**
 * factorial function
 * @return f(n) = n!
 * @param n
 *  @param k: sometimes the following i required: n!/k! = n(n-1)(n-2)...(n-k)
 */
export const factorial = (n: number, k: number =1, r:number = 1): number => {
  if(n>=k){
    return factorial(n-1, k, n * r)
  }
  
  return r;
}

/**
 * division without rest
 * equivalent to floor(7/3)
 * 7 / 3 = 2
 * @param a 
 * @param b 
 */
export const divWoRest = (a: number, b: number = 2):number => (a - a%b)/b