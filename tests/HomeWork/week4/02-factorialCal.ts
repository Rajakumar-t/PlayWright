function factorial(n: number): number {
  if (n < 0) {
    throw new Error(`factorial is undefined for negative numbers: ${n}`);
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {   // start at 2; starting at 1 also works
    result *= i;
  }
  return result;
}

console.log(factorial(1));  // 1
console.log(factorial(3));  // 6
console.log(factorial(10)); // 3628800

try {
  console.log(factorial(-3)); // will throw
} catch (err) {
  console.error("Error:", (err as Error).message);
}
