import * as I from './index';

test('import', () => {
  expect(typeof I.Loan).toEqual('object')
  expect(typeof I.Bond).toEqual('object')
  expect(typeof I.Option).toEqual('object')
})
