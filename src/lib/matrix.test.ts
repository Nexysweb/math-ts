import * as M from './matrix';
import * as T from './type';

const m1:T.Matrix = [
  [1, 2, 3],
  [4, 5, 6],
]

const m2:T.Matrix = [
  [7, 8, 9],
  [0, 1, 2],
]

const m3:T.Matrix = [
  [8, 10, 12],
  [4,  6,  8]
]

const m5:T.Matrix = [
  [7, 8],
  [9, 10],
  [11, 12],
]

const m6:T.Matrix = [
  [58, 64],
  [139, 154]
]

const m7:T.Matrix = [
  [1, 2, 3]
]

const m8:T.Matrix = [
  [58, 64]
]

const m9:T.Matrix = [
  [1, 4],
  [2, 5],
  [3, 6],
]

test('sum', () => {
  const m = M.sum(m1, m2);
  expect(m).toEqual(m3)
})

test('multiplication', () => {
  const m = M.multiplication(m1, m5);
  expect(m).toEqual(m6)
})

test('multiplication 1x3 and 3 x 2', () => {
  const m = M.multiplication(m7, m5);
  expect(m).toEqual(m8)
});

test('transpose', () => {
  expect(M.transpose(m1)).toEqual(m9);
})

test('determinant 2x2', () => {
  const m = [
    [1, 2],
    [3, 4]
  ]
  expect(M.determinant(m)).toEqual(-2)
})

test('determinant 3x3', () => {
  // https://www.youtube.com/watch?v=V3e7m-qFDFU
  const m = [
    [4,  -3, 0],
    [2, -1, 2],
    [1,  5, 7]
  ]
  expect(M.determinant(m)).toEqual(-32)
})

test('determinant 3x3', () => {
  // https://www.youtube.com/watch?v=pBZ98bm191o
  const m = [
    [-3,  1, 5],
    [2, 4, 1],
    [1,  3, 0]
  ]
  expect(M.determinant(m)).toEqual(20)
})

test('determinant 3x3', () => {
  // https://www.youtube.com/watch?v=pBZ98bm191o 
  const m = [
    [4,  -3, 5],
    [-6, 2, 1],
    [0, 1, 0]
  ]
  expect(M.determinant(m)).toEqual(-34)
})

test('determinant 4x4', () => {
  // https://www.youtube.com/watch?v=pBZ98bm191o
  const m = [
    [1, 0, 2, 0],
    [-4, -3, 1, 5],
    [-6, 2, 4, 1],
    [0, 1, 3, 0]
  ]
  expect(M.determinant(m)).toEqual(-32) // wrong in the video (-4 => 4), see comments
})

test('determinant 4x4', () => {
  // https://www.youtube.com/watch?v=vJLGWpob0T8
  const m = [
    [1, 2, 1, 0],
    [2, 1, 1, 1],
    [-1, 2, 1, -1],
    [1, 1, 1, 2]
  ]
  expect(M.determinant(m)).toEqual(-3)
})

test('determinant 5x5', () => {
  // expanded the above
  const m = [
    [1, 0, 0, 0, 0],
    [0, 1, 2, 1, 0],
    [0, 2, 1, 1, 1],
    [0, -1, 2, 1, -1],
    [0, 1, 1, 1, 2]
  ]
  expect(M.determinant(m)).toEqual(-3)
})

test('gauss jordan 2x2', () => {
  // https://www.mathsisfun.com/algebra/matrix-inverse.html
  const m = [
    [4, 7],
    [2, 6]
  ]

  const e = [
    [.6, -.7],
    [-.2, .4]
  ]

  const g = M.gaussJordan(m)

  // go through the matrix: rows and columns and check the values
  m.map((row, i) => {
    row.map((_, j) => {
      expect(g[i][j]).toBeCloseTo(e[i][j])
    })
  })
})

test('gauss jordan 3x3', () => {
  // ref: https://en.wikipedia.org/wiki/Gaussian_elimination#Finding_the_inverse_of_a_matrix
  const m = [
    [2, -1, 0],
    [-1, 2, -1],
    [0, -1, 2]
  ]

  const e = [
    [3/4, 1/2, 1/4],
    [1/2,   1, 1/2],
    [1/4, 1/2, 3/4]
  ]

  const g = M.gaussJordan(m)

  // go through the matrix: rows and columns and check the values
  m.map((row, i) => {
    row.map((_, j) => {
      expect(g[i][j]).toBeCloseTo(e[i][j])
    })
  })
})