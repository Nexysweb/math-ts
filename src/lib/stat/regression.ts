// taken from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/main/scala/ch/nexys/regression/Linear.scala
// http://www.maths.qmul.ac.uk/~bb/SM_I_2013_LecturesWeek_6.pdf
import * as M from '../matrix'
import * as T from '../type';

/*
	finds best coefficient according to least square for liner regression

	solves:
			y		=  X 		a
			[n x 1]	= [n x m] [m x 1]
	
	Constructor #1: for y = mx +q (only one dimension)
	@params x_in: horizontal vector
	@params y_in: vertical vector

	Constructor #2: general case
	@params x: input matrix (with dummy column of ones, if wished)
	@params y: output
*/
export default class Linear{
  x:T.Matrix;
  y:T.Matrix;
  g:T.Matrix;
  z:T.Matrix;
  a:T.Matrix;


  constructor(x: T.Matrix, y: T.Matrix | T.Vector) {
    if(Array.isArray(y[0])) {
      this.x = x;
      this.y = y as T.Matrix;
    } else {
      this.x = x;
      this.y = M.transpose([y as T.Vector]);
    }

    const xt = M.transpose(this.x)
    // Grammian Matrix - http://en.wikipedia.org/wiki/Gramian_matrix
    this.g = M.multiplication(xt, this.x);
    this.z = M.inverse(this.g);
    const preb = M.multiplication(xt, this.y);
    this.a = M.multiplication(this.z, preb);
  }

  estimateY(x = this.x):T.Matrix {
    return M.multiplication(x, this.a)
  }
}

export const regression = (x: T.Matrix, py: T.Vector) => {
  const L = new Linear(x, py);
  return L.a;
}