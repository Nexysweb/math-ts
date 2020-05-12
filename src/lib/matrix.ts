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

/**
 * inversse
 * @see http://web2.slc.qc.ca/pcamire/201-NYC-05/pdf%20of%20videos/6/matrix_inverse_algorithm.pdf
 */

 export const squareConditions = (t:T.Matrix):number => {
  const n = t.length;
  if (n === 0) {
    throw Error('number of rows must be greatere than zero')
  }
  const m = t[0].length;

  if (n !== m) {
    throw Error('number of rows must equal number of columns')
  }

  return n
}

 /**
  * deteminant
  */
export const determinant = (t:T.Matrix):number => {
  const n = squareConditions(t);

  if (n === 1) {
    return t[0][0];
  }

  if (n === 2) {
    return t[0][0]*t[1][1] - t[0][1]*t[1][0]
  }

  if (n===3) {
    // 1
    const m1 = [
      [t[1][1], t[1][2]],
      [t[2][1], t[2][2]],
    ];

    const d1 = determinant(m1);

    // 2
    const m2 = [
      [t[1][0], t[1][2]],
      [t[2][0], t[2][2]],
    ];

    const d2 = determinant(m2)
    
    // 3
    const m3 = [
      [t[1][0], t[1][1]],
      [t[2][0], t[2][1]],
    ];

    const d3 = determinant(m3);

    return t[0][0]*d1 - t[0][1]*d2 + t[0][2]*d3;
  }

  return t[0].map((x, k) => {
    const m:T.Matrix = new Array(n - 1).fill(null).map((row, i) => {
      return new Array(n -1).fill(null).map((column, j) => {
        const jk = j >= k ? j+1 : j;// (j + 1 + k)%(n);

        return t[i+1][jk]
      })
    })

    const d = determinant(m);

    return d*t[0][k]*(-1)**(k)
  })
  .reduce((x,y) => x + y)
}

export const gaussJordan = (l:T.Matrix) => {
  const n = squareConditions(l);

  // add identity matrix
  const m:T.Matrix = l.map((row, k) => {
    const i = new Array(n).fill(0);
    i[k] = 1;
    return row.concat(i as T.Vector)
  })

  const k = 0;

  for (let k = 0; k<n;k++) {
    // normalize first row
    m[k] = m[k].map(x => x/m[k][k])

    // substract 1st row to all other rows
    for (let i=0; i<n;i++) {
      if(i !== k) {
        m[i] = m[i].map((x, j) => x - m[i][k]*m[k][j])
      }
    }
  }

  /*
  // normalize second row
  m[1] = m[1].map(x => x/m[1][1])

  // substract 2nd row to all other rows
  for (let i=0; i<n;i++) {
    if(i !== 1) {
      m[i] = m[i].map((x, j) => x - m[i][1]*m[1][j])
    }
  }

  // normalize second row
  m[2] = m[2].map(x => x/m[2][2])

  // substract 2nd row to all other rows
  for (let i=0; i<n;i++) {
    if(i !== 2) {
      m[i] = m[i].map((x, j) => x - m[i][2]*m[2][j])
    }
  }*/

  // prepare is identity array (it should be filled with ones, otherwise singular matrix)
  const isIdentity = new Array(n);

  // remove identity matrix (and make sure it is an identity matrix)
  for(let i=0; i<n;i++) {
    isIdentity[i] = m[i][i];
    m[i] = m[i].filter((_, i) => i >= n)
  }

  if (isIdentity.reduce((a, b) => a + b) !== n) {
    throw Error('singularity')
  }

  return m;
}