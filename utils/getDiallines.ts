export function getDiallines(): number[] {
  const diallines = [];
  for (let i = 0; i < 60; i += 1) {
    diallines.push(i);
  }

  return diallines;
}
