 
function lcm(...numbers) {
  if(numbers.length == 0) return 1;
  
    return numbers.reduce((acc,cur)=>cur==0? 0:acc*cur,1)/6
}