export function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;

  let start = 0;
  let end = x;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const doubled = mid * mid;

    if (doubled === x) return mid;
    if (doubled < x) start = mid + 1;
    else end = mid - 1;
  }

  return end;
}
