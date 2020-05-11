export class Complex {
  x:number;
  y:number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  multiply(c:Complex):Complex {
    const x1 = c.x * this.x;
    const y1 = c.x * this.y;
    const y2 = c.y * this.x;
    const x2 = c.y * this.y;

    return new Complex(x1 - x2, y1 + y2);
  }

  sum(c:Complex):Complex {
    return new Complex(c.x + this.x, c.y + this.y)
  }
}

export const exp = (theta:number):Complex => {
  const x = Math.cos(theta);
  const y = Math.sin(theta);

  return new Complex(x, y);
}