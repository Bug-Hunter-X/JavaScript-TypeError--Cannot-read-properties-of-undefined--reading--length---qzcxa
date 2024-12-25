function foo(x) {
  // Check if x is null or undefined using optional chaining and nullish coalescing
  return x?.length ?? 0; 
}

console.log(foo(null)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo(undefined)); // 0