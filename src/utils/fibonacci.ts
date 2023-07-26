export function fibonacci(n: number): number[] {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const results = fibonacci(n - 1);
    results.push(results[results.length - 1] + results[results.length - 2]);
    return results;
  }
}