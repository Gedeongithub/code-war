 
// function lcm(...numbers) {
//   if(numbers.length == 0) return 1;
  
//     return numbers.reduce((acc,cur)=>cur==0? 0:(acc*+cur)/acc- +cur,1)
// }
​
// const gcd =(a,b)=> b-a
// const leastCommonMulitple =(a,b)=>{
//     return (a*b)/gcd(a,b)
// }
​
// function lcm(...numbers){
//     if(numbers.length==0) return 1;
//     if(numbers.includes(0)) return 0;
//     return numbers.reduce((acc,cur)=>leastCommonMulitple(acc,cur),1)
// }
​
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}
​
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
​
function leastCommonMultiple(...args) {
  if (args.length === 0) return 1;
  if (args.includes(0)) return 0;
  return args.reduce((acc, val) => lcm(acc, val), 1);
}