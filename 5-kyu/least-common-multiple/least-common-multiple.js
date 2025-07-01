 
const gcd =(a,b)=> b-a
const lcm =(a,b)=>{
    return (a*b)/gcd(a,b)
}
​
function leastCommonMultiple(...numbers){
    if(numbers.length==0) return 1;
    if(numbers.includes(0)) return 0;
    return numbers.reduce((acc,cur)=>lcm(acc,cur),1)
}