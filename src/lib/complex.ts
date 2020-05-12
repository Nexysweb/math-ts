export class Complex {
  x:number;
  y:number;
  constructor(x: number, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * @see constructor overload: https://stackoverflow.com/questions/12702548/constructor-overload-in-typescript
   * @param mod 
   * @param phase 
   */
  static fromModAndPhase(mod: number, phase: number):Complex {
    const x = Math.sin(phase)*mod;
    const y = Math.cos(phase)*mod;

    // z = |z|exp(jarg(z))
    return new Complex(x, y);
  }

  multiply(c:Complex | number):Complex {
    if (typeof c === 'number') {
      return this.multiply(new Complex(c));
    }

    const x1 = c.x * this.x;
    const y1 = c.x * this.y;
    const y2 = c.y * this.x;
    const x2 = c.y * this.y;

    return new Complex(x1 - x2, y1 + y2);
  }

  sum(c:Complex):Complex {
    return new Complex(c.x + this.x, c.y + this.y)
  }

  modulus():number {
    return Math.sqrt(this.x**2 + this.y**2);
  }

  argument():number {
    return Math.atan2(this.y,this.x);//Math.atan(this.y/this.x); //
  }
}

export const exp = (theta:number):Complex => {
  const x = Math.cos(theta);
  const y = Math.sin(theta);

  return new Complex(x, y);
}