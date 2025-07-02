// function digitsAverage(input) {
//   let avg = ''+input,digit = null;
//  while(avg.length>1){
//    digit = digit = +[...''+avg].reduce((a,c)=>Math.floor(+a+ +c/avg.length));
//    avg= ''+digit;
// //    console.log(digit)
//  }
    
//   return +avg;
​
// }
// console.log(digitsAverage(246))
​
function digitsAverage(input) {
  let current = String(input);
  
  while (current.length > 1) {
    let next = '';
    for (let i = 0; i < current.length - 1; i++) {
      const digit1 = parseInt(current[i]);
//       console.log('digit one'+digit1)
      const digit2 = parseInt(current[i + 1]);
      const average = Math.ceil((digit1 + digit2) / 2);
      next += average;
    }
    current = next;
  }
  
  return parseInt(current);
}
console.log(digitsAverage(246))