/**
 * get derivative approx
 * @param x 
 * @param f 
 * @param delta :delta x value
 */
export const simple = (x: number, f: (x:number) => number, delta: number = .00001) => (f(x+delta) - f(x-delta))/(2*delta);
