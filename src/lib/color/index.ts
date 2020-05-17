export const toColor = (r:number, g:number, b:number):number => {

  const hg = g << 8;
  const hb = b << 16;

  return hg + hb + r;
}

export const toUnitHex = (i:number):string => {
  if (i<0 || i > 15) {
    throw Error('bound conditions not respected')
  }

  if (i < 10) {
    return String(i);
  }

  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  return arr[i-10];
}

// todo move to utils and optimize
export const toHex = (i:number):string => {
  const a = i%16;
  const b = (i >> 4)%16;
  const c = (i >> 8)%16;
  const d = (i >> 12)%16;
  const e = (i >> 16)%16;
  const f = (i >> 20)%16;  

  return  toUnitHex(f) + toUnitHex(e) + toUnitHex(d) + toUnitHex(c) + toUnitHex(b) + toUnitHex(a);
}
