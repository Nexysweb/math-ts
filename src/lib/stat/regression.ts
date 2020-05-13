// http://www.maths.qmul.ac.uk/~bb/SM_I_2013_LecturesWeek_6.pdf
import * as M from '../matrix'
import * as T from '../type';

export const regression = (x: T.Matrix, py: T.Vector) => {
  const y = M.transpose([py])
  const xt = M.transpose(x)
  const z = M.inverse(M.multiplication(xt, x))
  const preb = M.multiplication(xt, y)

  return M.multiplication(z, preb)
}