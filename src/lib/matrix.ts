import * as T from './type';

/**
 * 
 * @param m1 matrix 1
 * @param m2 matrix 2
 * @return nrow and ncol
 */
const errorsSum  = (m1: T.Matrix, m2: T.Matrix):[number, number] => {
  const nRow = m1.length;

  if (nRow === 0) {
    throw Error('matrix is empty')
  }

  if (nRow !== m2.length) {
    throw Error('same number of lines is expected')
  }

  const nCol = m1[0].length;

  if (nCol !== m2[0].length) {
    throw Error('same number of columns is expected')
  }

  return [nRow, nCol];
}

export const sum = (m1: T.Matrix, m2: T.Matrix) => {
  errorsSum(m1, m2);

  return m1.map((row, i) => {
    return row.map((cell, j) => {
      return cell + m2[i][j];
    })
  })
}

/**
 * 
 * @param m1 matrix 1 (n x m)
 * @param m2 matrix 2 (m x p)
 * @return [n, m, p]
 */
const errorsMultiplication  = (m1: T.Matrix, m2: T.Matrix):[number, number, number] => {
  const nRow1 = m1.length;
  const nRow2 = m2.length;

  if (nRow1 === 0) {
    throw Error('matrix 1 is empty')
  }

  if (nRow2 === 0) {
    throw Error('matrix 2 is empty')
  }

  const nCol1 = m1[0].length;
  const nCol2 = m2[0].length;

  //console.log(nRow1 + ' ' + nCol1 + ' ' + nRow2 + ' ' + nCol2)

  if (nCol1 !== nRow2) {
    throw Error('check matrix dimensions: (n x m)(m x p) = (n x p)')
  }

  return [nRow1, nCol1, nCol2];
}

export const shape = (v:T.Vector, n: number, m: number):T.Matrix => {
  return new Array(n).fill([]).map(x => {
    return v.splice(0, m);
  });
}

/**
 * multiplies matrix 1 with matrix 2
 * @see https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
 * @param m1 : matrix 1 (left)
 * @param m2 : matrix 2 (right)
 */
export const multiplication = (m1: T.Matrix, m2: T.Matrix) => {
  const [n, m, p] = errorsMultiplication(m1, m2);

  const v:T.Vector = new Array(n*p).fill(0);
  //console.log(v)
  //console.log([n, m, p])

  for(let i = 0; i < n; i++) {
    //console.log('' + i)
    for(let j = 0; j < p; j++) {
      let w = 0;
      for (let k = 0; k < m; k++) {
        w +=m1[i][k] * m2[k][j];
      }

      v[j+n*i] = w;
    }    
  }

  return shape(v, n, p);
}

/**
 * 
 * @param m matrix to be transposed
 */
export const transpose = (m:T.Matrix):T.Matrix => {
  const nRows = m.length;
  const nCols = m[0].length;

  return new Array(nCols).fill(null).map((_,i) => {
    return new Array(nRows).fill(null).map((_,j) => {
      return m[j][i];
    })
  })
}