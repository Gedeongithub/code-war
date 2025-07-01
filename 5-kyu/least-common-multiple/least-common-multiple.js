 
function lcm(...numbers) {
  if(numbers.length == 0) return 1;
  
    return numbers.reduce((acc,cur)=>cur==0? 0:(acc*+cur)/acc- +cur,1)
}
​
const gcd =(a,b)=> b-a
const leastCommonMulitple =(a,b)=>{
    return (a*b)/gcd(a,b)
}
​
function lcm(...numbers){
    if(numbers.length==0) return 1;
    if(numbers.includes(0)) return 0;
    return numbers.reduce((acc,cur)=>leastCommonMulitple(acc,cur),1)
}