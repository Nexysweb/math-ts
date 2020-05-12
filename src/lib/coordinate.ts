/*
  coordinates transformation
*/
export const toPolar = (x: number, y: number):[number, number] => {
  const modulus = Math.sqrt(x**2 + y**2);
  const arg = Math.atan2(y, x);

  return [modulus, arg];
}

export const toCartesian = (x: number, y: number) => [x*Math.cos(y),x*Math.sin(y)];

export const toCylindrical = (x: number, y: number, z: number):[number, number, number] => {
  const [modulus, arg] = toPolar(x, y);
  return [modulus, arg, z];
}

export const toCartesianFromCylindrical = (modulus: number, arg: number, z: number) => {
  const [x, y] = toCartesian(modulus, arg);
  return [x, y, z];
}

/**
 * 
 * @param x 
 * @param y 
 * @param z 
 * @return (radius r, inclination θ, azimuth φ)
 */
export const toSpherical = (x: number, y: number, z: number):[number, number, number] => {
  const r = Math.sqrt(x**2 + y**2 + z**2);
  const t = Math.acos(z/r)
  const a = Math.atan2(y, x)

  return [r, a, t];
}

/**
 * 
 * @param x 
 * @param y 
 * @param z 
 * @return (radius r, inclination θ, azimuth φ)
 */
export const toSphericalFromCylindrical = (modulus: number, arg: number, z:number) => {
  const [r, a] = toPolar(z, modulus);
  return [r, arg, a];
}

export const toCylindricalFromSpherical = (r:number, t: number, a: number) => {
  const [modulus, arg] = toCartesian(r, a);
  return [arg, t, modulus];
}

export const toCartesianFromSpherical = (r:number, t: number, a: number) => {
  const x = toCylindricalFromSpherical(r, t, a);
  return toCartesianFromCylindrical(x[0], x[1], x[2]);
}
