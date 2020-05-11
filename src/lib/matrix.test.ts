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