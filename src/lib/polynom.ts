interface Coordinate {
  x: number,
  y: number
}

interface LinEq {
  m: number,
  q: number
}

export const equationFromSegment = (p1:Coordinate, p2:Coordinate):LinEq => {
  const m = (p2.y - p1.y)/(p2.x - p1.x);
  const q = p1.y - m * p1.x;

  return { m, q };
}

export const polyY = (x:number, {m, q}:LinEq):number => m*x + q;
export const polyX = (y:number, {m, q}:LinEq):number => (y - q ) / m;

export const solve2nd = (a:number, b:number, c:number):[number, number] => {
  const d = b**2 - 4*a*c;

  const x1 = (-b + Math.sqrt(d))/(2*a);
  const x2 = (-b - Math.sqrt(d))/(2*a);

  return [x1, x2];
}