function digitalRoot(n) {
  let sum =n.toString().split('');
  while(sum.length>1){
    let digit = sum.reduce((acc,cur)=>acc+ +cur,0);
    sum = digit.toString().split('')
  }
  return +sum
}