export const isPrime = (i: number, p: number[]): boolean => {
  if (p.length > 0) {
    if (i % p[0] === 0 && i !== p[0]) {
      return false;
    }

    const d = p.slice(1, p.length);
    return isPrime(i, d);
  }

  return true;
};

export const prime = (n: number): number[] => {
  const p: number[] = [3, 5];
  let i = 7;
  while (i < n) {
    if (i % 10 !== 5 && isPrime(i, p)) {
      p.push(i);
    }

    i = i + 2;
  }

  // returning and adding `1` and `2` for completeness
  return [1, 2].concat(p);
};
