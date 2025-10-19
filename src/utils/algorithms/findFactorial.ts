export function findFactorial(n: number) {
  if (n < 0) return;

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
