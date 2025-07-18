function fSquared (arr) {
 return filter(val=>{
   let sum =0
   if(typeof val !== 'number') return undefined;
   if(val*val % 2 == 0){
     sum +=val
   }
   return sum
 })
};