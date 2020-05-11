import * as O from './vector';
import * as T from './type';

const v1:T.Vector = [1, 2, 3];
const v2:T.Vector = [4, 5, 6];
const v3:T.Vector = [5, 7, 9];
const v4:T.Vector = [-3, 6, -3];


test('sum', () => {
  expect(O.sum(v1, v2)).toEqual(v3);
})

test('dot product', () => {
  expect(O.dotProduct(v1, v2)).toEqual(21);
})

test('cross product', () => {
  expect(O.crossProduct(v1, v2)).toEqual(v4);
})

test('scalar', () => {
  expect(O.scalar([3, 4])).toEqual(5);
  expect(O.scalar(v1)).toEqual(3.3019272488946267);
})

test('mean', () => {
  expect(O.mean([1, 2, 3, 4, 5])).toEqual(3);
})

test('sum (s)', () => {
  expect(O.s([1, 2, 3, 4, 5])).toEqual(15);
})