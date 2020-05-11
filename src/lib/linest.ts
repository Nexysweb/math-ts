/**
 * find coefficient for simple regression
 * y = ax + b
 */
export const linest = (series:{x: number, y: number}[]):{a: number, b: number} => {
  const n = series.length;

  if (n < 1) {
   throw Error('series length must be greater than zero')
  }

  const sumY = series.map(_ => _.y).reduce((a, b) => a + b);
  const sumX = series.map(_ => _.x).reduce((a, b) => a + b); 
  const sumX2 = series.map(_ => _.x**2).reduce((a, b) => a + b);
  const sumXY = series.map(_ => _.x*_.y).reduce((a, b) => a + b);

  const denom = n*sumX2 - sumX**2;
  const a = (n*sumXY - sumY*sumX)/denom;
  const b = (sumY*sumX2 - sumX*sumXY)/denom;
  
  return {a, b}
}

export const estimatedY = (xs:number[], {a, b}:{a:number, b:number}):{x:number, y:number}[] => xs.map(x => {
  return {y: a * x + b, x};
});