import * as D from './degree';

test('to degree', () => {
  expect(D.toDegree(Math.PI)).toEqual(180);
});

test('to degree', () => {
  expect(D.toRad(180)).toEqual(Math.PI);
});