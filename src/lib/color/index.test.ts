import * as C from './index';

test('toColor', () => {
  expect(C.toColor(0, 0, 0)).toEqual(0)
  // ff-ff-ff => f = 16 => ff = 16*16 
  expect(C.toColor(255, 255, 255)).toEqual(16777215)
})

test('toHex', () => {
  expect(C.toHex(0)).toEqual('000000')
  expect(C.toHex(16777215)).toEqual('ffffff')
})

test('toUnitHex', () => {
  expect(C.toUnitHex(3)).toEqual('3')
  expect(C.toUnitHex(11)).toEqual('b')
})