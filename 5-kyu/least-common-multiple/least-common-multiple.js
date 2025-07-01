function leastCommonMultiple(a, b) {
  return (a * b) / gcd(a, b);
}
​
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
​
function lcm(...args) {
  if (args.length === 0) return 1;
  if (args.includes(0)) return 0;
  return args.reduce((acc, val) => leastCommonMultiple(acc, val), 1);
}