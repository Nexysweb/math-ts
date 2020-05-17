import * as T from '../type';
import * as Vector from '../vector';
import * as I from './index';

const sumSq = (x: T.Vector, d: number = 0):number => {
  return x.map((fx) => {
    return (fx - d)**2
  })
  .reduce((a, b) => a + b)
}

const diffSq = (x: T.Vector, y: T.Vector):number => x.map((xi, i) => {
    return (xi - y[i])**2
  })
  .reduce((a, b) => a + b)

// taken from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/main/scala/ch/nexys/regression/Anova.scala
/*
  ANOVA: Analysis of variance
  x has two timeseries stored in a matrix [2, n]: predicted `y` (as `f`) nand input `y`
  http://en.wikipedia.org/w/index.php?title=Coefficient_of_determination&redirect=no
*/
export default class Anova {
  n:number;
  p:number;
  dfr:number;
  dft: number;
  dfe: number;
  y:T.Vector;
  f:T.Vector;
  yAvg: number;
  fAvg:number;
  yCtr:T.Vector;
  fCtr:T.Vector;
  tss:number;
  rss:number;
  ess:number;
  // r-squared
  rsq:number;
  // r
  r:number

  // root mean square
  rms:number;
  // error mean square
  ems:number;
  // total mean square
  tms:number;

  // sum error?
  se:number;

  radj:number;

  constructor (y: T.Vector, f: T.Vector, p: number = 1) {
    // vector length
    this.n = y.length;
    // degree of freedom
    this.dfr = p;
    this.p = p;
    
    if (this.n === 0 ) {
      throw Error('vectorslenght must be greater than zero')
    }
    
    if (this.n !== f.length) {
      throw Error('vectors are not of the same size, object cannot be used')
    }

    this.y = y;
    this.f = f;

    this.dft = this.n - 1;
    this.dfe = this.dft - this.dfr;

    this.yAvg = Vector.mean(y);
    this.fAvg = Vector.mean(f);
    this.yCtr = y.map(yi => yi -this.yAvg);
    this.fCtr = f.map(fi => fi -this.fAvg)
    
    this.rss = sumSq(this.f, this.yAvg);
    this.ess = diffSq(this.y, this.f);
    this.tss = sumSq(this.y, this.yAvg);

    this.rsq = 1-this.ess/this.tss;
    this.r = Math.sqrt(this.rsq);

    this.rms = this.rss/this.dfr;
    this.ems = this.ess/this.dfe;
    this.tms = this.tss/this.dft;

    this.se = Math.sqrt(this.ems);

    this.radj   = 1.0 - this.ems/this.tms // or 1.0-(1.0-rsq)*(n.toDouble-1.0)/(n.toDouble-p.toDouble-1.0)
  }

  correlation():number {
    return I.correlation(this.y, this.f);
  }

  
  fTest() {
    const stat = this.rms/this.ems;
    return stat;
   
    // generate sample from dist
    /*
     const n = 100
  todo
    const f:number[] = PD.rf(n, this.p, this.n-this.p-1)
    // count the number that are larger
    const m = f
      .map(x =>  (Math.sign(x - stat) + 1)/2)
      .reduce((a, b) => a + b)
    
    const pValue = m/n;

    return { stat, pValue }
  }*/
  }

  sigma(m: T.Matrix) {
    return m.map(row => {
      return row.map(cell => {
        return Math.sqrt(cell*this.ems)
      })
    })
  }

  /*
  todo
  student(studentConfidence = .95) {
    const v = this.n - this.p - 1
    return Dis.Studentt(v).inv(studentConfidence)

  }*/
}
