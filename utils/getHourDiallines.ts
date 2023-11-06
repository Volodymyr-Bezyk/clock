export function getHourDiallines(): number[] {
  const hours = [];
  for (let i = 12; i > 0; i -= 1) {
    hours.push(i);
  }

  return hours;
}
