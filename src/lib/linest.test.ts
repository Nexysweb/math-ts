import * as Index from './linest';

test('linest 1', () => {
  const series:{x:number, y:number}[] = [];

  try {
    Index.linest(series)
  } catch (err) {
    expect(err.message).toEqual('series length must be greater than zero');
  }
});

test('linest 2', () => {
  const series = [
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
  ];

  const l = Index.linest(series);

  expect(l).toEqual({a: 1, b: 0});
  expect(Index.estimatedY([1, 2, 3], l)).toEqual([
    {y: 1, x: 1},
    {y: 2, x: 2},
    {y: 3, x: 3}
  ])
});

test('linest3 (wiki example)', () => {
  const xs = [1.47, 1.50, 1.52, 1.55, 1.57, 1.60, 1.63, 1.65, 1.68, 1.70, 1.73, 1.75, 1.78, 1.80, 1.83]
  const ys = [52.21, 53.12, 54.48, 55.84, 57.20, 58.57, 59.93, 61.29, 63.11, 64.47, 66.28, 68.10, 69.92, 72.19, 74.46]
  const s = xs.map((x, i) => {
    return {x, y: ys[i]}
  });

  const l = Index.linest(s);
  expect(l).toEqual({a: 61.272186542107434, b: -39.061955918841036});
})